function mkBathroom(){

    var bathroom = new THREE.Object3D();
    var bathroom_wf = new THREE.Object3D();
    var bathroom_ligth = new THREE.Object3D();
    var bathroom_forniture = new THREE.Object3D();

    bathroom.add(bathroom_ligth);
    bathroom_ligth.add(bathroom_wf);
    bathroom_wf.add(bathroom_forniture);
     //variabili
    var bathRoom_floor_x = 7*x;
    var bathRoom_floor_y = 4.5*z;
    var bathRoom_floor_def = 20;
    var bathRoom_floor_rotation = [-Math.PI/2,0,0];
    var bathRoom_floor_position = [17*x,0.55*y,-13.25*z];
    var bathRoom_floor_image = 'image/bathRoom_floor.jpg';

    var bathRoom_wall1_shapex = [16*x,16*x,11*x,11*x];
    var bathRoom_wall1_shapey = [10*y,0*y,0*y,10*y];
    var bathRoom_wall1_holex = [[12.8*x,14.8*x,14.8*x,12.8*x]];
    var bathRoom_wall1_holey = [[0*y,0*y,8*y,8*y]];
    var bathRoom_wall1_rotation = [0,Math.PI/2,0];
    var bathRoom_wall1_position = [13.55*x,0.55*y,0*z];

    var bathRoom_wall2_shapex = [16*x,16*x,11*x,11*x];
    var bathRoom_wall2_shapey = [10*y,0*y,0*y,10*y];
    var bathRoom_wall2_rotation = [0,Math.PI/2,0];
    var bathRoom_wall2_position = [20.45*x,0.55*y,0*z];
    var bathRoom_wall3_shapex = [13.5*x,20.5*x,20.5*x,13.5*x];
    var bathRoom_wall3_shapey = [0*y,0*y,10*y,10*y];
    var bathRoom_wall3_holex = [[15.5*x,18.5*x,18.5*x,15.5*x]];
    var bathRoom_wall3_holey = [[3*y,3*y,7*y,7*y]];
    var bathRoom_wall3_rotation = [0,0,0];
    var bathRoom_wall3_position = [0*x,0.5*y,-15.45*z];
    var bathRoom_wall4_position = [0*x,0.5*y,-11.05*z];
    var bathRoom_wall_image = 'image/bathRoom_floor.jpg';
    var bathRoom_floor_imageBump = 'image/bathRoom_floor_bump.jpg';
    var rp = 0.1;
    var r = 4;

    var bathRoom_floor = new mkPlane(bathRoom_floor_x, bathRoom_floor_y, bathRoom_floor_def, bathRoom_floor_def,bathRoom_floor_rotation, bathRoom_floor_position, bathRoom_floor_image,bathRoom_floor_imageBump, r);
    bathroom_wf.add(bathRoom_floor);
    
    var bathRoom_wall1 = drawShape(bathRoom_wall1_shapex, bathRoom_wall1_shapey, bathRoom_wall1_holex, bathRoom_wall1_holey,bathRoom_wall1_rotation, bathRoom_wall1_position, bathRoom_wall_image,rp,1);
    bathroom_wf.add(bathRoom_wall1);
   
    var bathRoom_wall2 = drawShape(bathRoom_wall2_shapex, bathRoom_wall2_shapey, [], [],bathRoom_wall2_rotation, bathRoom_wall2_position, bathRoom_wall_image,rp,0);
    bathroom_wf.add(bathRoom_wall2);
     
    var bathRoom_wall3 = drawShape(bathRoom_wall3_shapex, bathRoom_wall3_shapey, bathRoom_wall3_holex, bathRoom_wall3_holey, bathRoom_wall3_rotation, bathRoom_wall3_position, bathRoom_wall_image,rp,1);
    bathroom_wf.add(bathRoom_wall3);
     
      var bathRoom_wall4 = drawShape(bathRoom_wall3_shapex, bathRoom_wall3_shapey, [], [], bathRoom_wall3_rotation, bathRoom_wall4_position, bathRoom_wall_image,rp,0);
      bathroom_wf.add(bathRoom_wall4); 

      //lavandino
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/bathroom/bathroomFurniture.obj','model/bathroom/bathroomFurniture.mtl', function (obj) {
        obj.scale.set(0.03*x, 0.05*y, 0.05*z);
        obj.rotation.y = -Math.PI/2;
        obj.position.set(20.5*x,0.55*y,-15*z);
        bathroom_forniture.add(obj);
      });

      //bidet
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/bathroom/bidet.obj','model/bathroom/bidet.mtl', function (obj) {
        obj.scale.set(0.03*x, 0.05*y, 0.03*z);
        obj.rotation.y = Math.PI;
        obj.position.set(13*x,0.55*y,-12*z);
       bathroom_forniture.add(obj);
      });

      //wc
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/bathroom/toiletsUnit.obj','model/bathroom/toiletsUnit.mtl', function (obj) {
        obj.scale.set(0.03*x, 0.05*y, 0.03*z);
        obj.rotation.y = Math.PI;
        obj.position.set(16.5*x,0.55*y,-11*z);
        bathroom_forniture.add(obj);
      });

      //spazzola
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/bathroom/toiletBrush.obj','model/bathroom/toiletBrush.mtl', function (obj) {
        obj.scale.set(0.03*x, 0.05*y, 0.03*z);
        obj.rotation.y = Math.PI;
        obj.position.set(15.5*x,0.55*y,-11.05*z);
       bathroom_forniture.add(obj);
      });

      //carta
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/bathroom/toiletPaperDispenser.obj','model/bathroom/toiletPaperDispenser.mtl', function (obj) {
        obj.scale.set(0.03*x, 0.05*y, 0.03*z);
        obj.rotation.y = Math.PI;
        obj.position.set(17.3*x,2.5*y,-11.05*z);
        bathroom_forniture.add(obj);
      });

      //doccia 
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/bathroom/fittedBath.obj','model/bathroom/bidet.mtl', function (obj) {
        obj.scale.set(0.8*x, 1*y, 1*z);
        obj.rotation.y = -Math.PI/2;
        obj.position.set(16*x,0.55*y,-14.7*z);
       bathroom_forniture.add(obj);
      });

      //lampada
      var loader = new THREE.OBJMTLLoader();
      loader.load('model/bathroom/lamp.obj','model/bathroom/lamp.mtl', function (obj) {
        obj.scale.set(0.05*x,0.05*y,0.05*z);
       obj.position.set(16.5*x,9*y,-13.5*z);
         bathroom_forniture.add(obj);
      });

        //Light Creation
         bulbLight_bathRoom = new THREE.SpotLight(0xFFFFFF);
        bulbLight_bathRoom.target.position.set(16.5*x,0*y,-13.5*z);
        bulbLight_bathRoom.castShadow = true;
        bulbLight_bathRoom.distance = 20*y;
        bulbLight_bathRoom.intensity = 2;
        bulbLight_bathRoom.angle = 0.6;
        bulbLight_bathRoom.rotation.set(Math.PI/5,0,Math.PI/3)
        bulbLight_bathRoom.position.set(16.5*x,15*y,-13.5*z);
        bathroom_ligth.add(bulbLight_bathRoom);

      //fine bagno
      return bathroom;
}