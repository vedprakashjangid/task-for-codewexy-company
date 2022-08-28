import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Home"
import About from "./About"
import HeadTail from "./HeadTail"
import Error from "./Error"

const App = () => {
  return (
    <><BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/headtail" element={<HeadTail/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
