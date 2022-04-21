import React, { useState } from 'react'
import logo from '../assets/logo.png'
import {FaBars, FaTimes} from "react-icons/fa"

export const Navbar=()=>{
    const [toggle, setToggle]=useState(false)
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
       </div> 
    )
}