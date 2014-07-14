function mkCloset(){ //cucina

    var closet = new THREE.Object3D();
    var closet_wf = new THREE.Object3D();
    var closet_ligth = new THREE.Object3D();
    var closet_forniture = new THREE.Object3D();

    closet.add(closet_ligth);
    closet_ligth.add(closet_wf);
    closet_wf.add(closet_forniture);
    //variabili        
    var closet_floor_x = 7*x;
    var closet_floor_y = 3*z;
    var closet_floor_def = 20;
    var closet_floor_rotation = [-Math.PI/2,0,0];
    var closet_floor_position = [17*x,0.55*y,-9*z];
    var closet_floor_image = 'image/all_floor.jpg';

    var closet_wall1_shapex = [11*x,11*x,7.5*x,7.5*x];
    var closet_wall1_shapey = [10*y,0*y,0*y,10*y];
    var closet_wall1_holex = [[8*x,10*x,10*x,8*x]];
    var closet_wall1_holey = [[0*y,0*y,8*y,8*y]];
    var closet_wall1_rotation = [0,Math.PI/2,0];
    var closet_wall1_position = [13.55*x,0.55*y,0*z];

    var closet_wall2_shapex = [11*x,11*x,7.5*x,7.5*x];
    var closet_wall2_shapey = [10*y,0*y,0*y,10*y];
    var closet_wall2_holex = [[7.5*x,10.5*x,10.5*x,7.5*x]];
    var closet_wall2_holey = [[8*y,8*y,9.4*y,9.4*y]];
    var closet_wall2_rotation = [0,Math.PI/2,0];
    var closet_wall2_position = [20.45*x,0.55*y,0*z];

    var closet_wall3_shapex = [13.5*x,20.5*x,20.5*x,13.5*x];
    var closet_wall3_shapey = [0*y,0*y,10*y,10*y];
    var closet_wall3_rotation = [0,0,0];
    var closet_wall3_position = [0*x,0.5*y,-10.45*z];
    var closet_wall4_position = [0*x,0.5*y,-7.55*z];
    var closet_wall_image = 'image/closet_wall.jpg';
    var closet_floor_imageBump = 'image/all_floor_bump.jpg';
    var rp = 0.1;
    var r = 4;

    var closet_floor = new mkPlane(closet_floor_x, closet_floor_y, closet_floor_def,closet_floor_def,closet_floor_rotation, closet_floor_position, closet_floor_image,false, r);
    closet_wf.add(closet_floor);

    var closet_wall1 = drawShape(closet_wall1_shapex, closet_wall1_shapey, closet_wall1_holex, closet_wall1_holey,closet_wall1_rotation, closet_wall1_position, closet_wall_image,rp,1);
    closet_wf.add(closet_wall1);
      
    var closet_wall2 = drawShape(closet_wall2_shapex, closet_wall2_shapey, closet_wall2_holex, closet_wall2_holey,closet_wall2_rotation, closet_wall2_position, closet_wall_image,rp,1);
    closet_wf.add(closet_wall2);

    var closet_wall3 = drawShape(closet_wall3_shapex, closet_wall3_shapey, [], [], closet_wall3_rotation, closet_wall3_position, closet_wall_image,rp,0);
    closet_wf.add(closet_wall3);
     
    var closet_wall4 = drawShape(closet_wall3_shapex, closet_wall3_shapey, [], [], closet_wall3_rotation, closet_wall4_position, closet_wall_image,rp,0);
    closet_wf.add(closet_wall4); 

    //mobili
    var loader = new THREE.OBJMTLLoader();
      loader.load('model/closet/closet.obj','model/closet/closet.mtl', function (obj) {
        obj.scale.set(0.5*x, 1*y, 0.5*z);
        obj.rotation.y = -Math.PI/2;
        obj.position.set(19.3*x,2.5*y,-10*z);
        closet_forniture.add(obj);
      });


      var loader = new THREE.OBJMTLLoader();
      loader.load('model/closet/closet2.obj','model/closet/closet2.mtl', function (obj) {
        obj.scale.set(0.03*x, 0.05*y, 0.03*z);
        obj.position.set(15*x,2.5*y,-10.3*z);
        closet_forniture.add(obj);
      });

      //lampada
      //lampada
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/kitchen/kitchen_lamp.obj','model/bathroom/kitchen_lamp.mtl', function (obj) {
        obj.scale.set(0.5*x,0.5*y,0.5*z);
        obj.position.set(16.5*x,7*y,-9*z);
         closet_forniture.add(obj);
      });
        //Light Creation
        bulbLight_closet = new THREE.SpotLight(0xFFFFFF);
        bulbLight_closet.target.position.set(17*x,0*y,-9.5*z);
        bulbLight_closet.castShadow = true;
        bulbLight_closet.distance = 20*y;
        bulbLight_closet.intensity = 1;
        bulbLight_closet.angle = 0.5;
        bulbLight_closet.rotation.set(Math.PI/5,0,Math.PI/3)
        bulbLight_closet.position.set(17*x,11*y,-9.5*z);
        closet_ligth.add(bulbLight_closet);

        return closet;
}