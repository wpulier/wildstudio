'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff99, wireframe: true });
    const knot = new THREE.Mesh(geometry, material);
    group.add(knot);

    const starGeometry = new THREE.BufferGeometry();
    const starVertices: number[] = [];
    for (let i = 0; i < 1000; i++) {
      starVertices.push(
        THREE.MathUtils.randFloatSpread(200),
        THREE.MathUtils.randFloatSpread(200),
        THREE.MathUtils.randFloatSpread(200)
      );
    }
    starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.5 });
    const stars = new THREE.Points(starGeometry, starMaterial);
    group.add(stars);
    camera.position.z = 30;

    const onResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    const target = new THREE.Vector2();
    const rotation = new THREE.Vector2();
    const onPointerMove = (e: PointerEvent) => {
      target.x = (e.clientX / mount.clientWidth) * 2 - 1;
      target.y = -(e.clientY / mount.clientHeight) * 2 + 1;
    };
    mount.addEventListener('pointermove', onPointerMove);

    let req: number;
    const animate = () => {
      rotation.x += (target.y - rotation.x) * 0.1;
      rotation.y += (target.x - rotation.y) * 0.1;

      group.rotation.x = rotation.x * Math.PI;
      group.rotation.y = rotation.y * Math.PI;
      knot.rotation.z += 0.02;
      starMaterial.color.setHSL((rotation.y + 1) / 2, 0.7, 0.5);

      renderer.render(scene, camera);
      req = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(req);
      mount.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
