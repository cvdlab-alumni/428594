function mkKitchen(){ //cucina
      var kitchen = new THREE.Object3D();
      var kitchen_wf = new THREE.Object3D();
      var kitchen_ligth = new THREE.Object3D();
      var kitchen_forniture = new THREE.Object3D();

      kitchen.add(kitchen_ligth);
      kitchen_ligth.add(kitchen_wf);
      kitchen_wf.add(kitchen_forniture);
      //variabili
      var kitchen_floor_x = 7*x;
      var kitchen_floor_y = 6*z;
      var kitchen_floor_def = 20;
      var kitchen_floor_rotation = [-Math.PI/2,0,0];
      var kitchen_floor_position = [4*x,0.6*y,(-3-0.5)*z];
      var kitchen_floor_image = 'image/kitchen_floor.jpg';
      var kitchen_floor_bump = 'image/kitchen_floor_bump.jpg';
      var kitchen_wall1_shapex = [6.5*x,0,0,6.5*x];
      var kitchen_wall1_shapey = [0,0,10*y,10*y];
      var kitchen_wall1_holex = [[3*x,6*x,6*x,3*x]];
      var kitchen_wall1_holey = [[3*y,3*y,7*y,7*y]];
      var kitchen_wall1_rotation = [0,Math.PI/2,0];
      var kitchen_wall1_position = [0.55*x,0.55*y,0];
      var kitchen_wall2_shapex = [0.5*x,0.5*x,7.5*x,7.5*x];
      var kitchen_wall2_shapey = [10*y,0,0,10*y];
      var kitchen_wall2_holex = [[2.5*x,2.5*x,5.5*x,5.5*x]];
      var kitchen_wall2_holey = [[7*y,3*y,3*y,7*y]];
      var kitchen_wall2_rotation = [0,Math.PI,0];
      var kitchen_wall2_position = [8*x,0.5*y,-0.55*z];
      var kitchen_wall3_shapex = [0.5*x,0.5*x,6.5*x,6.5*x];
      var kitchen_wall3_shapey = [10*y,0,0,10*y];
      var kitchen_wall3_holex = [[1.5*x,1.5*x,3.5*x,3.5*x]];
      var kitchen_wall3_holey = [[8*y,0,0,8*y]];
      var kitchen_wall3_rotation = [0,-Math.PI/2,0];
      var kitchen_wall3_position = [7.45*x,0.5*y,-7*z];
      var kitchen_wall4_shapex = [0.5*x,0.5*x,7.5*x,7.5*x];
      var kitchen_wall4_shapey = [10*y,0,0,10*y];
      var kitchen_wall4_rotation = [0,0,0];
      var kitchen_wall4_position = [0*x,0.5*y,-6.45*z];
      var kitchen_wall_image = 'image/kitchen_wall.jpg';
      var r = 4;
      var rp = 0.1;

      var kitchen_floor = new mkPlane(kitchen_floor_x, kitchen_floor_y, kitchen_floor_def, kitchen_floor_def,kitchen_floor_rotation, kitchen_floor_position, kitchen_floor_image, kitchen_floor_bump, r);
      kitchen_wf.add(kitchen_floor);
      var kitchen_wall1 = drawShape(kitchen_wall1_shapex, kitchen_wall1_shapey, kitchen_wall1_holex, kitchen_wall1_holey,kitchen_wall1_rotation, kitchen_wall1_position, kitchen_wall_image,rp, 1);
      kitchen_wf.add(kitchen_wall1);
      var kitchen_wall2 = drawShape(kitchen_wall2_shapex, kitchen_wall2_shapey, kitchen_wall2_holex, kitchen_wall2_holey,kitchen_wall2_rotation, kitchen_wall2_position, kitchen_wall_image,rp, 1);
      kitchen_wf.add(kitchen_wall2);
      var kitchen_wall3 = drawShape(kitchen_wall3_shapex, kitchen_wall3_shapey, kitchen_wall3_holex, kitchen_wall3_holey,kitchen_wall3_rotation, kitchen_wall3_position, kitchen_wall_image,rp, 1);
      kitchen_wf.add(kitchen_wall3);
      var kitchen_wall4 = drawShape(kitchen_wall4_shapex, kitchen_wall4_shapey, [], [], kitchen_wall4_rotation, kitchen_wall4_position, kitchen_wall_image,rp, 0);
      kitchen_wf.add(kitchen_wall4);    


      //tavolo
      var planeX = 2;
      var planeY = 0.5;
      var planeZ = 2;
      var cubeX = 0.3;
      var cubeY = 0.3;
      var cubeZ = 0.3;
      var sphereR = 0.15;
      var sphereDef = 20;
      var colorS = '0xDC143C'; 
      var cylinderRtop = 0.15;
      var cylinderRbutton = 0.075;
      var cylinderH = 2;
      var cylinderDef = 20;
      var imageFile = 'image/wood.jpg';

      var table = mkTable(planeX, planeY, planeZ, imageFile, cubeX, cubeY, cubeZ, sphereR, sphereDef, cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile, colorS);
      table.scale.set(x,y,z);
      table.position.set(5.5*x,0.5*y,-2*z);
      kitchen_forniture.add(table);

      //sedia
      var sitting_chairX = 1.3;
      var sitting_chairY = 0.3;
      var sitting_chairZ = 1.3;
      var cylinderRtop = 0.1;
      var cylinderRbutton = 0.05
      var cylinderH = 2;
      var cylinderDef = 20;
      var imageFile = 'image/wood.jpg';

      var back_chairX1 = 0.2;
      var back_chairY1 = 2;
      var back_chairZ1 = 0.2;
      var back_chairX2 = 1.3;
      var back_chairY2 = 0.2;
      var back_chairZ2 = 0.2;

      var chair1 = mkChair(sitting_chairX,sitting_chairY,sitting_chairZ,cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, back_chairX1,back_chairY1,back_chairZ1, back_chairX2,back_chairY2,back_chairZ2, imageFile);
      chair1.position.set(5.5*x,0.5*y,-1.2*z);
      chair1.scale.set(x,y,z);
      kitchen_forniture.add(chair1);

      var chair2 = mkChair(sitting_chairX,sitting_chairY,sitting_chairZ,cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, back_chairX1,back_chairY1,back_chairZ1, back_chairX2,back_chairY2,back_chairZ2, imageFile);
      chair2.rotation.y = Math.PI;
      chair2.position.set(5.5*x,0.5*y,-3*z);
      chair2.scale.set(x,y,z);
      kitchen_forniture.add(chair2);

      var chair3 = mkChair(sitting_chairX,sitting_chairY,sitting_chairZ,cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, back_chairX1,back_chairY1,back_chairZ1, back_chairX2,back_chairY2,back_chairZ2, imageFile);
      chair3.rotation.y = Math.PI/2;
      chair3.position.set(6.5*x,0.5*y,-2*z);
      chair3.scale.set(x,y,z);
      kitchen_forniture.add(chair3);

      var chair4 = mkChair(sitting_chairX,sitting_chairY,sitting_chairZ,cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, back_chairX1,back_chairY1,back_chairZ1, back_chairX2,back_chairY2,back_chairZ2, imageFile);
      chair4.rotation.y = -Math.PI/2;
      chair4.position.set(4.5*x,0.5*y,-2*z);
      chair4.scale.set(x,y,z);
      kitchen_forniture.add(chair4);

      //mobile cucina
      var back_dresser_x = 1.5;
      var back_dresser_y = 0.5;
      var back_dresser_z = 1.5;
      var back_dresser_img = 'image/wood.jpg';
      var door_dresser_img2 = 'image/dresser.jpg';
      var back_dresser_x1 = 0.5;
      var back_dresser_y1 = 2.5;
      var back_dresser_z1 = 1;
      var door_dresser_x2 = 0.5;
      var door_dresser_y2 = 2;
      var door_dresser_z2 = 1.5;
      var height_dresser = 2.5;
      var obj_refrigerator = 'model/kitchen/Refrigerator.obj';
      var material_obj = 'phong';
      var obj_oven = 'model/kitchen/ovenFront.obj';
      var oven_material = 'image/oven.jpg';
      var carpet_image = 'image/carpet.jpg';

      var backDresser2 = mkBackDresser(back_dresser_x, back_dresser_y, back_dresser_z, back_dresser_x1, back_dresser_y1, back_dresser_z1, height_dresser, back_dresser_img);
      backDresser2.rotation.y = Math.PI/2;
      backDresser2.position.set(1.3*x,(0.55+back_dresser_y/2)*y,(-1.3-back_dresser_z)*z);
      backDresser2.scale.set(x,y,z);
      kitchen_forniture.add(backDresser2);        

      var backDresser3 = mkBackDresser(back_dresser_x, back_dresser_y, back_dresser_z, back_dresser_x1, back_dresser_y1, back_dresser_z1, height_dresser, back_dresser_img);
      backDresser3.rotation.y = Math.PI/2;
      backDresser3.position.set(1.3*x,(0.55+back_dresser_y/2)*y,(-1.3-2*back_dresser_z)*z);
      backDresser3.scale.set(x,y,z);         
      kitchen_forniture.add(backDresser3); 

      var backDresser4 = mkBackDresser(back_dresser_x, back_dresser_y, back_dresser_z, back_dresser_x1, back_dresser_y1, back_dresser_z1, height_dresser, back_dresser_img);
      backDresser4.rotation.y = -Math.PI/2;
      backDresser4.position.set(1.3*x,(0.55+back_dresser_y/2)*y,(-1.3-3*back_dresser_z)*z);
      backDresser4.scale.set(x,y,z);
      kitchen_forniture.add(backDresser4);  

      var backDresser5 = mkBackDresser(back_dresser_x, back_dresser_y, back_dresser_z, back_dresser_x1, back_dresser_y1, back_dresser_z1, height_dresser, back_dresser_img);
      backDresser5.position.set((1.3+back_dresser_x)*x,(0.55+back_dresser_y/2)*y,(-1.3-3*back_dresser_z)*z);
      backDresser5.scale.set(x,y,z);
      kitchen_forniture.add(backDresser5);           

      var backDresser6 = mkBackDresser(back_dresser_x, back_dresser_y, back_dresser_z, back_dresser_x1, back_dresser_y1, back_dresser_z1, height_dresser, back_dresser_img);
      backDresser6.position.set((1.3+2*back_dresser_x)*x,(0.55+back_dresser_y/2)*y,(-1.3-3*back_dresser_z)*z);
      backDresser6.scale.set(x,y,z);
      kitchen_forniture.add(backDresser6); 

      //mobile alto
      var topDresser = mkBackDresser(back_dresser_x, back_dresser_y, back_dresser_z, back_dresser_x1, back_dresser_y1, back_dresser_z1, height_dresser, back_dresser_img);
      topDresser.position.set((2*back_dresser_x)*x,(6.55+back_dresser_y/2)*y,(-1.3-3*back_dresser_z)*z);
      topDresser.scale.set(2*x,0.5*y,z);
      kitchen_forniture.add(topDresser); 


      var topDoorDresser = mkDoorDresser(door_dresser_z2, door_dresser_y2,door_dresser_x2,door_dresser_img2);
      topDoorDresser.rotation.y = -Math.PI;
      topDoorDresser.position.set((3*back_dresser_x)*x,(6.55+0.5*back_dresser_y)*y,(-3.7*back_dresser_z)*z);
      topDoorDresser.scale.set(2*x,0.6*y,z);
      kitchen_forniture.add(topDoorDresser);

        topDoorDresser.one.interact = function() {
        if (topDoorDresser.rotation.y == -Math.PI/2 ) {
            topDoorDresser.rotation.y = -Math.PI;
        } else {
            topDoorDresser.rotation.y = -Math.PI/2;
        }
      }

      //credenze
       doorDresser1 = mkDoorDresser(door_dresser_x2, door_dresser_y2,door_dresser_z2,door_dresser_img2);
      doorDresser1.position.set((1*back_dresser_x)*x,(0.55+back_dresser_y)*y,(-1*back_dresser_z-1.4*door_dresser_z2)*z);
      doorDresser1.scale.set(x,y,z);
      kitchen_forniture.add(doorDresser1);

      doorDresser1.one.interact = function() {
        if (doorDresser1.rotation.y == -Math.PI/2 ) {
            doorDresser1.rotation.y = 0;
        } else {
            doorDresser1.rotation.y = -Math.PI/2;
        }
      }

      doorDresser2 = mkDoorDresser(door_dresser_z2, door_dresser_y2,door_dresser_x2,door_dresser_img2);
      doorDresser2.rotation.y = -Math.PI;
      doorDresser2.position.set((back_dresser_x+4*door_dresser_x2)*x,(0.55+back_dresser_y)*y,(-2*back_dresser_z-1.7*door_dresser_z2)*z);
      doorDresser2.scale.set(x,y,z);
      kitchen_forniture.add(doorDresser2);
      
        doorDresser2.one.interact = function() {
        if (doorDresser2.rotation.y == -Math.PI/2 ) {
            doorDresser2.rotation.y = -Math.PI;
        } else {
            doorDresser2.rotation.y = -Math.PI/2;
        }
      }

      var doorDresser3 = mkDoorDresser(door_dresser_z2, door_dresser_y2,door_dresser_x2,door_dresser_img2);
      doorDresser3.rotation.y = -Math.PI;
      doorDresser3.position.set((2*back_dresser_x+4*door_dresser_x2)*x,(0.55+back_dresser_y)*y,(-2*back_dresser_z-1.7*door_dresser_z2)*z);
      doorDresser3.scale.set(x,y,z);
      kitchen_forniture.add(doorDresser3);

        doorDresser3.one.interact = function() {
        if (doorDresser3.rotation.y == -Math.PI/2 ) {
            doorDresser3.rotation.y = -Math.PI;
        } else {
            doorDresser3.rotation.y = -Math.PI/2;
        }
      }

     var loader = new THREE.OBJLoader();
      loader.load(obj_refrigerator, function (obj) {
         global_o = obj;
         mesh = createMesh(obj.children[0].geometry,true, door_dresser_img2, material_obj);
         mesh.scale.set(0.0025*x,0.0025*y,0.0025*z)
         mesh.rotation.y = Math.PI/2;
         mesh.position.set(1.5*x,3*y,-1.4*z);
         kitchen_forniture.add(mesh);

      });
      //forno
      var loader = new THREE.OBJLoader();
      loader.load(obj_oven, function (obj) {
         global_o = obj;
         mesh = createMesh(obj.children[0].geometry,true, oven_material, material_obj );
         mesh.scale.set(0.025*x,0.04*y,0.025*z)
         mesh.rotation.y = Math.PI/2;
         mesh.position.set(1.35*x,(back_dresser_y)*y,(-1.3-back_dresser_z)*z);
         kitchen_forniture.add(mesh);

      });

      var oven = mkOvenGas();
      oven.rotation.y = Math.PI/2
      oven.position.set(1.3*x,(0.6+back_dresser_y+back_dresser_y1)*y,(-1.3-2*back_dresser_z)*z);
      oven.scale.set(x,y,z);
      kitchen_forniture.add(oven);

      //lavandino
      var loader = new THREE.OBJLoader();
      loader.load('model/kitchen/sink.obj', function (obj) {
         global_o = obj;
         mesh = createMesh(obj.children[0].geometry, true,oven_material, material_obj );
         mesh.scale.set(0.015*x,0.015*y,0.015*z);
         mesh.rotation.y = -Math.PI/2;
         mesh.position.set((1.3+back_dresser_x)*x,(0.6+2*back_dresser_y+back_dresser_y1)*y,(-1.3-3*back_dresser_z)*z);
         kitchen_forniture.add(mesh);
      });

      //lampada
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/kitchen/kitchen_lamp.obj','model/kitchen/kitchen_lamp.mtl', function (obj) {
        obj.scale.set(0.5*x,0.5*y,0.5*z);
       obj.position.set(4*x,7*y,-3.5*z);
         kitchen_ligth.add(obj);
      });

      // tappeto
      var carpetGeometry = new THREE.PlaneGeometry(3,1.5);
      var carpet = createMesh(carpetGeometry,true, carpet_image,'phong');
      carpet.rotation.x = -Math.PI/2;
      carpet.position.set((2.4*back_dresser_x)*x,0.65*y,(-3*back_dresser_z)*z);
      carpet.scale.set(x,y,z);
      kitchen_forniture.add(carpet);

    //Light Creation
    var bulbLight_kitchen = new THREE.SpotLight(0xFFFFFF);
    bulbLight_kitchen.target.position.set(4*x,0*y,-3.5*z);
    bulbLight_kitchen.castShadow = true;
    bulbLight_kitchen.distance = 20*y;
    bulbLight_kitchen.intensity = 2;
    bulbLight_kitchen.angle = 0.5;
    bulbLight_kitchen.rotation.set(Math.PI/12,0,Math.PI/10)
    bulbLight_kitchen.position.set(4*x,15*y,-3.5*z);
    kitchen_ligth.add(bulbLight_kitchen); 

    toIntersectObjects.push(doorDresser1.one);
    toIntersectObjects.push(doorDresser2.one);
    toIntersectObjects.push(doorDresser3.one);
    toIntersectObjects.push(topDoorDresser.one);                    
    return kitchen;
}