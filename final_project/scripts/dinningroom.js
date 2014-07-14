function mkDinningroom() {
    var dinningroom = new THREE.Object3D();
    var dinningroom_wf = new THREE.Object3D();
    var dinningroom_ligth = new THREE.Object3D();
    var dinningroom_forniture = new THREE.Object3D();

    dinningroom.add(dinningroom_ligth);
    dinningroom_ligth.add(dinningroom_wf);
    dinningroom_wf.add(dinningroom_forniture);        
    //variabili
    var diningRoom_floor_x = 7*x;
    var diningRoom_floor_y = 5*z;
    var diningRoom_floor_def = 20;
    var diningRoom_floor_rotation = [-Math.PI/2,0,0];
    var diningRoom_floor_position = [4*x,0.55*y,-9*z];

    var diningRoom_wall1_shapex = [11.5*x,11.5*x,7*x,7*x];
    var diningRoom_wall1_shapey = [10*y,0*y,0*y,10*y];
    var diningRoom_wall1_holex = [[7.5*x,10.5*x,10.5*x,7.5*x]];
    var diningRoom_wall1_holey = [[3*y,3*y,7*y,7*y]];
    var diningRoom_wall1_rotation = [0,Math.PI/2,0];
    var diningRoom_wall1_position = [0.55*x,0.55*y,0*z];

    var diningRoom_wall2_shapex = [11.5*x,11.5*x,7*x,7*x];
    var diningRoom_wall2_shapey = [10*y,0*y,0*y,10*y];
    var diningRoom_wall2_holex = [[10*x,8*x,8*x,10*x]];
    var diningRoom_wall2_holey = [[8*y,8*y,0*y,0*y]];
    var diningRoom_wall2_rotation = [0,-Math.PI/2,0];
    var diningRoom_wall2_position = [7.45*x,0.55*y,-18*z];

    var diningRoom_wall3_shapex = [7.5*x,7.5*x,0.5*x,0.5*x];
    var diningRoom_wall3_shapey = [10*y,0,0,10*y];
    var diningRoom_wall3_holex = [[2.5*x,2.5*x,5.5*x,5.5*x]];
    var diningRoom_wall3_holey = [[8*y,0,0,8*y]];
    var diningRoom_wall3_rotation = [0,0,0];
    var diningRoom_wall3_position = [0*x,0.5*y,-10.95*z];

    var diningRoom_wall4_shapex = [0.5*x,0.5*x,7.5*x,7.5*x];
    var diningRoom_wall4_shapey = [10*y,0,0,10*y];
    var diningRoom_wall4_rotation = [0,-Math.PI,0];
    var diningRoom_wall4_position = [8*x,0.5*y,-7.05*z];
    var diningRoom_wall_image = 'image/dinningRoom_wall.jpg';
    var diningRoom_floor_image = 'image/all_floor.jpg';
    var diningRoom_floor_imageBump = 'image/all_floor_bump.jpg';
    var r = 4;
    var rp = 0.1;

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

    var diningRoom_floor = new mkPlane(diningRoom_floor_x, diningRoom_floor_y, diningRoom_floor_def, diningRoom_floor_def,diningRoom_floor_rotation, diningRoom_floor_position, diningRoom_floor_image, false,r);
    dinningroom_wf.add(diningRoom_floor);
    
    var diningRoom_wall1 = drawShape(diningRoom_wall1_shapex, diningRoom_wall1_shapey, diningRoom_wall1_holex, diningRoom_wall1_holey,diningRoom_wall1_rotation, diningRoom_wall1_position, diningRoom_wall_image,rp, 1);
    dinningroom_wf.add(diningRoom_wall1);
    
    var diningRoom_wall2 = drawShape(diningRoom_wall2_shapex, diningRoom_wall2_shapey, diningRoom_wall2_holex, diningRoom_wall2_holey,diningRoom_wall2_rotation, diningRoom_wall2_position, diningRoom_wall_image,rp, 1);
    dinningroom_wf.add(diningRoom_wall2);
    
    var diningRoom_wall3 = drawShape(diningRoom_wall3_shapex, diningRoom_wall3_shapey, diningRoom_wall3_holex, diningRoom_wall3_holey,diningRoom_wall3_rotation, diningRoom_wall3_position, diningRoom_wall_image,rp, 1);
    dinningroom_wf.add(diningRoom_wall3);
    
    var diningRoom_wall4 = drawShape(diningRoom_wall4_shapex, diningRoom_wall4_shapey, [], [], diningRoom_wall4_rotation, diningRoom_wall4_position, diningRoom_wall_image,rp, 0);
    dinningroom_wf.add(diningRoom_wall4); 

    //divano
    var imageArmchair = 'image/divano.jpg'
    var loader = new THREE.OBJLoader();
    loader.load('model/dinningRoom/armchair.obj', function (obj) {
      global_o = obj;
      mesh = createMesh(obj.children[0].geometry,true,imageArmchair,'basic');
      mesh.rotation.y = Math.PI/8;
      mesh.position.set(2.5*x,0.5*y,-9.5*z);
      mesh.scale.set(0.4*x,2*y,0.8*z);
      dinningroom_forniture.add(mesh);

    });
    var loader = new THREE.OBJLoader();
    loader.load('model/dinningRoom/armchair.obj', function (obj) {
      global_o = obj;
      mesh = createMesh(obj.children[0].geometry,true,imageArmchair,'basic');
      mesh.rotation.y = -Math.PI/8;
      mesh.position.set(5.5*x,0.5*y,-9.5*z);
      mesh.scale.set(0.4*x,2*y,0.8*z);
      dinningroom_forniture.add(mesh);

    });

    //tavolino
    var imageFile = 'image/white_wood.jpg'
    var table_small = mkTable(planeX, planeY, planeZ, imageFile, cubeX, cubeY, cubeZ, sphereR, sphereDef, cylinderRtop, cylinderRbutton, cylinderH, cylinderDef, imageFile, colorS);
    table_small.scale.set(0.3*x,0.5*y,0.3*z);
    table_small.position.set(4*x,0.5*y,-8.5*z);
    dinningroom_forniture.add(table_small);

    //telecomando
    var remoteControl = mkRemoteControl();
    remoteControl.rotation.x = -Math.PI/2;
    remoteControl.rotation.z = -Math.PI;
    remoteControl.scale.set(0.05*x,0.05*y,0.05*z);
    remoteControl.position.set(4*x,2.1*y,-8.5*z);
    dinningroom_forniture.add(remoteControl);

    //televisione
      var texture;
      var image_tv = 'image/tv.jpg';
      var cubeGeometry = new THREE.BoxGeometry(4*x,5*y,0.5*z);
      var tv_plastic = createMesh(cubeGeometry, true,image_tv,'phong');
      var planeGeometry = new THREE.BoxGeometry(3.5*x,4.5*y,0.1*z);
      tv_plastic.position.set(4*x,5*y,-7.3*z);
      dinningroom_forniture.add(tv_plastic);

     $("#video1")[0].pause();
      $("#video2")[0].pause();
      $("#video3")[0].pause();
      $("#video4")[0].pause();
      $("#video5")[0].pause();

      var tv_display1;
      var tv_display2;
      var tv_display3;
      var tv_display4;
      var tv_display5;
      var planeGeometry = new THREE.BoxGeometry(3.5*x,4.5*y,0.1*z);



      texture1 = new THREE.Texture(video1);
      texture1.generateMipmaps = false;
      texture1.minFilter = THREE.LinearFilter;
      texture1.magFilter = THREE.LinearFilter;
      texture1.format = THREE.RGBFormat;
      tv_display1 = createMesh_video(planeGeometry,texture1);
      tv_display1.visible = false;

      texture2 = new THREE.Texture(video2);
      texture2.generateMipmaps = false;
      texture2.minFilter = THREE.LinearFilter;
      texture2.magFilter = THREE.LinearFilter;
      texture2.format = THREE.RGBFormat;
      tv_display2 = createMesh_video(planeGeometry,texture2);
      tv_display2.visible = false;

      texture3 = new THREE.Texture(video3);
      texture3.generateMipmaps = false;
      texture3.minFilter = THREE.LinearFilter;
      texture3.magFilter = THREE.LinearFilter;
      texture3.format = THREE.RGBFormat;
      tv_display3 = createMesh_video(planeGeometry,texture3);
      tv_display3.visible = false;

      texture4 = new THREE.Texture(video4);
      texture4.generateMipmaps = false;
      texture4.minFilter = THREE.LinearFilter;
      texture4.magFilter = THREE.LinearFilter;
      texture4.format = THREE.RGBFormat;
      tv_display4 = createMesh_video(planeGeometry,texture4);
      tv_display4.visible = false;

      texture5 = new THREE.Texture(video5);
      texture5.generateMipmaps = false;
      texture5.minFilter = THREE.LinearFilter;
      texture5.magFilter = THREE.LinearFilter;
      texture5.format = THREE.RGBFormat;
      tv_display5 = createMesh_video(planeGeometry,texture5);
      tv_display5.visible = false;                        


      dinningroom_forniture.add(tv_display1);
      dinningroom_forniture.add(tv_display2);
      dinningroom_forniture.add(tv_display3);
      dinningroom_forniture.add(tv_display4);            
      dinningroom_forniture.add(tv_display5);            

      remoteControl.one.interact = function() {
         $("#video2")[0].pause();
         $("#video3")[0].pause();
         $("#video4")[0].pause();
         $("#video5")[0].pause();
         tv_display1.visible = true;
         tv_display2.visible = false;
         tv_display3.visible = false;
         tv_display4.visible = false;
         tv_display5.visible = false;
         tv_display1.rotation.y = Math.PI;
         tv_display1.position.set(4*x,5.15*y,-7.55*z);
         $("#video1")[0].play();
   } 
   remoteControl.two.interact = function() {
         $("#video1")[0].pause();
         $("#video3")[0].pause();
         $("#video4")[0].pause();
         $("#video5")[0].pause();

         tv_display1.visible = false;
         tv_display2.visible = true;
         tv_display3.visible = false;
         tv_display4.visible = false;
         tv_display5.visible = false;
         tv_display2.rotation.y = Math.PI;
         tv_display2.position.set(4*x,5.15*y,-7.55*z);
         $("#video2")[0].play();
   } 
   remoteControl.three.interact = function() {
         $("#video2")[0].pause();
         $("#video1")[0].pause();
         $("#video4")[0].pause();
         $("#video5")[0].pause();

         tv_display1.visible = false;
         tv_display2.visible = false;
         tv_display3.visible = true;
         tv_display4.visible = false;
         tv_display5.visible = false;
         tv_display3.rotation.y = Math.PI;
         tv_display3.position.set(4*x,5.15*y,-7.55*z);
         $("#video3")[0].play();
   }
      remoteControl.four.interact = function() {
         $("#video2")[0].pause();
         $("#video3")[0].pause();
         $("#video1")[0].pause();
         $("#video5")[0].pause();
         tv_display1.visible = false;
         tv_display2.visible = false;
         tv_display3.visible = false;
         tv_display4.visible = true;
         tv_display5.visible = false;
         tv_display4.rotation.y = Math.PI;
         tv_display4.position.set(4*x,5.15*y,-7.55*z);
         $("#video4")[0].play();
   } 
   remoteControl.five.interact = function() {
         $("#video2")[0].pause();
         $("#video3")[0].pause();
         $("#video4")[0].pause();
         $("#video1")[0].pause();
         tv_display1.visible = false;
         tv_display2.visible = false;
         tv_display3.visible = false;
         tv_display4.visible = false;
         tv_display5.visible = true;
         tv_display5.rotation.y = Math.PI;
         tv_display5.position.set(4*x,5.15*y,-7.55*z);
         $("#video5")[0].play();
      }
      remoteControl.onoff.interact = function() {
         $("#video1")[0].pause();
         $("#video2")[0].pause();
         $("#video3")[0].pause();
         $("#video4")[0].pause();
         $("#video5")[0].pause();
         tv_display1.visible = false;
         tv_display2.visible = false;
         tv_display3.visible = false;
         tv_display4.visible = false;
         tv_display5.visible = false;

      }


      //Light Creation
      var bulbLight_dinningRoom = new THREE.SpotLight(0xFFFFFF);
      bulbLight_dinningRoom.target.position.set(4*x,0*y,-9.5*z);
      bulbLight_dinningRoom.castShadow = true;
      bulbLight_dinningRoom.distance = 20*y;
      bulbLight_dinningRoom.intensity = 2;
      bulbLight_dinningRoom.angle = 0.35;
      bulbLight_dinningRoom.rotation.set(Math.PI/12,0,Math.PI/10)
      bulbLight_dinningRoom.position.set(4*x,15*y,-9.5*z);
      dinningroom_ligth.add(bulbLight_dinningRoom); 

      //lampada
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/dinningRoom/lamp.obj','model/dinningRoom/lamp.mtl', function (obj) {
        obj.scale.set(0.02*x, 0.01*y, 0.02*z);
        obj.position.set(4*x,7*y,-9.5*z);
       dinningroom_ligth.add(obj);
      });


      toIntersectObjects.push(remoteControl.one);
      toIntersectObjects.push(remoteControl.two);
      toIntersectObjects.push(remoteControl.three);
      toIntersectObjects.push(remoteControl.four);
      toIntersectObjects.push(remoteControl.five);
      toIntersectObjects.push(remoteControl.onoff);
      return dinningroom;
}
