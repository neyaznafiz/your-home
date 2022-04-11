import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import auth from '../../Firebase/firebase.init'

const googleProvider = new GoogleAuthProvider()
const UseFirebase = () => {

    const googleSIgnin = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {

            })
    }

    return {googleSIgnin}
};

export default UseFirebase;