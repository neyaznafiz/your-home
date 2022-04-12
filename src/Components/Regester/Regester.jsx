import React from 'react';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FcGoogle } from 'react-icons/fc';
import { SiTwitter } from 'react-icons/si';
import { BsArrowBarLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import UseFirebase from '../UseFirebase/UseFirebase';

const Regester = () => {

    const { googleSIgnin, twitterSignin, } = UseFirebase()


    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        // error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault()

        if (error) {
            return <p>Error: {error.message}</p>
        }

        if (loading) {
            return <p>Loading...</p>
        }

        if (password.length < 6) {
            setError('Your password short. Password must be 6 chracters or longer')
            return
        }

        if (password !== confirmPassword) {
            setError('Your two password did not match')
            return
        }


        createUserWithEmailAndPassword(email, password,)

        console.log(user);

    }

    return (
        <div className=''>


            <div className='border rounded-md w-fit mx-auto my-10 bg-purple-200'>

            <div className='mt-3'>
            <Link to="/login" className='flex mx-5 font-semibold font-mono hover:text-lg '> <BsArrowBarLeft className='mt-1 mr-1'></BsArrowBarLeft> BACK</Link>
            </div>

                <h2 className='font-bold text-3xl text-center pt-10 font-serif'>Regester here</h2>

                <hr className='w-52 mx-auto mt-2' />
                <form className=' w-max px-20 pt-6 mx-auto'>

                    <div className='grid'>
                        <label htmlFor="email" className='font-semibold '>Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" className='rounded px-1 bg-purple-100 h-8' required />
                    </div>

                    <div className='grid mt-5'>
                        <label htmlFor="password" className='font-semibold'>Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" className='rounded px-1 bg-purple-100 h-8' required />
                    </div>

                    <div className='grid mt-5'>
                        <label htmlFor="confirm-password" className='font-semibold'>Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" className='rounded px-1 bg-purple-100 h-8' required />
                    </div>


                </form>

                <input onClick={handleCreateUser} className='border rounded-md flex mx-auto my-5 py-1 px-4 text-lg text-gray800 font-semibold hover:bg-purple-300 hover:text-gray-700' type="submit" value="Regester" />


                <div className=''>
                    <button onClick={googleSIgnin} className='flex mx-auto border rounded-md my-5 py-2 px-4 text-lg text-gray800 font-semibold hover:bg-purple-300 hover:text-gray-700'><FcGoogle className='mt-1 mr-2'></FcGoogle> Continue with google</button>

                    <button onClick={twitterSignin} className='flex mx-auto border rounded-md my-5 py-2 px-4 text-lg text-gray800 font-semibold hover:bg-purple-300 hover:text-gray-700'> <SiTwitter className='mt-1 mr-2'></SiTwitter> Continue with Twitter</button>
                </div>
            </div>

        </div>
    );
};

export default Regester;