import * as THREE from "three";
import gsap from "gsap";

import "./style.css";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

// let lastTime = Date.now();

// Clock
const clock = new THREE.Clock();

// GSAP
gsap.to(mesh.position, { x: 2, duration: 1, delay: 1 });

// Animation
const tick = () => {
  // Native Clock impl. with lastTime on L34 above.
  // const currentTime = Date.now();
  // const delta = currentTime - lastTime;

  // lastTime = currentTime;

  // mesh.rotation.y += 0.001 * delta;

  // This gets the elapsed time since the Clock was instantiated, in seconds.
  const elapsedTime = clock.getElapsedTime();

  // One revolution per second, since 2π radians = 360º
  // mesh.rotation.y = elapsedTime * Math.PI * 2;

  // Circular motion!
  // mesh.position.y = Math.sin(elapsedTime);
  // mesh.position.x = Math.cos(elapsedTime);

  // You can also move the camera instead of the cube!
  camera.position.y = Math.sin(elapsedTime);
  camera.position.x = Math.cos(elapsedTime);
  camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
