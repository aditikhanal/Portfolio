import React, { Component } from 'react';

import Home from "./components/home"
import ScrollButton from "./components/ScrollButton"
import About from "./components/about.js"
import Project from "./components/project.js"
import List from "./components/listofprojects.js"
import NavBar from "./components/NavBar.js"



import resumeData from "./portfolioData"




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
    

     
        <List resumeData={resumeData}/>
        
        
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
        

      </div>
    );
  }
}



export default App;
