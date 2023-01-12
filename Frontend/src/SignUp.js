import React from 'react'
import {GoogleLogin} from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios"
import google from './google.png'

function SignUp() {
  
    const login = useGoogleLogin({
        onSuccess: async respose => {
            try {
                const res = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
                    headers: {
                        "Authorization": `Bearer ${respose.access_token}`
                    }
                })

                console.log(res.data)
            } catch (err) {
                console.log(err)

            }

        }
    });

    return (
        <div className='flex flex-col gap-5'>
            <button className='bg-dark flex justify-center items-center space-x-2 rounded-2xl px-4 py-4 hover:border-2 hover:border-light' onClick={login}>
                <div className='flex justify-center items-center'>
                    <img src={google} width="50px" />
                </div>
                <div className='flex justify-center items-center'>
                  <p className='text-light text-center text-3xl'>Continue with google</p>
                </div>
            </button> 
            <div className='flex justify-center items-center'>
              <GoogleLogin
                  onSuccess={credentialResponse => {
                  console.log(credentialResponse.credential);
                  var decoded = jwt_decode(credentialResponse.credential);
                  console.log(decoded)
              }}
                  onError={() => {
                  console.log('Login Failed');
              }}/>
            </div>
            
        </div>
    );
}

export default SignUp