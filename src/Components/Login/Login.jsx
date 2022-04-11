import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import UseFirebase from '../UseFirebase/UseFirebase';



const Login = () => {

    const {googleSIgnin}=UseFirebase()

    return (
        <div>
            

            <button onClick={googleSIgnin} className='flex mx-auto border rounded-md py-2 px-4 text-xl text-gray800 font-semibold hover:bg-gray-300 hover:text-gray-700'><FcGoogle className='mt-1 mr-2'></FcGoogle> Continue with google</button>
        </div>
    );
};

export default Login;