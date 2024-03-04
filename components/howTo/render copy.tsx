// pages/index.tsx
import { useEffect, useRef } from "react";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

interface ThreeSceneSetupOptions {
  containerRef: React.RefObject<HTMLDivElement>;
}

export const setupThreeScene = ({ containerRef }: ThreeSceneSetupOptions) => {
  const scene = new window.THREE.Scene();
  const camera = new window.THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  const renderer = new window.THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  containerRef.current?.appendChild(renderer.domElement);

  // Load GLTF model
  const loader = new GLTFLoader();
  loader.load("/renders/siphon.gltf", (gltf: GLTF) => {
    gltf.scene.position.set(0, 0, 0);
    gltf.scene.rotation.set(0, Math.PI / 2, 0);
    gltf.scene.scale.set(0.1, 0.1, 0.1);
    scene.add(gltf.scene);
  });

  // Set up animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  };

  animate();

  // Handle window resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  window.addEventListener("resize", handleResize);

  // Cleanup
  return () => {
    window.removeEventListener("resize", handleResize);
  };
};

export const Render: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const nextSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.THREE) {
      const cleanupThreeScene = setupThreeScene({ containerRef });
      return () => {
        cleanupThreeScene();
      };
    } else {
      console.error(
        "Three.js not initialized. Make sure it's properly loaded."
      );
      return () => {};
    }
  }, []);

  return (
    <div>
      <div ref={containerRef} className="h-screen bg-matcha1">
        <p>test</p>
      </div>
    </div>
  );
};
