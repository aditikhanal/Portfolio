// /* eslint-disable import/no-extraneous-dependencies */

// import ReactDOM from "react-dom";
// import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import ReactFullpage from "@fullpage/react-fullpage";
// import React, { Component } from 'react';
// import Background from "../Background.js"
// import Home from "./home"
// import ScrollButton from "./ScrollButton"
// import About from "./about.js"
// import Project from "./project.js"
// import List from "./listofprojects.js"
// import NavBar from "./NavBar.js"



// import resumeData from "../portfolioData"

// import "./styles.css";

// class FullpageWrapper extends React.Component {
//   onLeave(origin, destination, direction) {
//     console.log("Leaving section " + origin.index);
//   }
//   afterLoad(origin, destination, direction) {
//     console.log("After load: " + destination.index);
//   }
//   render() {
//     return (
//       <ReactFullpage
//         scrollOverflow={true}
//         sectionsColor={["orange", "purple", "green"]}
//         onLeave={this.onLeave.bind(this)}
//         afterLoad={this.afterLoad.bind(this)}
//         render={({ state, fullpageApi }) => {
//           return (
//             <div id="fullpage-wrapper">
//               <div className="section section1">
//                <Home/>
//               </div>
//               <div className="section">
//                <About />
//                 <button onClick={() => fullpageApi.moveTo(1, 0)}>
//                   Move top
//                 </button>
//               </div>
              
//               <div className="section">
//                 <div className="slide">
                  
//         <List resumeData={resumeData[0]}/>
//                 </div>
//                 <div className="slide">
//                 <List resumeData={resumeData[1]}/>
//                 </div>
                
//                 </div>
              
            
//             </div>
//           );
//         }}
//       />
//     );
//   }
// }



// export default FullpageWrapper;