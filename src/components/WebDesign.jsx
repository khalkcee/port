import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Mac from "./Mac";

const Desc = styled.div`
  width: 180px;
  padding: 20px;
  background-color: orange;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  font-weight:bold;

  @media only screen and (max-width: 768px) {
    top: 20;
    bottom: 0;
    left: 10;
    right: 0;
    margin-top: 120px;
    width: 180px;
    height: fit-content;
  }
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Mac />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
    </>
  );
};

export default WebDesign;
