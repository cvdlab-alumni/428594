//variabili globali
var x;
var y ;
var z;
var toIntersectObjects = [];
var stats;
var scene ;
var camera;
var inspectedCamera;
var renderer;
var trackballControls;
var axisHelper;
var directionalLight1;
var directionalLight2;
var directionalLight3;
var directionalLight4;
var projector;
var texture1;
var texture2;
var texture3;
var texture4;
var texture5;
var gui;
var axis_control;
var controls;

x = 3;
y = 2;
z = 3
stats = initStats();

scene = new THREE.Scene();

inspectedCamera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
inspectedCamera.position.set(11*x,5*y,-60*z);
inspectedCamera.up = new THREE.Vector3(0,1,0);
inspectedCamera.lookAt(scene.position);

camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(11*x,5*y,-60*z);
camera.up = new THREE.Vector3(0,1,0);
camera.lookAt(scene.position);



renderer = new THREE.WebGLRenderer();
renderer.setClearColor(new THREE.Color(0xEEEEEE));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMapEnabled = true;

trackballControls = new THREE.TrackballControls(camera);

axisHelper = new THREE.AxisHelper(3);
scene.add(axisHelper);

directionalLight1 = new THREE.DirectionalLight( 0xffffff );
directionalLight1.position.set(-100*x,2*y,-100*z);
scene.add(directionalLight1);

directionalLight2 = new THREE.DirectionalLight( 0xffffff );
directionalLight2.position.set(100*x,2*y,100*z);
scene.add(directionalLight2);

directionalLight3 = new THREE.DirectionalLight( 0xffffff );
directionalLight3.position.set(-100*x,2*y,100*z);
scene.add(directionalLight3);

directionalLight4 = new THREE.DirectionalLight( 0xffffff );
directionalLight4.position.set(100*x,2*y,-100*z);
scene.add(directionalLight4);


$('body').append(renderer.domElement);

projector = new THREE.Projector();
document.addEventListener('mousedown', onDocumentMouseDown, false);



var keyboard = new THREEx.KeyboardState();
var clock = new THREE.Clock();
var targetGeometry = new THREE.BoxGeometry(1,1,1);
var targetMaterial = new THREE.MeshBasicMaterial({transparent:true, opacity:0});
var targetCamera = new THREE.Mesh(targetGeometry,targetMaterial);
targetCamera.position.set(11*x,5*y,-30*z);
scene.add(targetCamera);
    
var activePointerLockControls;
var renderCamera = camera;




