import React from 'react'
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { Input } from 'postcss';
import { Navigate } from 'react-router-dom';

function SignIn() {
  
    return (
        <div className='flex justify-center   pt-64'>
        <GoogleLogin>
        
            onSuccess={credentialResponse => {
                console.log(credentialResponse.credential);
                var decoded = jwt_decode(credentialResponse.credential);
                console.log(decoded);
            }}
            onError={() => {
                console.log('Login Failed');
            }}
            <Navigate to="/user" replce={true} />
            
        </GoogleLogin>
    </div>
    );
}

export default SignIn ;

