import { createContext } from "react";
import React from 'react';
import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, getAuth } from "firebase/auth";

import { app } from '../../Firebase/Firebase_setup';




// Auth Context For whole project.
export const userAuthContext = createContext();


const auth = getAuth(app);


// User context component for app globally.
const UserContext = ({ children }) => {


    // Data Loader For Loading Data Properly
    const [loader, setLoader] = useState(true);





    // Google Login provider
    const googleProvider = new GoogleAuthProvider();


    // Git hub Provider
    const githubProvider = new GithubAuthProvider();



    // Set user state.  
    const [user, setUser] = useState({});





    // sign up with email address.
    const signUpByEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // Set User name and photo
    const setUserNameAndPhoto = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: `${name}`
        })
    }



    // Sign up By Google.
    const signUpByGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }






    // login  by Email password
    const loginByEmail = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password);

    }




    // Sign out Current USer.
    const logout = () => {
        signOut(auth).then(() => {
            console.log("sign out Success Full")
        }).catch((error) => {
            console.log(error);
        });
    }





    // IF loader is true
    if (loader) {
        // Current user state
        onAuthStateChanged(auth, (CurrentUser) => {
            setUser(CurrentUser);

        });
    }












    // Set user info pro providing object.
    const info = { user, loginByEmail, signUpByEmail, setUserNameAndPhoto, logout, setLoader, signUpByGoogle }





    return (
        <userAuthContext.Provider value={info}>
            {children}
        </userAuthContext.Provider>


    );
};

export default UserContext;