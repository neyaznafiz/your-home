import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { SiTwitter } from 'react-icons/si';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import UseFirebase from '../UseFirebase/UseFirebase';



const Login = () => {

    // const [user] = useAuthState(auth)

    // const navigate = useNavigate()

    // if (user) {
    //     console.log(user);
    //     navigate(from, {replace: true})
    // }

    const { googleSIgnin, twitterSignin } = UseFirebase()

    return (
        <div>
            <div className='border rounded-md w-fit mx-auto my-10 bg-purple-200'>

                <h2 className='font-bold text-3xl text-center pt-10 font-serif'>Login</h2>

                <hr className='w-44 mx-auto mt-2' />
                <form className=' w-max px-20 pt-6 mx-auto'>

                    <div className='grid'>
                        <label htmlFor="email" className='font-semibold '>Email</label>
                        <input type="email" name="email" id="" className='rounded px-1 bg-purple-100 h-8' required />
                    </div>

                    <div className='grid mt-5'>
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <input type="password" name="password" id="" className='rounded px-1 bg-purple-100 h-8' required />
                    </div>

                    <input className='border rounded-md my-5 py-1 px-4 text-lg text-gray800 font-semibold hover:bg-purple-300 hover:text-gray-700' type="submit" value="Login" />

                </form>

               

                <div className=''>
                    <button onClick={googleSIgnin} className='flex mx-auto border rounded-md my-3 py-2 px-4 text-lg text-gray800 font-semibold hover:bg-purple-300 hover:text-gray-700'><FcGoogle className='mt-1 mr-2'></FcGoogle> Continue with google</button>


                    <button onClick={twitterSignin} className='flex mx-auto border rounded-md my-2 py-2 px-4 text-lg text-gray800 font-semibold hover:bg-purple-300 hover:text-gray-700'> <SiTwitter className='mt-1 mr-2'></SiTwitter> Continue with Twitter</button>

                    <p className='text-center text-md font-semibold my-5 border-b-4 border-black mx-10 pb-1'>
                    Are you new here ? <Link to='/regester' className='font-bold border-b-4 px-2  hover:border-black'>Regester</Link>
                </p>
                </div>
            </div>
        </div>
    );
};

export default Login;