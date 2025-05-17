import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoot = ({children}) => {

    const {user, loading} = useContext (AuthContext);
    const location = useLocation ();

    if(loading){
        return <span className="loading loading-spinner loading-xl"></span>
    };

    if(!user){
        return <Navigate state={location.pathname} to="/sign-in"></Navigate>
    }


    return children ;
};

export default PrivateRoot;