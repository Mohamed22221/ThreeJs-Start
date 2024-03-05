import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const canvas = document.querySelector("canvas.webgl");
const axisHelper = new THREE.AxesHelper(5);

scene.add(axisHelper);

//add cube in scene
const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube.position.set(0, 0, 0);

scene.add(cube);
cube.rotateY(1);

const sizes = {
  width: innerWidth,
  height: innerHeight,
};


//add camera in scene
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.set(0, 0, 2);

scene.add(camera);


const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

window.addEventListener("resize", () => {
  // by updating the width and the height
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  // and updating the aspect ratio of the camera
  camera.aspect = sizes.width / sizes.height;
  // don forget to update the camera
  camera.updateProjectionMatrix();
  // and update the renderer sizes
  renderer.setSize(sizes.width, sizes.height);
  // and limit the pixel ratio for better performance
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

new OrbitControls(camera, canvas);

const tick = () => {

  renderer.render(scene, camera);
  // call the function every frame
  window.requestAnimationFrame(tick);
};
// function call
tick();



// show distance cube to camira
console.log("distance to camira", cube.position.distanceTo(camera.position));
// show length cube
console.log("show length cube", cube.position.length());
// normalize cube
console.log("normalize cube", cube.position.normalize());
//! method 1 using Date.now
