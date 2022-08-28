import React from 'react'

import "./css/Home.css"
 import Navbar from "./Navbar"

const Home = () => {
  return (
   <>
   <Navbar/>
   <div className="home__container">
    <h1>This is my task given by codewexy</h1>
   </div>

   </>
  )
}

export default Home