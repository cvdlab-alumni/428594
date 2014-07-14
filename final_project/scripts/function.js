  function render() {
    updateStats();
    if (video1.readyState === video1.HAVE_ENOUGH_DATA) {
      if (texture1) texture1.needsUpdate = true;
    }
    if (video2.readyState === video2.HAVE_ENOUGH_DATA) {
        if (texture2) texture2.needsUpdate = true;
    }
    if (video3.readyState === video3.HAVE_ENOUGH_DATA) {
        if (texture3) texture3.needsUpdate = true;
    }
    if (video4.readyState === video4.HAVE_ENOUGH_DATA) {
        if (texture4) texture4.needsUpdate = true;
    }
    if (video5.readyState === video5.HAVE_ENOUGH_DATA) {
        if (texture5) texture5.needsUpdate = true;
    }
    KF.update();
		trackballControls.update();
	
    requestAnimationFrame(render);
    renderer.render(scene, renderCamera);
  }
  
     function onDocumentMouseDown(event) {
        event.preventDefault();
        // map viewport coordinates in ([-1,1], [-1,1], 0.5)
        var vector = new THREE.Vector3(( event.clientX / window.innerWidth ) * 2 - 1, -( event.clientY / window.innerHeight ) * 2 + 1, 0.5);
        projector.unprojectVector(vector, renderCamera);
        var raycaster = new THREE.Raycaster(renderCamera.position, vector.sub(renderCamera.position).normalize());
        var intersects = raycaster.intersectObjects(toIntersectObjects);
        if (intersects.length > 0) {
          intersects[ 0 ].object.interact && intersects[ 0 ].object.interact();
        }
      }

function initStats() {
    var stats = new Stats();
    stats.setMode(0); // 0: fps, 1: ms
    $('body').append(stats.domElement);
    return stats;
}

function updateStats() {
	  
		var delta = clock.getDelta();
		var moveDistance = 10 *delta; 
		var rotateAngle = Math.PI / 2*delta;  
		
		if ( keyboard.pressed("W") )
			targetCamera.translateZ( -moveDistance );
		if ( keyboard.pressed("S") )
			targetCamera.translateZ(  moveDistance );
		if ( keyboard.pressed("Q") )
			targetCamera.translateX( -moveDistance );
		if ( keyboard.pressed("E") )
			targetCamera.translateX(  moveDistance );	

		var rotation_matrix = new THREE.Matrix4().identity();
		if ( keyboard.pressed("A") )
			targetCamera.rotateOnAxis( new THREE.Vector3(0,1,0), rotateAngle);
		if ( keyboard.pressed("D") )
			targetCamera.rotateOnAxis( new THREE.Vector3(0,1,0), -rotateAngle);

		var relativeCameraOffset = new THREE.Vector3(0,0,-1);

		var cameraOffset = relativeCameraOffset.applyMatrix4( targetCamera.matrixWorld );

		inspectedCamera.position.x = cameraOffset.x;
		inspectedCamera.position.y = cameraOffset.y;
		inspectedCamera.position.z = cameraOffset.z;
		inspectedCamera.lookAt( targetCamera.position );

		stats.update();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}