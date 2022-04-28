import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes,FaGithub,FaLinkedin,FaTwitter,} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {Link} from "react-scroll"

export const Navbar=()=>{
    const [toggle, setToggle]=useState(true)
    const handleToggle=()=>{
        // console.log(toggle)
       return setToggle(!toggle)
    }
    return(
       <div className="navbar">
           <img className='navbar-logo' src={logo} alt="" />
           <div  className='navbar-menu'>
               <li>
               <Link  to="home"  smooth={true} offset={-120} duration={500}>
                 Home
               </Link>
               </li>
               <li>
               <Link  to="about"  smooth={true} offset={-80}  duration={500}>
                 About
               </Link>
               </li>
               <li>
               <Link  to="skills"  smooth={true} offset={-80} duration={500}>
                 Skill
               </Link>
               </li>
               <li>
               <Link  to="work"  smooth={true} offset={-80}  duration={500}>
                 Project
               </Link>
               </li>
               <li>
               <Link  to="contact"  smooth={true} offset={-80}  duration={500}>
                 Contact
               </Link>
               </li>
           </div>

           {/* Hamburger */}
           <div onClick={()=>handleToggle()} className='toggle-bars-icon hidden'>
               {toggle? <FaBars /> :<FaTimes />}
           </div>
           {/* Mobile menu */}
           <ul className={toggle? "hidden" : "toggle-inner-menu hidden"}>
               <li>
               <Link onClick={handleToggle} to="home"  smooth={true} offset={-120} duration={500}>
                 Home
               </Link>
               </li>
               <li>
               <Link onClick={handleToggle}  to="about"  smooth={true} offset={-80}  duration={500}>
                 About
               </Link>
               </li>
               <li>
               <Link onClick={handleToggle} to="skills"  smooth={true} offset={-80} duration={500}>
                 Skill
               </Link>
               </li>
               <li>
               <Link onClick={handleToggle} to="work"  smooth={true} offset={-80}  duration={500}>
                 Project
               </Link>
               </li>
               <li>
               <Link onClick={handleToggle} to="contact"  smooth={true} offset={-80}  duration={500}>
                 Contact
               </Link>
               </li>
           </ul>
           {/* social icon */}
           <div className='social-icon'>
               <ul>
                   <li>     
                    <a href="https://www.linkedin.com/in/rishianand39/" target="_blank" rel='noreferrer'>Linkedin<FaLinkedin size={30}/></a>
                   </li>
                   <li>       
                    <a href="https://twitter.com/rishianand39" target="_blank" rel='noreferrer'>Twitter<FaTwitter size={30}/></a>
                   </li>
                   <li>       
                    <a href="https://github.com/rishianand39" target="_blank" rel='noreferrer'>GitHub<FaGithub className='github' size={30} /></a>
                   </li>
                   <li>       
                    <a href="mailto: rishi.rn818@gmail.com"  target="_blank" rel='noreferrer'>Email<HiOutlineMail size={30}/></a>
                   </li>
                   <li>       
                    <a href="https://docs.google.com/document/d/19R8c3Vtdrvu64TLjubZZAf3jLqY1x-wBiZx0-p5UImg" target="_blank" rel='noreferrer'>Resume<BsFillPersonLinesFill size={30}/></a>
                   </li>
               </ul>
           </div>
       </div> 
    )
}