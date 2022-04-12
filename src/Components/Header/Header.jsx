import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import UseFirebase from '../UseFirebase/UseFirebase';
import CoustomLink from '../CoustomLink/CoustomLink';

const Header = () => {

    const [user] = useAuthState(auth)
    const {handleSingOut} = UseFirebase()

    return (
        <nav className='bg-violet-100 py-5 px-20'>

            <div className='lg:flex md:flex lg:justify-between md:justify-between '>
                <div>
                    <h2 className='border-l-4 border-black  py-1 px-3 text-xl font-semibold font-serif'>YOUR HOME</h2>
                </div>

                <div className='flex font-semibold font-serif'>
                    <CoustomLink className='ml-6' to='/'>Home</CoustomLink>
                    <CoustomLink className='ml-6' to='/rooms'>Rooms</CoustomLink>
                    <CoustomLink className='ml-6' to='/checkout'>Checkout</CoustomLink>

                    {
                        user ?
                            <CoustomLink to="/" className='ml-6' onClick={handleSingOut}>Logout</CoustomLink>
                            :
                        <CoustomLink className='ml-6' to='/login'>Login</CoustomLink>
                        }
                </div>
            </div>

        </nav>
    );
};

export default Header;