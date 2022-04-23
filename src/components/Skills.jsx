
import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Clanguage from '../assets/clanguage.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import MongoDb from '../assets/mongo.png';
import MaterialUi from '../assets/materialui.png';




import Mongo from '../assets/mongo.png';


export const Skills=()=>{

    return(
        <div name="skills" className=' common-width'>
            <div>
                <div className="skills-div-1">
                    <p>Experience</p>
                    <p>Thse are the technolgies I've worked with</p>
                </div>
                <div className='grid'>
                    <div className="skills-div-2">
                        <img src={HTML} alt="" />
                        <p className="language-name">HTML</p>
                    </div>
                    <div className="skills-div-2">
                        <img src={CSS} alt="" />
                        <p className="language-name">Css</p>
                    </div>
                    <div className="skills-div-2">
                        <img src={JavaScript} alt="" />
                        <p className="language-name">JavaScript</p>
                    </div>
                    <div className="skills-div-2">
                        <img src={ReactImg} alt="" />
                        <p className="language-name">React</p>
                    </div>
                    <div className="skills-div-2">
                        <img src={Node} alt="" />
                        <p className="language-name">Nodejs</p>
                    </div>
                    <div className="skills-div-2">
                        <img src={Clanguage} alt="" />
                        <p className="language-name">c language</p>
                    </div>
                    <div className="skills-div-2">
                        <img src={AWS} alt="" />
                        <p className="language-name">AWS</p>
                    </div>
                    <div className="skills-div-2">
                        <img src={GitHub} alt="" />
                        <p className="language-name">GitHub</p>
                    </div>
                    <div className="skills-div-2">
                        <img src={MongoDb} alt="" />
                        <p className="language-name">MongoDb</p>
                    </div>
                    <div className="skills-div-2">
                        <img src={MaterialUi} alt="" />
                        <p className="language-name">MaterialUi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}