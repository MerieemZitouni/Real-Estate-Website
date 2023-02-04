//import React from 'react'
import { Link} from 'react-router-dom'
import logo from "./Logo2.png";
import React,{useEffect,useState} from 'react'
import {
  Navbar,
  MobileNav,
  Typography,
  IconButton     
} from "@material-tailwind/react"

function Nav() {
  

 
return(
<Navbar 
        color='transparent'
        fullWidth
        className="fixed z-50 top-0 left-0 right-0 bg-darkBlue-100/50 backdrop-blur-sm py-2 px-4 lg:px-8 lg:py-4 "
      >
       <div className=' flex justify-between items-center px-14 pb-1' >
        <img className='pt-1' src={logo} width="180px" />
        <ul className='flex justify-center text-2xl gap-28 text-dark  '>
            <li className=' hover:text-green'> <Link to="/signin">Sign In</Link></li>
            <li className=' hover:text-green'> <Link to="/login">Login</Link></li>
        </ul>
    </div>
  </Navbar>
);





}

export default Nav



