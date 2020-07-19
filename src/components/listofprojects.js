import React, { Component } from 'react';
import "../home.css"
import "../Button.scss"

class About extends React.Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="about">

                {
                    resumeData.portfolio && resumeData.portfolio.map((item) => {
                        return (
                            <div class={item.class} alt="scroll">
                                <h5 class="title">{item.name}</h5>
                                <div class="imgcontainer">
                                    <img src={`${item.imgurl}`} className={item.imgclass} />
                                    {/* {item.additionalpic ?
                                        <img src={`${item.additionalpic}`} className={item.addclass} />
                                        : null} */}
                                </div>
                                <p class="text-container">{item.description}</p>
                                <p class="addtext-container">{item.additional}</p>
                                <div class="button">
                                    <a href={`${item.github}`}>
                                        <button class="learn-more">
                                            <span class="circle" aria-hidden="true">
                                                <span class="icon arrow"></span>
                                            </span>
                                            <span class="button-text">  View on Github</span>
                                        </button></a>
                                </div>

                            </div>


                        )
                    })
                }


            </section>
        )
    }
}




export default About;