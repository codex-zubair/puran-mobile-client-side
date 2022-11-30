import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuthContext } from '../Context/UserContext/UserContext';

const PrivateRoute = ({children}) => {

    const {user} = useContext(userAuthContext);

    const location = useLocation();

    return (
        user?
            <div>
            {children}
        </div>:
        <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    );
};

export default PrivateRoute;