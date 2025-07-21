import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene>();
  const rendererRef = useRef<THREE.WebGLRenderer>();
  const frameRef = useRef<number>();

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 8;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    rendererRef.current = renderer;
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced particle system with multiple layers
    const createParticleSystem = (count: number, color: number, size: number, spread: number) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * spread;
        positions[i + 1] = (Math.random() - 0.5) * spread;
        positions[i + 2] = (Math.random() - 0.5) * spread;
        
        velocities[i] = (Math.random() - 0.5) * 0.02;
        velocities[i + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i + 2] = (Math.random() - 0.5) * 0.02;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));

      const material = new THREE.PointsMaterial({
        color: color,
        size: size,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });

      return new THREE.Points(geometry, material);
    };

    // Create multiple particle layers
    const particles1 = createParticleSystem(200, 0x4ade80, 0.8, 30);
    const particles2 = createParticleSystem(150, 0x22d3ee, 0.5, 25);
    const particles3 = createParticleSystem(100, 0x8b5cf6, 0.3, 20);
    
    scene.add(particles1);
    scene.add(particles2);
    scene.add(particles3);

    // Create floating geometric shapes
    const geometries = [
      new THREE.TetrahedronGeometry(0.5),
      new THREE.OctahedronGeometry(0.4),
      new THREE.IcosahedronGeometry(0.3),
      new THREE.DodecahedronGeometry(0.35),
    ];

    const shapes: THREE.Mesh[] = [];
    for (let i = 0; i < 25; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshBasicMaterial({
        color: [0x4ade80, 0x22d3ee, 0x8b5cf6, 0x6b7280][Math.floor(Math.random() * 4)],
        wireframe: true,
        transparent: true,
        opacity: 0.6,
      });

      const shape = new THREE.Mesh(geometry, material);
      shape.position.set(
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25
      );
      shape.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      
      // Add custom properties for animation
      (shape as any).rotationSpeed = {
        x: (Math.random() - 0.5) * 0.02,
        y: (Math.random() - 0.5) * 0.02,
        z: (Math.random() - 0.5) * 0.02,
      };
      (shape as any).floatSpeed = Math.random() * 0.01 + 0.005;
      (shape as any).floatOffset = Math.random() * Math.PI * 2;

      shapes.push(shape);
      scene.add(shape);
    }

    // Create interconnected network lines
    const createNetworkLines = () => {
      const lineGeometry = new THREE.BufferGeometry();
      const linePositions: number[] = [];
      const numConnections = 40;

      for (let i = 0; i < numConnections; i++) {
        const start = new THREE.Vector3(
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        );
        const end = new THREE.Vector3(
          start.x + (Math.random() - 0.5) * 8,
          start.y + (Math.random() - 0.5) * 8,
          start.z + (Math.random() - 0.5) * 8
        );

        linePositions.push(start.x, start.y, start.z);
        linePositions.push(end.x, end.y, end.z);
      }

      lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x4ade80,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
      });

      return new THREE.LineSegments(lineGeometry, lineMaterial);
    };

    const networkLines = createNetworkLines();
    scene.add(networkLines);

    // Create pulsing rings
    const rings: THREE.Mesh[] = [];
    for (let i = 0; i < 8; i++) {
      const ringGeometry = new THREE.RingGeometry(1, 1.2, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: [0x4ade80, 0x22d3ee, 0x8b5cf6][i % 3],
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide,
      });

      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30,
        (Math.random() - 0.5) * 30
      );
      ring.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      (ring as any).pulseSpeed = Math.random() * 0.02 + 0.01;
      (ring as any).pulseOffset = Math.random() * Math.PI * 2;

      rings.push(ring);
      scene.add(ring);
    }

    // Create floating code-like elements
    const createCodeElements = () => {
      const codeGeometry = new THREE.PlaneGeometry(0.1, 0.1);
      const codeMaterial = new THREE.MeshBasicMaterial({
        color: 0x4ade80,
        transparent: true,
        opacity: 0.7,
      });

      const codeElements: THREE.Mesh[] = [];
      for (let i = 0; i < 50; i++) {
        const element = new THREE.Mesh(codeGeometry, codeMaterial);
        element.position.set(
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 40
        );
        
        (element as any).driftSpeed = {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005,
        };

        codeElements.push(element);
        scene.add(element);
      }
      return codeElements;
    };

    const codeElements = createCodeElements();

    // Animation loop
    let time = 0;
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate);
      time += 0.01;

      // Animate particle systems
      [particles1, particles2, particles3].forEach((particles, index) => {
        particles.rotation.y += 0.005 + index * 0.002;
        particles.rotation.x += 0.003 + index * 0.001;
        
        // Animate individual particles
        const positions = particles.geometry.attributes.position.array as Float32Array;
        const velocities = particles.geometry.attributes.velocity.array as Float32Array;
        
        for (let i = 0; i < positions.length; i += 3) {
          positions[i] += velocities[i];
          positions[i + 1] += velocities[i + 1];
          positions[i + 2] += velocities[i + 2];
          
          // Boundary wrapping
          const spread = 15 + index * 5;
          if (Math.abs(positions[i]) > spread) velocities[i] *= -1;
          if (Math.abs(positions[i + 1]) > spread) velocities[i + 1] *= -1;
          if (Math.abs(positions[i + 2]) > spread) velocities[i + 2] *= -1;
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
      });

      // Animate geometric shapes
      shapes.forEach((shape, index) => {
        const customProps = shape as any;
        shape.rotation.x += customProps.rotationSpeed.x;
        shape.rotation.y += customProps.rotationSpeed.y;
        shape.rotation.z += customProps.rotationSpeed.z;
        
        // Floating motion
        shape.position.y += Math.sin(time * customProps.floatSpeed + customProps.floatOffset) * 0.01;
      });

      // Animate network lines
      networkLines.rotation.z += 0.002;
      networkLines.rotation.y += 0.001;

      // Animate pulsing rings
      rings.forEach((ring) => {
        const customProps = ring as any;
        const pulse = Math.sin(time * customProps.pulseSpeed + customProps.pulseOffset);
        ring.scale.setScalar(1 + pulse * 0.3);
        ring.rotation.z += 0.01;
      });

      // Animate code elements
      codeElements.forEach((element) => {
        const customProps = element as any;
        element.position.x += customProps.driftSpeed.x;
        element.position.y += customProps.driftSpeed.y;
        element.position.z += customProps.driftSpeed.z;
        element.rotation.z += 0.02;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!camera || !renderer) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Enhanced mouse movement effect
    const handleMouseMove = (event: MouseEvent) => {
      if (!camera) return;
      
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 3 - camera.position.y) * 0.05;
      
      // Rotate particles based on mouse movement
      particles1.rotation.y += mouseX * 0.001;
      particles2.rotation.x += mouseY * 0.001;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
    />
  );
};

export default ThreeBackground;