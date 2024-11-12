import React from "react"
import { Link } from "react-router-dom";



const Navbar = () => {
  
  return (
    <div className="w-[100%] h-[60px] bg-[black] text-[#fffffe] fixed top-0 left-0 py-[5px]">
    <div className="grid grid-cols-6 gap-x-[4px] h-full w-full justify-center content-center">
    <Link to="/">
    <button className="rounded bg-blue-600 w-full">Logo</button>
    </Link>
    <Link to="/home">
    <button className="rounded bg-blue-600 w-full">Home</button>
    </Link>
    <Link to="/hero">
    <button className="rounded bg-blue-600 w-full">Hero</button>
    </Link>
    <Link to="/form">
    <button className="rounded bg-blue-600 w-full">Form</button>
    </Link>
    <Link to="/about">
    <button className="rounded bg-blue-600 w-full">About</button>
    </Link>
    <Link to="/footer">
    <button className="rounded bg-blue-600 w-full">Footer</button>
    </Link>
    </div>
    </div>
    )
}


export default Navbar;
