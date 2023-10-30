import { Navigate } from 'react-router-dom';
import { Context } from '../context/AuthContext';
import { useContext, useEffect, useState } from 'react';

function PrivateRoute({ children }) {
    const { authenticated } = useContext(Context);
    const context = useContext(Context)

    console.log(authenticated +"123", context)

    if (!authenticated) {
        return <Navigate to="/auth/login"  />;
    }

    return children
}

export default PrivateRoute;