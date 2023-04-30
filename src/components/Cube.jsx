import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { SphereGeometry, MeshStandardMaterial, Mesh } from "three";

const Cube = () => {
 const texture = useLoader(THREE.TextureLoader, "/public/img/bg.jpeg");

  return (
    <mesh  geometry={new SphereGeometry(1, 32, 32)}
      material={new MeshStandardMaterial({ map: texture })}>
 
    </mesh>
  );
};

export default Cube;
