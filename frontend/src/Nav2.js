import React from 'react'
import logo from "./Logo2.png";
import signout from './signout.png'

function Nav() {


  return (
    <div className='flex justify-between items-center px-14 pb-1' >
        <img className='pt-1' src={logo} width="180px" />
        
        <ul className='flex justify-center text-2xl gap-28 text-dark  '>
          <li className=' hover:text-green'><button>My List</button></li>
            <li><button className='flex justify-center items-center gap-2 bg-green px-2 py-1 rounded-lg text-light '><img src={signout} /> Sign out</button></li>
        </ul>
    </div>
  )
}

export default Nav