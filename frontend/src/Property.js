import React from 'react'
import Group1 from './Group 19.png'
import Group2 from './Group 20.png'
import Group3 from './Group 21.png'
import Group4 from './Group 22.png'
import Group5 from './Group 23.png'
import { useNavigate } from 'react-router-dom';


function Property() {

const navigate = useNavigate();

const handelClick = () => {

    navigate('/apartement');

  }

  return (
    <div className='flex flex-col mt-8 gap-10 justify-center items-center'>

        <div className='flex flex-col gap-8 justify-center items-center'>
            <h1 className='text-green text-5xl'>Featured Property Types</h1>
            <h2 className='text-gris text-xl'>Find all Type of Property</h2>
        </div>
        
        <div className='grid grid-cols-2 gap-24 lg:grid-cols-4 xl:grid-cols-5 '>
            <div className='flex flex-col justify-center items-center rounded-xl bg-light px-4 py-2 shadow-2xl'>
                <div className='bg-greenlight p-6 rounded-full'>
                    <img  src={Group1}/>
                </div>
                <h2 className='text-center text-xl text-dark'>Family House</h2>
                <p className='text-center text-sm text-gris'>400 propperty</p>
            </div> 

            <div className='flex flex-col justify-center items-center rounded-xl bg-light px-4 py-2 shadow-2xl'>
                <div className='bg-bleulight p-6 rounded-full'>
                    <img  src={Group2}/>
                </div>
                <h2 className='text-center text-xl text-dark'>House & Villa</h2>
                <p className='text-center text-sm text-gris'>400 propperty</p>
            </div>
            
            <button onClick={handelClick}>
                <div className='flex flex-col justify-center items-center rounded-xl bg-light px-4 py-2 shadow-2xl'>
                    <div className='bg-purplelight p-6 rounded-full'>
                        <img  src={Group3}/>
                    </div>
                    <h2 className='text-center text-xl text-dark'>Apartement</h2>
                    <p className='text-center text-sm text-gris'>400 propperty</p>
                 </div>
            </button>

            <div className='flex flex-col justify-center items-center rounded-xl bg-light px-4 py-2 shadow-2xl'>
                <div className='bg-redlight p-6 rounded-full'>
                    <img  src={Group4}/>
                </div>
                <h2 className='text-center text-xl text-dark'>Office & Studio</h2>
                <p className='text-center text-sm text-gris'>400 propperty</p>
            </div>

            <div className='flex flex-col justify-center items-center rounded-xl bg-light px-4 py-2 shadow-2xl'>
                <div className='bg-yellowlight p-6 rounded-full'>
                    <img src={Group5}/>    
                </div>
                <h2 className='text-center text-xl text-dark'>Villa & Condo</h2>
                <p className='text-center text-sm text-gris'>400 propperty</p>
            </div>
        </div>
    </div>
  )
}

export default Property