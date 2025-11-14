import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Link1 = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </nav>

   
    <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/about' element={<About></About>}/>
    </Routes>
    </div>
  )
}

export default Link1