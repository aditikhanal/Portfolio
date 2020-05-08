import React, { Component } from 'react';
import Background from "./Background.js"
import Home from "./components/home"
import ScrollButton from "./components/ScrollButton"
import About from "./components/about.js"
import Project from "./components/project.js"
import NavBar from "./components/NavBar.js"
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactDOM from "react-dom"



class App extends Component {
  state = {
    navbarOpen: false
  }

  handleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  }

  render(
    

  ) {
    return (
      <div className="App">
        <NavBar />
    
        <Home />
        <About />
        <Project />
        
        {/* <Background/> */}
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />

      </div>
    );
  }
}



export default App;
