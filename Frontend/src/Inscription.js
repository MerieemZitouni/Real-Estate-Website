import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Nav from './Nav';
import Description from './Description';



function Inscription() {
    return (
        <div>
            <div className="flex flex-col h-screen">
              <Nav/>
              <div className='flex flex-col  h-full'>
                <Description />
                <div className='flex justify-center items-center  h-1/2'>
                    <Routes>
                        <Route path="/signup" element={<SignUp/>} />
                        <Route path="/login" element={<Login/>} />
                    </Routes>
                </div>
              </div>
            </div>
        </div>   
      );
}

export default Inscription