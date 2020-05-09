import React, { Component } from 'react';
import "../home.css"






class About extends React.Component {
    render() {
        return (
            <section id="about">
                <div class="about-container" alt="scroll">
                    <img class="img-me" src="images/me.jpg" ></img>
                        <text class="edu-text">Education</text>
                        <text class="eduw-text">4th year, Computer Engineering, Kathmandu Engineering College, 2016-2020</text>
                        <div class="square show-on-scroll">
                        <img class="img" src="images/graduation.png"></img>
                       
                     
                    </div>
                    <text class="training-text">Training</text>
                    <text class="trainingw-text">Fellowship at Women Leader's in Technology, 2019-2020</text>
                    <img class="square2" src="images/wlit.png"></img>
                    <text class="work-text">Experience</text>
                    <text class="workw-text">React Native Intern at Sochware, Jan 2020-May 2020</text>
                        <img class="square3" src="images/office.png"></img>


                </div>

            </section>
        )
    }
}




export default About;