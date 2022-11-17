<script setup>
import { onMounted } from "@vue/runtime-core";
import gsap from "gsap";
import * as THREE from "three";

onMounted(() => {
  /**
   * Base
   */
  // Canvas
  const canvas = document.querySelector("canvas.webgl");

  // Scene
  const scene = new THREE.Scene();

  // Material
  const material = new THREE.MeshToonMaterial({ color: "#ffeded" });

  // Material
  const particlesMaterial = new THREE.PointsMaterial({
    color: "#ffeded",
    sizeAttenuation: true,
    size: 0.03,
  });

  // Meshes
  const mesh1 = new THREE.Mesh(
    new THREE.TorusGeometry(1, 0.4, 16, 60),
    material
  );
  const mesh2 = new THREE.Mesh(new THREE.ConeGeometry(1, 2, 32), material);
  const mesh3 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
    material
  );

  scene.add(mesh1, mesh2, mesh3);

  const objectsDistance = 4;
  mesh1.position.y = -objectsDistance * 0;
  mesh2.position.y = -objectsDistance * 1;
  mesh3.position.y = -objectsDistance * 2;

  mesh1.position.x = 2;
  mesh2.position.x = -2;
  mesh3.position.x = 2;

  const sectionMeshes = [mesh1, mesh2, mesh3];

  /**
   * Particles
   */
  const particlesCount = 200;
  const positions = new Float32Array(particlesCount * 3);
  for (let i = 0; i < particlesCount; i++) {
    positions[i * 3 + 0] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] =
      objectsDistance * 0.5 -
      Math.random() * objectsDistance * sectionMeshes.length;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }

  const particlesGeometry = new THREE.BufferGeometry();
  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(positions, 3)
  );

  // Points
  const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particles);

  /**
   * Lights
   */
  const directionalLight = new THREE.DirectionalLight("#ffffff", 1);
  directionalLight.position.set(1, 1, 0);
  scene.add(directionalLight);

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener("resize", () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Scroll
   */
  let scrollY = window.scrollY;
  let currentSection = 0;
  window.addEventListener("scroll", () => {
    scrollY = window.scrollY;
    const newSection = Math.round(scrollY / sizes.height);

    if (newSection != currentSection) {
      currentSection = newSection;
      gsap.to(sectionMeshes[currentSection].rotation, {
        duration: 1.5,
        ease: "power2.inOut",
        x: "+=6",
        y: "+=3",
      });
    }
  });

  /**
   * Cursor
   */
  const cursor = {
    x: 0,
    y: 0,
  };

  window.addEventListener("mousemove", (event) => {
    cursor.x = event.clientX / sizes.width - 0.5;
    cursor.y = event.clientY / sizes.height - 0.5;
  });

  /**
   * Camera
   */
  // Base camera
  const cameraGroup = new THREE.Group();
  scene.add(cameraGroup);

  const camera = new THREE.PerspectiveCamera(
    35,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.z = 6;
  cameraGroup.add(camera);

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Animate
   */
  const clock = new THREE.Clock();
  let previousTime = 0;

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    // Animate meshes
    for (const mesh of sectionMeshes) {
      mesh.rotation.x += deltaTime * 0.1;
      mesh.rotation.y += deltaTime * 0.12;
    }

    camera.position.y = (-scrollY / sizes.height) * objectsDistance;

    const parallaxX = cursor.x * 0.5;
    const parallaxY = -cursor.y * 0.5;

    cameraGroup.position.x +=
      (parallaxX - cameraGroup.position.x) * 5 * deltaTime;
    cameraGroup.position.y +=
      (parallaxY - cameraGroup.position.y) * 5 * deltaTime;

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
});
</script>

<template>
  <canvas class="webgl"></canvas>

  <section class="section">
    <h1>My Portfolio</h1>
  </section>
  <section class="section">
    <h2>My projects</h2>
  </section>
  <section class="section">
    <h2>Contact me</h2>
  </section>
</template>

<style scoped>
html {
  background: #1e1a20;
}

* {
  margin: 0;
  padding: 0;
}

.webgl {
  position: fixed;
  top: 0;
  left: 0;
}

.section {
  display: flex;
  align-items: center;
  height: 100vh;
  position: relative;
  font-family: "Cabin", sans-serif;
  color: #ffeded;
  text-transform: uppercase;
  font-size: 7vmin;
  padding-left: 10%;
  padding-right: 10%;
  will-change: transform;
}

section:nth-child(odd) {
  justify-content: flex-end;
}
</style>
