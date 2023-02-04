import React from 'react'
import search from './search.png'

function Description2() {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('Filter.png')] h-1/2 p-1 gap-12 mt-20">
      <div className='text-light text-5xl text-center'>Search for your new dwelling</div>
      <div className='flex bg-dark w-4/5 justify-start rounded-xl px-4 py-2 text-light '>
        
        <div className='flex flex-col gap-4 w-1/4 justify-start items-start '>
          <h3 className='text-2xl text-light hover:text-green'>City</h3>
          <input className='px-2 py-1 w-4/5 text-dark rounded-lg' type='text' placeholder='Location' />
        </div>
        
        <div className='flex flex-col gap-4 w-1/4 justify-start items-start '>
          <h3 className='text-2xl text-light hover:text-green'>Town</h3>
          <input className='px-2 py-1 w-4/5 text-dark rounded-lg' type='text' placeholder='Town' />
          <div className='flex justify-center items-center  w-full pb-6'>
            <button className='flex justify-center bg-green items-center gap-3 py-1 px-2 rounded-lg '>
              <h3 className='text-2xl text-light'>Advance Filter</h3>
              <img width='20px' src={search}/>
            </button> 
          </div>         
        </div>
        
        <div className='flex flex-col gap-4 w-1/4 justify-start items-start '>
          <h3 className='text-2xl text-light hover:text-green'>Property Type</h3>
          <input className='px-2 py-1 w-4/5 text-dark rounded-lg' type='text' placeholder='Property Type' />
        </div>
        
        <div className='flex flex-col gap-4 w-1/4 justify-satrt items-start '>
          <h3 className='text-2xl text-light hover:text-green'>dates</h3>
          <input className='px-2 py-1 w-4/5 text-dark rounded-lg' type='text' placeholder='First Date' />
          <input className='px-2 py-1 w-4/5 text-dark rounded-lg' type='text' placeholder='Second Date' />
        </div>
      </div>
    </div>
  )
}

export default Description2