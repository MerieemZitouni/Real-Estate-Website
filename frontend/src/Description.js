import React from 'react'
import logo from "./Logo2.png";

function Description() {
  return (
    <div className="flex flex-col justify-center bg-[url('Group.png')] h-3/4 p-1 ">
        <div className='flex justify-center items-center'>
            <img src={logo} width="600px" />
        </div>
        <div className='px-20'>                     
            <p className='text-light text-3xl text-center'>Whatever your project: sale, exchange, rental</p>
            <p className='text-light text-3xl text-center'>Looking for: Land, Agricultural Land, Apartment, House, Bungalow !</p>
            <p className='text-light text-3xl text-center'>you are in the right place, consult now</p>
        </div>
    </div>
  )
}

export default Description