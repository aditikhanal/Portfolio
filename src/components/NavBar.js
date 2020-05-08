import React from 'react'
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Link, animateScroll as scroll } from "react-scroll";

import Home from "./home.js"
import About from "./about.js"
import Projects from "./project.js"
import ReactDOM from "react-dom"

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (

  
    <NavBar style={barAnimation}>
      <FlexContainer>

        <NavLinks style={linkAnimation}>
      
              <Link
               // activeClass="active"
                to="home"
                //spy={true}
                smooth={true}
                //offset={-70}
                duration={500}
              >
                Home
              </Link>
        
          
             <Link
               // activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={500}
              >
                About
              </Link>
         
           
              <Link
                //activeClass="active"
                to="project"
                spy={true}
                smooth={true}
                //offset={-70}
                duration={500}
              >
                Projects
              </Link> 
             
            

        </NavLinks>
        
      </FlexContainer>
    </NavBar>
 
   
      
    



  )
  
}



export default Navbar

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.05);
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: black;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

