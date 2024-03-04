import * as THREE from "three";

const scene = new THREE.Scene();
const canvas = document.querySelector("canvas.webgl");
//add cube in scene
const cube = new THREE.Mesh(
  new THREE.BoxBufferGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);

scene.add(cube);
const sizes = {
  width: innerWidth,
  height: innerHeight,
};

//add camera in scene
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.set(0, 0, 2);

scene.add(camera);

//render camera and cube
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);


// show distance cube to camira
console.log("distance to camira", cube.position.distanceTo(camera.position));
// show length cube
console.log("show length cube", cube.position.length());
// normalize cube
console.log("normalize cube", cube.position.normalize());
