import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const ContextProvider = ({children}) => {

    const [ user , setUser] = useState (null);
    const [ loading , setLoading] = useState (true);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword (auth, email, password);
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut (auth);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged (auth, (currentUser) =>{
            setUser(currentUser);
            setLoading(false);
        });

        return (() => {
            unsubscribe ();
        });

    },[])


    const userInfo = {
        createUser,
        signIn,
        user,
        loading,
        signOutUser
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextProvider;