import React, { Suspense } from "react";
import styled from "styled-components";
import './possibility/possibility.css';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align:left; 
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
  

    
    
  }
`;

const Container = styled.div`
  scroll-snap-align: center;
  max-width: 90%;
  padding: 10px 30px;
  background:transparent;
  border-radius:22px;
  display: flex;
  text-align:left; 
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    background: transparent;
  }
`;


const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: transparent;


  @media only screen and (max-width: 768px) {
    flex: 1;
    text-align:left; 
  background: transparent;




  }
`;

const Title = styled.h1`
  font-size: 74px;
  color:black;
  line-height: .8;
  display:flex;

  @media only screen and (max-width: 768px) {
    text-align: left;
    color: black;
  }
`;

const Callout = styled.div`
  display: flex;
  align-items: center;
  margin: 12px;
  background:gray;
  padding: 20px;
  width: 100hw;

  border: 1px solid black;
  border-radius: 12px;
`;

const Line = styled.img`
  height: 2px;
`;

const Subtitle = styled.h2`
  color: black;
  font-size: 17px

`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  margin-top:10px;
  @media only screen and (max-width: 768px) {
    text-align: left;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100%;
  font-size: 20px;
  padding: 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
 width: 80%;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 50%;
  }

  @keyframes animate {
    to {
      transform: translateY(50px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
     
      <Container>
        <Left>
            <Callout>
            <Line src="./img/line.png" />
            <Subtitle>🙂 Hi, Im Precious! I am a Digital marketing Specialist and Internationally wanted celebrity person</Subtitle>
          </Callout>
          <Title>Creative Digital Portfolio</Title>
           <h1 className="text-3xl font-bold underline text-center">Hello world!</h1> 
          <Desc>
           This is a brief description about who i am,  professional background and what value i can offer towards helping you achieve your next project.
          </Desc>
          <Button>Download My CV</Button>
        </Left>
        <Right>
          <Canvas >
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={1.8}>
                <MeshDistortMaterial
                  color="red"
                  attach="material"
                  distort={0.5}
                  speed={1.4}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src="./img/moon.png" />
        </Right>
      </Container>
      
    </Section>
  );
};

export default Hero;
