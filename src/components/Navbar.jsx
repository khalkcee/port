import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 10px;

  justify-content: center;
  background:transparent;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  color: black;
  font-weight:bold;
  
`;

const Logo = styled.img`
  height: 80px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 30px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: normal;
`;
const a = styled.a`
  text-decoration: none;
  color: white;
   &&& {
    text-decoration: none;
  }
`;
const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/lunalogo.png" />
          <List >
            <ListItem >Projects</ListItem>
            <ListItem >Projects</ListItem>
          </List>
        </Links>
        <Icons>
          {/* Changed the image due to copyright problems */}
          <Icon src="./img/whatsapp.gif" className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" />
            <Button >
                👈 Hire me 
</Button> 
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
