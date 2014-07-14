function mkBeedroom(){ //cucina

    var beedroom = new THREE.Object3D();
    var beedroom_wf = new THREE.Object3D();
    var beedroom_ligth = new THREE.Object3D();
    var beedroom_forniture = new THREE.Object3D();

    beedroom.add(beedroom_ligth);
    beedroom_ligth.add(beedroom_wf);
    beedroom_wf.add(beedroom_forniture);
        
    //variabili
    var beedRoom_floor_x = 7*x;
    var beedRoom_floor_y = 8*z;
    var beedRoom_floor_def = 20;
    var beedRoom_floor_rotation = [-Math.PI/2,0,0];
    var beedRoom_floor_position = [17*x,0.55*y,-7*z];
    var beedRoom_floor_image = 'image/all_floor.jpg';

    var beedRoom_wall1_shapex = [7.5*x,7.5*x,3*x,3*x];
    var beedRoom_wall1_shapey = [10*y,0*y,0*y,10*y];
    var beedRoom_wall1_holex = [[3.5*x,5.5*x,5.5*x,3.5*x]];
    var beedRoom_wall1_holey = [[0*y,0*y,8*y,8*y]];
    var beedRoom_wall1_rotation = [0,Math.PI/2,0];
    var beedRoom_wall1_position = [13.55*x,0.55*y,0*z];

    var beedRoom_wall2_shapex = [7.5*x,7.5*x,3*x,3*x];
    var beedRoom_wall2_shapey = [10*y,0*y,0*y,10*y];
    var beedRoom_wall2_rotation = [0,Math.PI/2,0];
    var beedRoom_wall2_position = [20.45*x,0.55*y,0*z];
    var beedRoom_wall3_shapex = [13.5*x,20.5*x,20.5*x,13.5*x];
    var beedRoom_wall3_shapey = [0*y,0*y,10*y,10*y];
    var beedRoom_wall3_holex = [[15.5*x,18.5*x,18.5*x,15.5*x]];
    var beedRoom_wall3_holey = [[3*y,3*y,7*y,7*y]];
    var beedRoom_wall3_rotation = [0,0,0];
    var beedRoom_wall3_position = [0*x,0.5*y,-3.05*z];
    var beedRoom_wall4_position = [0*x,0.5*y,-6.95*z];
    var beedRoom_wall_image = 'image/beedRoom_wall.jpg';
    var beedRoom_floor_imageBump = 'image/all_floor_bump.jpg';
    var rp = 0.1;
    var r = 4;

    var beedRoom_floor = new mkPlane(beedRoom_floor_x,beedRoom_floor_y, beedRoom_floor_def, beedRoom_floor_def,beedRoom_floor_rotation, beedRoom_floor_position, beedRoom_floor_image,false, r);
    beedroom_wf.add(beedRoom_floor);
    
    var beedRoom_wall1 = drawShape(beedRoom_wall1_shapex, beedRoom_wall1_shapey, beedRoom_wall1_holex, beedRoom_wall1_holey,beedRoom_wall1_rotation, beedRoom_wall1_position, beedRoom_wall_image,rp,1);
    beedroom_wf.add(beedRoom_wall1);
   
    var beedRoom_wall2 = drawShape(beedRoom_wall2_shapex, beedRoom_wall2_shapey, [], [],beedRoom_wall2_rotation, beedRoom_wall2_position, beedRoom_wall_image,rp,0);
    beedroom_wf.add(beedRoom_wall2);
     
    var beedRoom_wall3 = drawShape(beedRoom_wall3_shapex, beedRoom_wall3_shapey, beedRoom_wall3_holex, beedRoom_wall3_holey, beedRoom_wall3_rotation, beedRoom_wall3_position, beedRoom_wall_image,rp,1);
    beedroom_wf.add(beedRoom_wall3);
     
      var beedRoom_wall4 = drawShape(beedRoom_wall3_shapex, beedRoom_wall3_shapey, [], [], beedRoom_wall3_rotation, beedRoom_wall4_position, beedRoom_wall_image,rp,0);
      beedroom_wf.add(beedRoom_wall4); 

      //letto
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/beedroom/bed.obj','model/beedroom/bed.mtl', function (obj) {
        obj.scale.set(0.017*x, 0.05*y, 0.02*z);
        obj.rotation.y = Math.PI/2;
        obj.position.set(19.2*x,2.5*y,-5.2*z);
      beedroom_forniture.add(obj);
      });

      //comodino
       var loader = new THREE.OBJMTLLoader();
      loader.load('model/beedroom/bedsidetable.obj','model/beedroom/bedsidetable.mtl', function (obj) {
                    obj.scale.set(0.02*x, 0.05*y, 0.02*z);
        obj.rotation.y = Math.PI;

        obj.position.set(24*x,0.5*y,5.2*z);
        beedroom_forniture.add(obj);
      });

      //lampada
      var loader = new THREE.OBJMTLLoader();
        loader.load('model/dinningRoom/lamp.obj','model/dinningRoom/lamp.mtl', function (obj) {
          obj.scale.set(0.02*x, 0.01*y, 0.02*z);
          obj.position.set(16.5*x,7*y,-5*z);
         beedroom_forniture.add(obj);
        });

      bulbLight_beedRoom = new THREE.SpotLight(0xFFFFFF);
      bulbLight_beedRoom.target.position.set(17*x,0*y,-5*z);
      bulbLight_beedRoom.castShadow = true;
      bulbLight_beedRoom.distance = 20*y;
      bulbLight_beedRoom.intensity = 2;
      bulbLight_beedRoom.angle = 0.5;
      bulbLight_beedRoom.rotation.set(Math.PI/5,0,Math.PI/3)
      bulbLight_beedRoom.position.set(17*x,15*y,-5*z);
      beedroom_ligth.add(bulbLight_beedRoom);
     
      return beedroom;
}
