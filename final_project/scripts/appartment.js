function loadAppartment() {

var loader = new THREE.OBJLoader();
          loader.load('model/obj_master.obj', function (obj) {
var multiMaterial = [
            new THREE.MeshLambertMaterial({color: 0xaaaaaa, side: THREE.DoubleSide, shading: THREE.FlatShading}),
            new THREE.MeshBasicMaterial({wireframe: true, overdraw: true, color: 0xffffff, side: THREE.DoubleSide})
            ];
           mesh = THREE.SceneUtils.createMultiMaterialObject(obj.children[0].geometry, multiMaterial);
           mesh.rotation.x = 3*Math.PI/2;
           mesh.scale.set(x,z,y);
           scene.add(mesh);
          });
          return mesh;
}