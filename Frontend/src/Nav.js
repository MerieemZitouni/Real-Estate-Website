import React from 'react'
import { Link} from 'react-router-dom'
import logo from "./Logo2.png";

function Nav() {
  return (
    <div className='flex justify-between items-center px-14 pb-1' >
        <img className='pt-1' src={logo} width="180px" />
        <ul className='flex justify-center text-2xl gap-28 text-dark  '>
            <li className=' hover:text-green'> <Link to="/signup">Sign Up</Link></li>
            <li className=' hover:text-green'> <Link to="/login">Login</Link></li>
        </ul>
    </div>
  )
}

export default Nav