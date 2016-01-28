

var renderer = Detector.webgl ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
		
		
var width  = window.innerWidth,
	height = window.innerHeight - 30;
	
renderer.setSize(width, height);

var webglEl = document.getElementById('sphere');	
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, width / height, 1, 1000);
camera.position.x = 0.1;


/* Creates a sphere and texturemaps the projection onto the sphere */ 
var sphere = new THREE.Mesh(
	new THREE.SphereGeometry(120, 40, 40),
	new THREE.MeshBasicMaterial({
		map: THREE.ImageUtils.loadTexture("./upload/"+imageFile)
	})
);
sphere.scale.x = -1;
scene.add(sphere);


var controls = new THREE.OrbitControls(camera);
controls.noPan = true;
controls.noZoom = true; 
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
webglEl.appendChild(renderer.domElement);
render();



//var context = Argon.immersiveContext;
//var options = THREE.Bootstrap.createArgonOptions( Argon.immersiveContext );
//options.renderer = { klass: THREE.CSS3DRenderer };
//var three = THREE.Bootstrap( options );
//
//var eyeOrigin = three.argon.objectFromEntity(Argon.immersiveContext.eyeOrigin);
//var boxGeoObject = new THREE.Object3D;

//create the cube object
var buzz = new THREE.Object3D;
var loader = new THREE.TextureLoader();
loader.load( 'box.jpg', function ( texture ) {
	var geometry = new THREE.BoxGeometry(5, 5, 5);
	var material = new THREE.MeshBasicMaterial( { map: texture });
	var mesh = new THREE.Mesh( geometry, material );
	mesh.scale.set(1,1,1);
	buzz.add( mesh );
});

//boxGeoObject.add(buzz);
//buzz.position.set(0, 0, 1000);
scene.add(buzz);
//buzz.position.z = 1000
camera.position.z = -10;

//buzz.visible = true;
// The code to switch between the showing and non showing of the cube


var vis = true;
function toggleButton(){
	// console.log("inside toggle button");
	// console.log(this.buzz.visible);
	if (this.buzz.visible == true){
		// buzz.visible = false
		//this.scene.remove(this.buzz);
		this.buzz.visible = false;
		this.vis = false;
		//THREE.SceneUtils.traverseHierarchy( buzz, function ( buzz ) { buzz.visible = false; } );

	} else {
	if (this.buzz.visible == false){
		//this.scene.add(this.buzz);
		this.buzz.visible = true;
		this.vis = true;
	}
}

	//render();

}
var button = document.getElementById( 'toggle' );
button.addEventListener( 'click', toggleButton);
//render();

//buzz.position.set(200, 200, 200);
// set position
//buzz.position.set(0, 0, 20);


//eyeOrigin.add(boxGeoObject);

// Light the scene?
// give a position - look up in the three js documentation - object.position.x and object.position.x

// set the position to be near the camera
// var cameraPosition = three.camera.getWorldPosition();
// cameraPosition.x += 5;
// buzz.position.copy(cameraPosition)
// three.argon.updateEntityFromObject(buzz)

		function render() {
			controls.update();
			requestAnimationFrame(render);
			renderer.render(scene, camera);
		}
		
		function onWindowResize() {

			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize( window.innerWidth, window.innerHeight );

		}
		
		
		window.addEventListener( 'resize', onWindowResize, false );