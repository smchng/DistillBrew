import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const Render = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Scene
    const scene = new THREE.Scene();

    // Model
    const gltfLoader = new GLTFLoader();
    gltfLoader.load("/renders/siphon.gltf", (gltf: GLTF) => {
      const ladybug = gltf.scene;
      ladybug.position.set(0, -10, -0.1);
      scene.add(ladybug);
    });

    // Lights
    const ambientLight = new THREE.AmbientLight(0x20202a, 20);
    ambientLight.position.set(30, -10, 30);
    scene.add(ambientLight);

    const light = new THREE.PointLight(0xffffcc, 20, 50);
    light.position.set(4, 30, -20);
    scene.add(light);

    // Objects
    const plane = new THREE.Mesh(
      new THREE.BufferGeometry(),
      new THREE.MeshStandardMaterial({
        color: "#006400",
        metalness: 0.3,
        roughness: 0.4,
      })
    );
    plane.rotation.x = -Math.PI * 0.5;
    plane.receiveShadow = true;
    scene.add(plane);

    // Sizes
    const sizes = { width: window.innerWidth, height: window.innerHeight };

    const handleResize = () => {
      // Update sizes
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      // Update camera
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      // Update renderer
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(3, 3, 3);
    scene.add(camera);

    // Controls
    const controls = new OrbitControls(camera, containerRef.current!);
    controls.enableDamping = true;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // Append renderer to the container
    if (containerRef.current) {
      const controls = new OrbitControls(camera, containerRef.current);
      controls.enableDamping = true;
    }

    const tick = () => {
      // OrbitControls
      controls.update();

      // Render
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick); // 60 ticks per second
    };

    tick();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas ref={containerRef} className=" fixed z-50 ">
      test
    </canvas>
  );
};

export default Render;
