import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';
import UseFirebase from '../UseFirebase/UseFirebase';

const Header = () => {

    // const [user] = UseFirebase(auth)
    // console.log(user);

    return (
        <nav className='bg-gray-400 py-5 px-20'>

            <div className='lg:flex md:flex lg:justify-between md:justify-between '>
                <div>
                    <h2 className='border-2 border-gray-500  py-1 px-3 rounded'>YOUR HOME</h2>
                </div>

                <div className=''>
                    <Link className='ml-6' to='/'>Home</Link>
                    <Link className='ml-6' to='/rooms'>Rooms</Link>
                    <Link className='ml-6' to='/checkout'>Checkout</Link>

                    {/* {
                        user ?
                            <Link to="/">Logout</Link>
                            :
                        } */}
                        <Link className='ml-6' to='/login'>Login</Link>
                </div>
            </div>

        </nav>
    );
};

export default Header;