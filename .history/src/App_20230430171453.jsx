import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

import './App.css';
  
import Works from "./components/Works";
import Possibility from "./components/possibility";


const Container = styled.div`
  height: 100vh;

  scroll-behavior: smooth;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  color: white;
  background: white;
  &::-webkit-scrollbar{
    display: none;
  }
`;

function App() {
  return (
    <Container>
        <Navbar/>
      <Hero />
      <Possibility/>
     
    </Container>
  );
}

export default App;
