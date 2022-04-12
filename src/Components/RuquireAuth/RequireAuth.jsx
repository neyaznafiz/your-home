import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate } from 'react-router-dom';
import auth from '../../Firebase/firebase.init';

const RequireAuth = ({children}) => {

const [user]= useAuthState(auth)

if(!user){
    return <Navigate to="/login" ></Navigate>
}

    return children
};

export default RequireAuth;