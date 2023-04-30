import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";

const data = [
  "UX/UI Design",
  "Development",
  "Product Design",
  "Social Media",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 200;
  margin-bottom:120px;

    @media only screen and (max-width: 768px) {
    display:none;
  }
  
`;

const Container = styled.div`
  width: 100%;
     padding-top: 10px;
     



  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
     padding-top: 105px;


    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;

  align-items: center;

  @media only screen and (max-width: 768px) {
    padding-top: 0px;
    margin-top: 50px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
   margin-top: 220px;
    
  }
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: Orangered;
  -webkit-text-stroke: 2px black;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: red;
    -webkit-text-stroke: 0px;
    
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 10;
    left: 0;
    color: black;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;

  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
  height: 100vh;
  margin-top:20px;
  padding:20px;
`;

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <Section>
      <Container>
        <Left>
          
          <List>
            {data.map((item) => (
              <ListItem key={item} text={item} onClick={() => setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "UX/UI Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
