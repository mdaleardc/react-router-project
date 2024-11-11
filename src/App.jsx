import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Components/Home"
import Hero from "./Components/Hero"
import Form from "./Components/Form"
import About from "./Components/About"
import Footer from "./Components/Footer"

function App() {

  return (
    <div className="bg-blue-600 text-white text-2xl md:text-3xl">
    <Navbar />
    
    <BrowserRouter>
    
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/hero" element={<Hero/>}/>
    <Route path="/form" element={<Form/>}/>
    <Route path="/about" element={<About/>}/>
    
    </Routes>
    </BrowserRouter>
    
    <Footer />
    </div>
  )
}

export default App
