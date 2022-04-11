import React from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import auth from '../../Firebase/firebase.init'
import { useState } from 'react';


const googleProvider = new GoogleAuthProvider()


const UseFirebase = () => {

    const [user, setUser] = useState({})

    const googleSIgnin = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
    }

    const handleSingOut = () => {

        signOut(auth)

    }

    return { googleSIgnin, handleSingOut }
};

export default UseFirebase;