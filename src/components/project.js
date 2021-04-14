import React, { Component } from 'react';
import "../home.css"




class Project extends React.Component {
    render() {
        return (
            <section id="project">
                <div class="project-container">
                    <div class="workcontainer">
                    <img class="laptop" src="images/laptop.png" ></img>
                    <div class="textcontainer">
                    <span class="work">What I have been upto!</span>
                    <span class="work2">Here are some of my recent projects!</span>
                    </div>
                    <img class="workimg" src="images/work.png" ></img>
                    </div>
                </div>
            </section>
        )
    }
}

export default Project;