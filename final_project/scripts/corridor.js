function mkCorridor(){
      var corridor = new THREE.Object3D();
      var corridor_wf = new THREE.Object3D();
      var corridor_ligth = new THREE.Object3D();
      var corridor_forniture = new THREE.Object3D();

      corridor.add(corridor_ligth);
      corridor_ligth.add(corridor_wf);
      corridor_wf.add(corridor_forniture); 
      //variabili
      var corridor_floor_x = 6*x;
      var corridor_floor_y = 13.5*z;
      var corridor_floor_def = 20;
      var corridor_floor_rotation = [-Math.PI/2,0,0];
      var corridor_floor_position = [10.5*x,0.55*y,-9.25*z];
      var corridor_floor_image = 'image/all_floor.jpg';

      var corridor_wall1_shapex = [16*x,16*x,3*x,3*x];
      var corridor_wall1_shapey = [10*y,0*y,0*y,10*y];
      var corridor_wall1_holex = [[3.5*x,5.5*x,5.5*x,3.5*x],[8*x,10*x,10*x,8*x],[12.2*x,14.8*x,14.8*x,12.2*x]];
      var corridor_wall1_holey = [[0*y,0*y,8*y,8*y],[0*y,0*y,8*y,8*y],[3*y,3*y,7*y,7*y]];
      var corridor_wall1_rotation = [0,Math.PI/2,0];
      var corridor_wall1_position = [8.05*x,0.55*y,0*z];

      var corridor_wall2_shapex = [16*x,16*x,3*x,3*x];
      var corridor_wall2_shapey = [10*y,0*y,0*y,10*y];
      var corridor_wall2_holex = [[3.7*x,5.7*x,5.7*x,3.7*x],[8.5*x,10.5*x,10.5*x,8.5*x],[13*x,15*x,15*x,13*x]];
      var corridor_wall2_holey = [[0*y,0*y,8*y,8*y],[0*y,0*y,8*y,8*y],[0*y,0*y,8*y,8*y]];
      var corridor_wall2_rotation = [0,-Math.PI/2,0];
      var corridor_wall2_position = [12.95*x,0.55*y,-18.5*z];

      var corridor_wall3_shapex = [8*x,13*x,13*x,8*x];
      var corridor_wall3_shapey = [0*y,0*y,10*y,10*y];
      var corridor_wall3_holex = [[12.4*x,12.4*x,8.6*x,8.6*x]];
      var corridor_wall3_holey = [[8*y,0,0,8*y]];
      var corridor_wall3_rotation = [0,0,0];
      var corridor_wall3_position = [0*x,0.5*y,-15.45*z];

      var corridor_wall4_position = [0*x,0.5*y,-3.05*z];
      var corridor_wall_image = 'image/corridor_wall.jpg';
      var corridor_floor_imageBump = 'image/all_floor_bump.jpg';
      var rp = 0.1;
      var r = 6;

      var corridor_floor = new mkPlane(corridor_floor_x, corridor_floor_y, corridor_floor_def, corridor_floor_def,corridor_floor_rotation, corridor_floor_position, corridor_floor_image,false,r);
      corridor_wf.add(corridor_floor);
      
      var corridor_wall1 = drawShape(corridor_wall1_shapex, corridor_wall1_shapey, corridor_wall1_holex, corridor_wall1_holey,corridor_wall1_rotation, corridor_wall1_position, corridor_wall_image,rp,3);
      corridor_wf.add(corridor_wall1);
     
      var corridor_wall2 = drawShape(corridor_wall2_shapex, corridor_wall2_shapey, corridor_wall2_holex, corridor_wall2_holey,corridor_wall2_rotation, corridor_wall2_position, corridor_wall_image,rp,3);
      corridor_wf.add(corridor_wall2);
       
      var corridor_wall3 = drawShape(corridor_wall3_shapex, corridor_wall3_shapey, corridor_wall3_holex, corridor_wall3_holey, corridor_wall3_rotation, corridor_wall3_position, corridor_wall_image,rp,1);
      corridor_wf.add(corridor_wall3);
       
        var corridor_wall4 = drawShape(corridor_wall3_shapex, corridor_wall3_shapey, corridor_wall3_holex, corridor_wall3_holey, corridor_wall3_rotation, corridor_wall4_position, corridor_wall_image,rp,1);
        corridor_wf.add(corridor_wall4); 

        //mobile
        var loader = new THREE.OBJMTLLoader();
        loader.load('model/corridor/vertical.obj','model/corridor/vertical.mtl', function (obj) {
          obj.scale.set(0.025*x, 0.03*y, 0.02*z);
          obj.rotation.y = -Math.PI/2;
          obj.position.set(8.5*x,0.55*y,-6.75*z);
        corridor_forniture.add(obj);
        });

        //pianta
        var loader = new THREE.OBJMTLLoader();
        loader.load('model/corridor/plant.obj','model/corridor/plant.mtl', function (obj) {
          obj.scale.set(0.025*x, 0.03*y, 0.02*z);
          obj.rotation.y = -Math.PI/2;
          obj.position.set(15.7*x,1.5*y,-7.5*z);
          corridor_forniture.add(obj);
        });

        //lampade
        var loader = new THREE.OBJLoader();
        loader.load('model/corridor/lamp_obj.obj', function (obj) {
          obj.scale.set(0.03*x, 0.03*y, 0.03*z);
          obj.position.set(4.5*x,9*y,-12*z);
         corridor_forniture.add(obj);
        });

        var loader = new THREE.OBJLoader();
        loader.load('model/corridor/lamp_obj.obj', function (obj) {
          obj.scale.set(0.03*x, 0.03*y, 0.03*z);
          obj.position.set(4.5*x,9*y,-19*z);
         corridor_forniture.add(obj);
        });

           //Light Creation
          var bulbLight_corridor1 = new THREE.SpotLight(0xFFFFFF);
          bulbLight_corridor1.target.position.set(10.5*x,0*y,-4.5*z);
          bulbLight_corridor1.castShadow = true;
          bulbLight_corridor1.distance = 20*y;
          bulbLight_corridor1.intensity = 2;
          bulbLight_corridor1.angle = 0.6;
          bulbLight_corridor1.rotation.set(Math.PI/12,0,Math.PI/4)
          bulbLight_corridor1.position.set(10.5*x,15*y,-4.5*z);
          corridor_ligth.add(bulbLight_corridor1);

          var bulbLight_corridor2 = new THREE.SpotLight(0xFFFFFF);
          bulbLight_corridor2.target.position.set(10.5*x,0*y,-11.5*z);
          bulbLight_corridor2.castShadow = true;
          bulbLight_corridor2.distance = 20*y;
          bulbLight_corridor2.intensity = 2;
          bulbLight_corridor2.angle = 0.6;
          bulbLight_corridor2.rotation.set(Math.PI/12,0,Math.PI/4)
          bulbLight_corridor2.position.set(10.5*x,15*y,-11.5*z);
          corridor_ligth.add(bulbLight_corridor2);
        //quadri
        
        var p = new THREE.PlaneGeometry((4/3)*x, 2*y);
        var picture1 = createMesh(p, true, "image/quadro1.jpg",'phong', "image/bump.jpg");
        picture1.rotation.y = Math.PI/2;
        picture1.position.set(12.9*x,9*y,-6.75*z);
        corridor_forniture.add(picture1);
        var picture2 = createMesh(p, true,"image/quadro2.jpg",'phong', "image/bump.jpg");
        picture2.rotation.y = Math.PI/2;
        picture2.position.set(12.9*x,6*y,-6.75*z);
        corridor_forniture.add(picture2);
        var picture3 = createMesh(p, true,"image/quadro3.jpg",'phong', "image/bump.jpg");
        picture3.rotation.y = Math.PI/2;
        picture3.position.set(12.9*x,3*y,-6.75*z);
        corridor_forniture.add(picture3);

        return corridor;
}