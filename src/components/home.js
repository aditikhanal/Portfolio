import React, { Component } from 'react';
import "../home.css"





class Card extends React.Component {
    render() {

        return (
            <section id="home">

            <div class="container">
                <ul class="animation-area">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

                    {/* <div className="fontcontainer">
                        <p className="aboutfont"></p>
                        <br></br>
                        <p className="aboutfont2"></p>
                    </div> */}
                
                  
                <div class="text-box">
                    <h1 class="heading-primary">
                    <span class="heading-primary-main">Hi! I am Aditi</span>
                    <span class="heading-primary-sub">React Native Developer</span>
                    </h1>
                
                </div>

                <div class="imgdiv">
                        <div
                            className="image">

                            <img className="card" src="images/about.png"></img>
                        </div>
                    </div>
                 
                </ul>

              
            </div>
            </section>





        )
    }
}



export default Card;
