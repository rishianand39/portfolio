import React from "react";
import {HiArrowNarrowRight} from "react-icons/hi"

export const Home=()=>{

    return(
        <div name="home" className="container common-width">
            {/* container */}
            <div>
                <p className="greeting-para">Hi, my name is</p>
                <h1 className="my-name">Rishi Anand</h1>
                <h2 className="profession">I'm a Full Stack Developer</h2>
                <p className="intro">I'm a full-stack developer specializing in building(and occassionally designing) exceptional digital experience. Currently, I'm focused on building responsive full-stack web applications.</p>
                <div>
                    <button className="view-work-btn">View Work<HiArrowNarrowRight className="arrow"/></button>
                </div>
            </div>
            {/* <div className="image-div">
                <img src={profile} alt="" />
            </div> */}
        </div>
    )
}