import React from "react"
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  
  return (
    <div className="w-[100%] h-[60px] bg-[black] text-[#fffffe] fixed top-0 left-0 py-[5px]">
    <div className="grid grid-cols-5 gap-x-[4px] h-full w-full justify-center content-center">
    <NavLink to="/">
    <button className="rounded bg-blue-600 w-full">Logo</button>
    </NavLink>
    <NavLink to="/home">
    <button className="rounded bg-blue-600 w-full">Home</button>
    </NavLink>
    <NavLink to="/hero">
    <button className="rounded bg-blue-600 w-full">Hero</button>
    </NavLink>
    <NavLink to="/form">
    <button className="rounded bg-blue-600 w-full">Form</button>
    </NavLink>
    <NavLink to="/about">
    <button className="rounded bg-blue-600 w-full">About</button>
    </NavLink>
    </div>
    </div>
    )
}


export default Navbar;
