function createMesh_video (geom,texture) {
  var materialArray = [];
  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555  }));
  materialArray.push(new THREE.MeshBasicMaterial({ color: 0x555555   }));
  materialArray.push(new THREE.MeshBasicMaterial({ map: texture }));
  materialArray.push(new THREE.MeshBasicMaterial({ color: 0xeeee33  }));
  var faceMaterial = new THREE.MeshFaceMaterial(materialArray);
  // create a multimaterial
  var mesh = new THREE.Mesh(geom, faceMaterial);
  return mesh;
}

function createMesh(geom, isT, imageFile, material, bump, repeatW, repx, repy) {
   var mat;
   if (isT){
      var texture = THREE.ImageUtils.loadTexture(imageFile);
      geom.computeVertexNormals();
      if (material == 'basic') {
        mat = new THREE.MeshBasicMaterial();
      } else if (material == 'phong'){
        mat = new THREE.MeshPhongMaterial();
      } else if (material == 'lambert') {
        mat = new THREE.MeshLambertMaterial();
      }
      mat.map = texture;
      mat.side = THREE.DoubleSide;
      if (bump) {
        var bump = THREE.ImageUtils.loadTexture(bump)
        if (repeatW){
         bump.wrapS = THREE.RepeatWrapping;
          bump.wrapT = THREE.RepeatWrapping;
          bump.repeat.set(repx,repy );
        }
        mat.bumpMap = bump;
        mat.bumpScale = 0.2;
      }
      if(repeatW){
        texture.wrapS = THREE.RepeatWrapping;
        texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(repx,repy );
      }
  } else {
    if (material == 'basic') {
      mat = new THREE.MeshBasicMaterial({color: imageFile[0], transparent: imageFile[1], opacity:imageFile[2]});
    } else if (material == 'phong'){
      mat = new THREE.MeshPhongMaterial({color: imageFile[0], transparent: imageFile[1], opacity:imageFile[2]});
    } else if (material == 'lambert') {
      mat = new THREE.MeshLambertMaterial({color: imageFile[0], transparent: imageFile[1], opacity:imageFile[2]});
      }
    }
    var mesh = new THREE.Mesh(geom, mat);
    return mesh;
}

function drawShape(shape_px, shape_py, hole_px, hole_py, rotation, position, imageFile, rp, holes, bump) {
      var shape = new THREE.Shape();
      shape.moveTo(shape_px[shape_px.length-1],shape_py[shape_py.length-1]);
      for(var i = 0 ; i < 3; i++){
        shape.lineTo(shape_px[i],shape_py[i]);
      }
      if (holes>0) {
        for(var i = 0; i<holes; i++) {
          var hole = new THREE.Path();
          hole.moveTo(hole_px[i][hole_px[i].length-1],hole_py[i][hole_py[i].length-1]);
          for(var j = 0 ; j < hole_px[i].length-1; j++){
            hole.lineTo(hole_px[i][j],hole_py[i][j]);
          }
          shape.holes.push(hole);
      }
  }
    var shapeGeom = new THREE.ShapeGeometry(shape);
    var shapeMesh = createMesh(shapeGeom, true, imageFile, 'basic', bump, true, rp, rp); 
    shapeMesh.rotation.set(rotation[0],rotation[1],rotation[2]);
    shapeMesh.position.set(position[0],position[1],position[2]);
    return shapeMesh;
}  

function mkPlane(w_plane, h_plane, w_defPlane, h_defPlane, rotation, position, imageFile, bump, rp){
   
    var planeGeometry = new THREE.PlaneGeometry(w_plane, h_plane, w_defPlane, h_defPlane);
    var plane = createMesh(planeGeometry,true, imageFile, 'phong', bump, true, rp, rp);
    plane.rotation.set(rotation[0],rotation[1],rotation[2]);
    plane.position.set(position[0], position[1], position[2]);
    plane.receiveShadow = true;
    return plane;
}

  function mkLegTable(cubeX, cubeY, cubeZ, sphereR, sphereDef, cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile) {
    var leg = new THREE.Object3D();
    var cubeGeometry = new THREE.BoxGeometry(cubeX,cubeY,cubeZ);
    var leg1 = createMesh(cubeGeometry, true,imageFile,'phong');
    leg1.position.set(0,cylinderH+2*sphereR+cubeY/2,0);
    leg.add(leg1);            
    var sphereGeometry = new THREE.SphereGeometry( sphereR, sphereDef ,sphereDef); 
    var leg2 = createMesh(sphereGeometry,true, imageFile, 'phong');
    leg2.position.set(0,cylinderH+sphereR,0);
    leg.add(leg2);
    var cylinderGeometry = new THREE.CylinderGeometry( cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, cylinderDef ); 
    var leg3 = createMesh(cylinderGeometry, true,imageFile, 'phong');
    leg3.position.set(0,cylinderH/2,0);
    leg.add(leg3 );
    return leg;
}

function mkTable(planeX, planeY, planeZ, imageFile, cubeX, cubeY, cubeZ, sphereR, sphereDef, cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile, colorS ) {
    var table = new THREE.Object3D();
    var cubeGeometry = new THREE.BoxGeometry(planeX,planeY,planeZ);
    var plane = createMesh(cubeGeometry, true,imageFile, 'phong');
    plane.position.set(0,cylinderH+2*sphereR+cubeY+planeY/2,0);
    table.add(plane);
    var leg1 = mkLegTable(cubeX, cubeY, cubeZ, sphereR, sphereDef, cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile);
    var leg2 = mkLegTable(cubeX, cubeY, cubeZ, sphereR, sphereDef, cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile);
    var leg3 = mkLegTable(cubeX, cubeY, cubeZ, sphereR, sphereDef, cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile);
    var leg4 = mkLegTable(cubeX, cubeY, cubeZ, sphereR, sphereDef, cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile);
    leg1.position.set((planeX/2)-cubeX/2,0,(planeZ/2)-cubeZ/2);       
    leg2.position.set(-((planeX/2)-cubeX/2),0,-((planeZ/2)-cubeZ/2));        
    leg3.position.set(-((planeX/2)-cubeX/2),0,(planeZ/2)-cubeZ/2);
    leg4.position.set((planeX/2)-cubeX/2,0,(-(planeZ/2)+cubeZ/2));
    table.add(leg1);
    table.add(leg2);
    table.add(leg3);
    table.add(leg4);
    return table;
}

function mkBackChair_partial(back_chairX,back_chairY,back_chairZ, imageFile) {
  var cubeGeometry = new THREE.BoxGeometry(back_chairX,back_chairY,back_chairZ);
  var back_chair = createMesh(cubeGeometry,true, imageFile, 'phong');
  return back_chair;
}

function mkBackChair(back_chairX1,back_chairY1,back_chairZ1, back_chairX2,back_chairY2,back_chairZ2,imageFile) {
  var back_chair = new THREE.Object3D();
  var back1 = mkBackChair_partial(back_chairX1,back_chairY1,back_chairZ1,imageFile);
  back1.position.y = back_chairY1/2;
  back_chair.add(back1);
  var back2 = mkBackChair_partial(back_chairX1,back_chairY1,back_chairZ1,imageFile);
  back2.position.x = back_chairX2-back_chairX1;
  back2.position.y = back_chairY1/2;
  back_chair.add(back2);
  var back3 = mkBackChair_partial(back_chairX2,back_chairY2,back_chairZ2,imageFile);
  back3.position.set(back_chairX2/2-back_chairX1/2,back_chairY1,0);
  back_chair.add(back3);
  var back4 = mkBackChair_partial(back_chairX2,back_chairY2,back_chairZ2,imageFile);
  back4.position.set(back_chairX2/2-back_chairX1/2,back_chairY1-2*back_chairY2,0);
  back_chair.add(back4);
  return back_chair;
}

function mkLegChair(cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile) {
  var cylinderGeometry = new THREE.CylinderGeometry( cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, cylinderDef ); 
  var leg = createMesh(cylinderGeometry, true,imageFile, 'phong');
  return leg;
}

function mkChair(sitting_chairX,sitting_chairY,sitting_chairZ,cylinderRtop, cylinderRbutton, cylinderH, cylinderDef,back_chairX1,back_chairY1,back_chairZ1, back_chairX2,back_chairY2,back_chairZ2, imageFile ) {
  var chair = new THREE.Object3D();
  var cubeGeometry = new THREE.BoxGeometry(sitting_chairX,sitting_chairY,sitting_chairZ);
  var sitting_chair = createMesh(cubeGeometry, true,imageFile, 'phong');
  sitting_chair.position.set(0,cylinderH+sitting_chairY/2,0);
  chair.add(sitting_chair);
  var leg1 = mkLegChair(cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile);
  var leg2 = mkLegChair(cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile);
  var leg3 = mkLegChair(cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile);
  var leg4 = mkLegChair(cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile);
  leg1.position.set((sitting_chairX/2)-cylinderRtop,cylinderH/2,(sitting_chairZ/2)-cylinderRtop);       
  leg2.position.set(-((sitting_chairX/2)-cylinderRtop),cylinderH/2,-((sitting_chairZ/2)-cylinderRtop));        
  leg3.position.set(-((sitting_chairX/2)-cylinderRtop),cylinderH/2,(sitting_chairZ/2)-cylinderRtop);
  leg4.position.set((sitting_chairX/2)-cylinderRtop,cylinderH/2,-((sitting_chairZ/2)-cylinderRtop));
  chair.add(leg1);
  chair.add(leg2);
  chair.add(leg3);
  chair.add(leg4);
  var back = mkBackChair(back_chairX1,back_chairY1,back_chairZ1, back_chairX2,back_chairY2,back_chairZ2,imageFile);
  back.position.x = -sitting_chairX/2 + back_chairX1/2;
  back.position.y = sitting_chairY+cylinderH;
  back.position.z = sitting_chairZ/2 - back_chairZ1/2;
  chair.add(back);
  //chair.scale.set(0.5,0.8,0.4);
  return chair;
}

function mkBackDresser(back_dresser_x, back_dresser_y, back_dresser_z, back_dresser_x1, back_dresser_y1, back_dresser_z1, height_dresser, back_dresser_img) {
  var dresser = new THREE.Object3D();
  a = mkBackChair_partial(back_dresser_x,back_dresser_y,back_dresser_z,back_dresser_img);
  b = mkBackChair_partial(back_dresser_x,back_dresser_y,back_dresser_z,back_dresser_img);
  c = mkBackChair_partial(back_dresser_x1,back_dresser_y1,back_dresser_z1,back_dresser_img);
  d = mkBackChair_partial(back_dresser_x1,back_dresser_y1,back_dresser_z1,back_dresser_img);
  e =  mkBackChair_partial(back_dresser_x1,back_dresser_y1,back_dresser_z1,back_dresser_img);;
  e.rotation.y = Math.PI/2;
  b.position.y = height_dresser;
  c.position.set(-back_dresser_x/2+back_dresser_x1/2,back_dresser_y1/2,-back_dresser_x1/2);
  d.position.set(back_dresser_x/2-back_dresser_x1/2,back_dresser_y1/2,-back_dresser_x1/2);
  e.position.set(0,back_dresser_y1/2,-back_dresser_x/2+back_dresser_x1/2);
  dresser.add(a);
  dresser.add(b);
  dresser.add(c);
  dresser.add(d);
  dresser.add(e);
  return dresser;

}

function mkDoorDresser(door_dresser_x2, door_dresser_y2,door_dresser_z2,door_dresser_img2) {
  var dresser = new THREE.Object3D();
  var e1 =  mkBackChair_partial(door_dresser_x2,door_dresser_y2,door_dresser_z2,door_dresser_img2);
  e1.position.set(door_dresser_x2/2,door_dresser_y2/2,-door_dresser_z2/2) ;
  dresser.add(e1);
  dresser.one = e1;
  return dresser;
}

function mkDoor(doorx, doory, doorz,img, position) {
  var pivot_door = new THREE.Object3D();
  var doorGeometry = new THREE.BoxGeometry(doorx, doory, doorz);
  var door = createMesh(doorGeometry,true, img, 'basic');
  door.position.set(0,doory/2,doorz/2);
  pivot_door.add(door);
  pivot_door.position.set(position[0],position[1],position[2]);
  pivot_door.door = door;
  var handler1 = mkHandler();
  handler1.rotation.z = Math.PI/2;
  handler1.rotation.x = -Math.PI/2;
  handler1.position.set(-doorx/2,doory/2,3*doorz/4);
  pivot_door.add(handler1);
  pivot_door.handler1 = handler1.handler;
  var handler2 = mkHandler();
  handler2.rotation.z = Math.PI/2;
  handler2.rotation.x = Math.PI/2;
  handler2.rotation.y = -Math.PI;
  handler2.rotation.x = -Math.PI/2;
  handler2.position.set(doorx/2,doory/2,3.5*doorz/4);
  pivot_door.add(handler2);
  pivot_door.handler2 = handler2.handler;
  return pivot_door;
}

function mkOvenGas() {
  
  var oven = new THREE.Object3D();
  var planeGeometry = new THREE.PlaneGeometry(1.3,1.3);
  var plane_ovenGas = createMesh(planeGeometry, true,'image/oven.jpg','phong');
  plane_ovenGas.rotation.x = -Math.PI/2
  oven.add(plane_ovenGas);
  var gas1Geometry = new THREE.CylinderGeometry(0.2,0.2,0.1,20,20);
  var gas1 = createMesh(gas1Geometry,true, 'image/tv.jpg','phong');
  gas1.position.set(-0.3,0,-0.3);
  oven.add(gas1);
  var gas2Geometry = new THREE.CylinderGeometry(0.15,0.15,0.1,20,20);
  var gas2 = createMesh(gas2Geometry,true, 'image/tv.jpg','phong');
  gas2.position.set(0.3,0,-0.3);
  oven.add(gas2);
  var gas3Geometry = new THREE.CylinderGeometry(0.1,0.1,0.1,20,20);
  var gas3 = createMesh(gas3Geometry, true,'image/tv.jpg','phong');
  gas3.position.set(-0.3,0,0.3);
  oven.add(gas3);
  var gas4Geometry = new THREE.CylinderGeometry(0.05,0.05,0.1,20,20);
  var gas4 = createMesh(gas4Geometry,true, 'image/tv.jpg','phong');
  gas4.position.set(0.3,0,0.3);
  oven.add(gas4);
  var button1Geometry = new THREE.CylinderGeometry(0.02,0.02,0.03,20,20);
  var button1 = createMesh(button1Geometry,true, 'image/tv.jpg','phong');
  button1.position.set(-0.1,0,0.6);
  oven.add(button1);
  var button2Geometry = new THREE.CylinderGeometry(0.02,0.02,0.03,20,20);
  var button2 = createMesh(button2Geometry,true, 'image/tv.jpg','phong');
  button2.position.set(-0.3,0,0.6);
  oven.add(button2);
  var button3Geometry = new THREE.CylinderGeometry(0.02,0.02,0.03,20,20);
  var button3 = createMesh(button3Geometry,true, 'image/tv.jpg','phong');
  button3.position.set(0.1,0,0.6);
  oven.add(button3);
  var button4Geometry = new THREE.CylinderGeometry(0.02,0.02,0.03,20,20);
  var button4 = createMesh(button4Geometry,true, 'image/tv.jpg','phong');
  button4.position.set(0.3,0,0.6);
  oven.add(button4);

  return oven;
}

  //crea mezza anta della finestra
  function mkPartialWindow(sideTop_LR,side_glass2,sideButton,imageFile,position,isT){
    var cubeGeometry = new THREE.BoxGeometry(sideTop_LR,side_glass2,sideButton);
    var win = createMesh(cubeGeometry, isT,imageFile,'lambert');
    win.position.set(position[0],position[1],position[2]);
    return win;
  }

  //crea un anta della finestra
  function mkWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position){
    var win = new THREE.Object3D();
    win1 = mkPartialWindow(win_x,side_LR_y,side_LR_z,imageFile1,position[0],true)
    win2 = mkPartialWindow(win_x,side_LR_y,side_LR_z,imageFile1,position[1],true)
    win3 = mkPartialWindow(win_x,sideTop_y,sideTop_z,imageFile1,position[2],true)
    win4 = mkPartialWindow(win_x,sideButton_y,sideButton_z,imageFile1,position[3],true)
    glass = mkPartialWindow(win_x,side_glass_y,side_glass_z,imageFile2,position[4],false)
    win.add(win1);
    win.add(win2);
    win.add(win3);
    win.add(win4);
    win.add(glass);
    return win;
  }

  //posiziona la finestra per il perno
  function moveWind(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position,pos,position_obj){
  var win = new THREE.Object3D();
  var win1 = mkWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position);
  var win2 = mkWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position);
  win2.rotation.z = Math.PI;
  var appo = mkPartialWindow(side_LR_z,win_h,win_w/2,['#00FFFF',true,0],position_obj,false);
  win.add(win1);
  win.add(win2);
  win.add(appo);
  win.win = appo;
  return win;
}

  //crea finestra
  function giveWindows(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,pos,position_obj){
  
  var win = new THREE.Object3D();
  var win1 = moveWind(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,pos[0],position_obj[0]);
  win1.position.y = win_h/2;
  var win2 = moveWind(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position2,pos[1],position_obj[1]);
  win2.position.y = win_h/2;
  win.add(win1);
  win.add(win2);
  win.int1 = win1;
  win1.position.set(pos[0][0],pos[0][1],pos[0][2]);
  win.int2 = win2;
  win2.position.set(pos[1][0],pos[1][1],pos[1][2]);
  win.int1.win = win1.win;
  win.int2.win = win2.win;
  return win;
}

function mkPartialExternalWindow(z,y,x,imageFile,position,isT){
  var cubeGeometry = new THREE.BoxGeometry(z,y,x);
  var win = createMesh(cubeGeometry, isT,imageFile,'lambert');
  win.position.set(position[0],position[1],position[2]);
  return win;
}

function mkExternalWindow(close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,win_h,win_w,win_x,imageFile,position,s,space,rip){
  var win = new THREE.Object3D();
  var win1 = mkPartialExternalWindow(win_x,close_side_LR_y,close_side_LR_z,imageFile,position[0],true);
  var win2 = mkPartialExternalWindow(win_x,close_side_LR_y,close_side_LR_z,imageFile,position[1],true);

  for (var i = 1; i <rip; i++) {
    var pos = [-win_x/2,win_h-i*close_sideTop_y/2-(i-1)*space,s*(close_sideTop_z/2+close_side_LR_z)]
    var win_m = mkPartialExternalWindow(win_x,close_sideTop_y,close_sideTop_z,imageFile,pos,true);
    win_m.rotation.z = Math.PI/8;
    win.add(win_m);
  }
  var pos = [position[0][0],position[0][1],position[0][2]+s*(win_w/4-close_side_LR_z/2)]
  var appo = mkPartialWindow(win_x,close_side_LR_y,win_w/2,['#FFFFFF',true,0],pos,false);
  win.add(appo)
  win.add(win1);
  win.add(win2);
  win.win = appo;
  return win;
}

function giveExternalWindows(close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,win_h,win_w,win_x,imageFile,position1,position2,pos,space,rip){
  var win = new THREE.Object3D();
  var extWin1 = mkExternalWindow(close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,win_h,win_w,win_x,imageFile,position1,1,space,rip);
  var extWin2 = mkExternalWindow(close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,win_h,win_w,win_x,imageFile,position2,-1,space,rip);
  extWin2.position.set(pos[0][0],pos[0][1],pos[0][2]);
  extWin1.position.set(pos[1][0],pos[1][1],pos[1][2]);
  win.add(extWin1);
  win.add(extWin2);
  win.ext1 = extWin1;
  win.ext1.win = extWin1.win;
  win.ext2 = extWin2;
  win.ext2.win = extWin2.win;
  return win;
}


 function completeWindow(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,position_obj,pos,close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,imageFile_ext,position_ext1,position_ext2,pos_ext,space,rip){

  var win = new THREE.Object3D();
  var winint = giveWindows(side_LR_z,side_LR_y,side_glass_z,side_glass_y,sideTop_z,sideTop_y,sideButton_z,sideButton_y,win_h,win_w,win_x,imageFile1,imageFile2,position1,position2,pos,position_obj);

  //var winext = giveExternalWindows(close_side_LR_z,close_side_LR_y,close_sideTop_z,close_sideTop_y,win_h,win_w,win_x,imageFile_ext,position_ext1,position_ext2,pos_ext,space,rip);

  win.add(winint);
  win.intern = winint;
  win.int1 = winint.int1;
  win.int1.win = winint.int1.win;
  win.int2 = winint.int2;
  win.int2.win = winint.int2.win;
  //win.add(winext);
  //win.extern = winext;
  //win.ext1 = winext.ext1;
  //win.ext1.win = winext.ext1.win;
  //win.ext2 = winext.ext2;
 // win.ext2.win = winext.ext2.win;

  return win;
}

function mkRemoteControl() {
  var remoteControl = new THREE.Object3D();
  var cubeGeometry = new THREE.BoxGeometry(5,10,2);
  var remoteControl_plastic = createMesh(cubeGeometry, true,'image/tv.jpg', 'phong');

  var oneGeometry = new THREE.BoxGeometry(1,1,1);
  var one = createMesh(oneGeometry,true, 'image/tv/one.jpg','phong');
  one.position.set(-1.25,3.5,1);

  var twoGeometry = new THREE.BoxGeometry(1,1,1);
  var two = createMesh(twoGeometry,true, 'image/tv/two.jpg','phong');
  two.position.set(1.25,3.5,1);

  var threeGeometry = new THREE.BoxGeometry(1,1,1);
  var three = createMesh(threeGeometry,true, 'image/tv/trhee.jpg','phong');
  three.position.set(-1.25,1.5,1);

  var fourGeometry = new THREE.BoxGeometry(1,1,1);
  var four = createMesh(fourGeometry,true, 'image/tv/four.jpg','phong');
  four.position.set(1.25,1.5,1);

  var fiveGeometry = new THREE.BoxGeometry(1,1,1);
  var five = createMesh(fiveGeometry,true, 'image/tv/five.jpg','phong');
  five.position.set(0,-0.5,1);

  var onGeometry = new THREE.BoxGeometry(1,1,1);
  var onoff = createMesh(onGeometry,true, 'image/tv/onoff.jpg','phong');
  onoff.position.set(0,-2.5,1);

  remoteControl.add(remoteControl_plastic);
  remoteControl.add(one);
  remoteControl.add(two);
  remoteControl.add(three);
  remoteControl.add(four);
  remoteControl.add(five);
  remoteControl.add(onoff);
  remoteControl.one = one;
  remoteControl.two = two;
  remoteControl.three = three;
  remoteControl.four = four;
  remoteControl.five = five;
  remoteControl.onoff = onoff;
  return remoteControl;
}

function mkHandler() {
 var handler = new THREE.Object3D();
 var baseGeometry = new THREE.CylinderGeometry(0.5, 0.5,0.1 ,20);
 var keyGeometry = new THREE.CylinderGeometry(0.5, 0.5,0.1 ,20);
 var h1Geometry =  new THREE.CylinderGeometry(0.2, 0.2,0.4 ,20);
 var h2Geometry =  new THREE.CylinderGeometry(0.2, 0.1, 1.5 ,20);
 var base = createMesh(baseGeometry,true, 'image/gold.png','phong');
 var h1 = createMesh(h1Geometry,true,'image/gold.png','phong');
 var h2 = createMesh(h2Geometry,true, 'image/gold.png','phong');
 h1.position.y = 0.2;
 h2.rotation.z = Math.PI/2;
 h2.position.set(0.6,0.6,0);
 handler.add(base);
 handler.add(h1);
 handler.add(h2);
 handler.handler = h2;
 return handler;
}

function mkGarden() {
  var garden = new THREE.Object3D();
  var cubeGeometry = new THREE.BoxGeometry(200*x,1*y,200*z);
  var plane = createMesh(cubeGeometry, true,'image/lawn.jpg', 'basic', false, true, 6, 6);
  plane.position.y = -0.5*y
  garden.add(plane);
  var cubeGeometry = new THREE.BoxGeometry(200*x,200*y,1*z);
  var plane = createMesh(cubeGeometry, true,'image/sky.jpg', 'basic');
  plane.position.set(0*x,100*y,100*z);
  garden.add(plane);
  var cubeGeometry = new THREE.BoxGeometry(200*x,200*y,1*z);
  var plane = createMesh(cubeGeometry, true,'image/sky.jpg', 'basic');
  plane.position.set(0*x,100*y,-100*z);
  garden.add(plane);
  var cubeGeometry = new THREE.BoxGeometry(1*x,200*y,200*z);
  var plane = createMesh(cubeGeometry, true,'image/sky.jpg', 'basic');
  plane.position.set(100*x,100*y,0*z);
  garden.add(plane);
  var cubeGeometry = new THREE.BoxGeometry(1*x,200*y,200*z);
  var plane = createMesh(cubeGeometry, true,'image/sky.jpg', 'basic');
  plane.position.set(-100*x,100*y,0*z);
  garden.add(plane);

  return garden;
}