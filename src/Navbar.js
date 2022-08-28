import React from 'react'
import {NavLink} from "react-router-dom"
import Logo from "./Image/logo.png"

const Navbar = () => {
  return (
   <><nav>
   <div className="logo">
       <img src={Logo} alt="CodeWexy" />
   </div>
   <div className="menu">
       <ul>
           <li><NavLink to="/">Home</NavLink></li>
           <li><NavLink to="/about">About</NavLink></li>
           <li><NavLink to="/headtail">Head & Tail</NavLink></li>
       </ul>
   </div>
  </nav>
   </>
  )
}

export default Navbar