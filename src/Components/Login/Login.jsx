import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import UseFirebase from '../UseFirebase/UseFirebase';



const Login = () => {

    const { googleSIgnin, } = UseFirebase()

    return (
        <div>
            <div className='border rounded-md w-fit mx-auto my-10 bg-orange-300'>

                <h2 className='font-bold text-3xl text-center pt-10'>Login</h2>

                <hr className='w-44 mx-auto mt-2' />
                <form className=' w-max px-20 pt-6 mx-auto'>

                    <div className='grid'>
                        <label htmlFor="email" className='font-semibold '>Email</label>
                        <input type="email" name="email" id="" className='rounded px-1 bg-orange-200 h-8' />
                    </div>

                    <div className='grid mt-5'>
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <input type="password" name="password" id="" className='rounded px-1 bg-orange-200 h-8' />
                    </div>

                    <div className='grid mt-5'>
                        <label htmlFor="confirm-password" className='font-semibold'>Confirm Password</label>
                        <input type="password" name="confirm-password" id="" className='rounded px-1 bg-orange-200 h-8' />
                    </div>

                    <input className='border rounded-md my-5 py-1 px-4 text-xl text-gray800 font-semibold hover:bg-gray-300 hover:text-gray-700' type="submit" value="Login" />

                </form>

                <p className='text-center text-md font-semibold'>
                    Are you new here ? <Link to='/regester' className='font-bold border-b-4 px-2 hover:text-teal-800 hover:border-black'>Regester</Link>
                </p>

                <div className=''>
                    <button onClick={googleSIgnin} className='flex mx-auto border rounded-md my-5 py-2 px-4 text-xl text-gray800 font-semibold hover:bg-gray-300 hover:text-gray-700'><FcGoogle className='mt-1 mr-2'></FcGoogle> Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;