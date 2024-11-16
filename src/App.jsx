import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Hero from "./Components/Hero"
import Form from "./Components/Form"
import About from "./Components/About"
import Footer from "./Components/Footer"
import AllComp from "./Components/AllComp"

function App() {

  return (
    <div className="bg-gray-700 text-white text-2xl">
    
    <BrowserRouter>
    <Navbar />
    <Routes>
    <Route path="/" element={<AllComp/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/hero" element={<Hero/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    </div>
  )
}

export default App
