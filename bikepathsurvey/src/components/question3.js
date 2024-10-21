import React, { useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import * as THREE from 'three';

function Question3() {
  const navigate = useNavigate();
  const mountRef = useRef(null);

  useEffect(() => {
    // Set up the scene, camera, and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Position the camera
    camera.position.z = 5;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup function to stop rendering when the component is unmounted
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  const goToPrevQuestion = () => {
    navigate("/question2");
  };

  return (
    <div className="container">
      <h2>How would you rate this sidewalk</h2>
      <div ref={mountRef} style={{ width: '600px', height: '400px' }}></div>
      <form>
        <button type="button" onClick={goToPrevQuestion}>
          Prev
        </button>
        <button type="button">
          Finish
        </button>
      </form>
    </div>
  );
}

export default Question3;
