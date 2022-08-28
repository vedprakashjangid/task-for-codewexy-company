import React from 'react'
import {NavLink } from "react-router-dom"
import "./css/Error.css"
import Home from "./Home"

const Error = () => {
  return (<>
    <div className='error__Container'>
      <h1>oops! page not found</h1>
    </div>
   <button className='error__button'> <NavLink to="/" id="goToHome">Go to Home</NavLink></button>

    </>
  )
}

export default Error