import React, { Component } from 'react';
import "../home.css"






class About extends React.Component {
    render() {
        return (
            <section id="about">
                <div class="about-container" alt="scroll">
                    {/* <img class="img-me" src="images/me.jpg" ></img> */}

                    <text class="edu-text">Education</text>
                    <text class="eduw-text">4th year, Computer Engineering, Kathmandu Engineering College, 2016-2020</text>
                    <div id="img1" class="square show-on-scroll">
                        <img class="img" src="images/graduation.png"></img>
                    </div>
                    <text class="training-text">Training</text>
                    <text class="trainingw-text">Fellowship at Women Leader's in Technology, 2019-2020</text>
                    <img id="img2" class="square2" src="images/wlit.png"></img>
                    <text class="work-text">Experience</text>
                    <text class="workw-text">React Native Intern at Sochware, Jan 2020-May 2020</text>
                    <img class="square3" src="images/office.png"></img>
                    <div class="socialdiv">
                        <a href="https://github.com/aditikhanal"><img class="github" src="images/github.png"></img></a>

                        <a href="https://www.linkedin.com/in/aditi-khanal/"><img class="linkedin" src="images/linkedin.png"></img></a>
                        <a href="https://www.facebook.com/aditi.khanal.5"><img class="facebook" src="images/facebook.png"></img></a>
                        <a href="https://gitlab.com/aditikhanal"><img class="gitlab" src="images/gitlab.png"></img></a>
                    </div>



                </div>

            </section>
        )
    }
}




export default About;