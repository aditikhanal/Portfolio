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

                    <div className="fontcontainer">
                        <p className="aboutfont">Hi! I am Aditi</p>
                        <br></br>
                        <p className="aboutfont2">React Native Developer</p>
                    </div>

                    <div className="card">
                        <div className="shadow">
                            <div
                                className="shadowImage"
                            >

                            </div>
                        </div>
                        <div
                            className="image"


                        >

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
