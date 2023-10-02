import './style.css'
import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);
renderer.render( scene, camera );

const geometory = new THREE.TorusGeometry( 10, 3, 16, 100 );
const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } );
const torus = new THREE.Mesh( geometory, material );

const tank1geo = new THREE.BoxGeometry(19, 10, 10); // Dimensions of the cube
const tank1mat = new THREE.MeshBasicMaterial({
    color: 0x00ff00,      // Color of the cube
    transparent: true,    // Enable transparency
    opacity: 0.5          // Set opacity level (0.5 means 50% transparent)
});
const tank1 = new THREE.Mesh(tank1geo, tank1mat);


scene.add(torus);
scene.add(tank1);

function animate(){
  requestAnimationFrame( animate );
  
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.001;
  torus.rotation.z += 0.0001;
  
  tank1.rotation.x -= 0.01;
  tank1.rotation.y -= 0.001;
  tank1.rotation.z -= 0.01;

  material.color.r -= 1;
  console.log(material);

  renderer.render( scene, camera );
}

animate()