import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequiredAuth = ({children}) => {
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <div></div>
    }
    else if(user){
        return children;
    }
    else{
        return <Navigate to='/login' state={{from:location}} replace/>
    }
};

export default RequiredAuth;