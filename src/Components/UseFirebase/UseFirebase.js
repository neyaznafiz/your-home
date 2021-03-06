import React from 'react';
import { GoogleAuthProvider, signInWithPopup, signOut, TwitterAuthProvider } from 'firebase/auth'
import auth from '../../Firebase/firebase.init'
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';


const googleProvider = new GoogleAuthProvider()
const twitterProvider = new TwitterAuthProvider()


const UseFirebase = () => {

   

    const [user, setUser] = useState(auth)


    const handleCreateUser = event => {
        event.preventDefault()
    }

    const googleSIgnin = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(error => {
                alert(error)
            })
    }

    const twitterSignin = () => {
        signInWithPopup(auth, twitterProvider)
            .then(result => {
                const user = result.user
                setUser(user)
            })
            .catch(error => {
                alert(error)
            })
    }

    const handleSingOut = () => {

        signOut(auth)

    }

    return { googleSIgnin, twitterSignin, handleSingOut }
};

export default UseFirebase;