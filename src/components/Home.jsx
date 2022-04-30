import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi"
import profile from "../assets/profile.JPG"
export const Home=()=>{

    return(
        <div name="home" className="container common-width">
            
            <div className="info">
                <p className="greeting-para">Hi, my name is</p>
                <h1 className="my-name">Rishi Anand</h1>
                <h2 className="profession">I'm a Full Stack Developer</h2>
                <p className="intro">I'm a full-stack developer specializing in building(and occassionally designing) exceptional digital experience. Currently, I'm focused on building responsive full-stack web applications.</p>
                <div>
                   <a href="https://docs.google.com/document/d/19R8c3Vtdrvu64TLjubZZAf3jLqY1x-wBiZx0-p5UImg/edit" target="_blank" rel="noreferrer"> <button className="view-work-btn">Resume<HiArrowNarrowRight className="arrow"/></button></a>
                </div>
            </div>
            <div className="profile">
               
                <img src={profile} alt="profile"  />
            </div>
           
        </div>
    )
}