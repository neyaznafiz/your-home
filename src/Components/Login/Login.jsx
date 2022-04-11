import React from 'react';



const Login = ({googleSIgnin}) => {

    

    return (
        <div>
            <button onClick={googleSIgnin} className='mt-7 border px-5 py-1.5 rounded-md bg-black text-white hover:bg-white hover:text-black'>Login with google</button>
        </div>
    );
};

export default Login;