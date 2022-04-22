import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes,FaGithub,FaLinkedin,FaFacebook,FaTwitter,} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"


export const Navbar=()=>{
    const [toggle, setToggle]=useState(true)
    const handleToggle=()=>{
        console.log(toggle)
       return setToggle(!toggle)
    }
    return(
       <div className="navbar">
           <img className='navbar-logo' src={logo} alt="" />
           <div  className='navbar-menu'>
               <li>Home</li>
               <li>Home</li>
               <li>Home</li>
               <li>Home</li>
               <li>Home</li>
               <li>Home</li>
           </div>

           {/* Hamburger */}
           <div onClick={()=>handleToggle()} className='toggle-bars-icon hidden'>
               {toggle? <FaBars /> :<FaTimes />}
           </div>
           {/* Mobile menu */}
           <ul className={toggle? "hidden" : "toggle-inner-menu hidden"}>
               <li>Home</li>
               <li>Home</li>
               <li>Home</li>
               <li>Home</li>
               <li>Home</li>
               <li>Home</li>
           </ul>
           {/* social icon */}
           <div className='social-icon'>
               <ul>
                   <li>     
                    <a href="/">Linkedin<FaLinkedin size={30}/></a>
                   </li>
                   <li>       
                    <a href="/">Twitter<FaTwitter size={30}/></a>
                   </li>
                   <li>       
                    <a href="/">GitHub<FaGithub className='github' size={30} /></a>
                   </li>
                   <li>       
                    <a href="/">Email<HiOutlineMail size={30}/></a>
                   </li>
                   <li>       
                    <a href="/">Resume<BsFillPersonLinesFill size={30}/></a>
                   </li>
               </ul>
           </div>
       </div> 
    )
}