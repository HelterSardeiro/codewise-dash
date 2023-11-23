import { Navigate } from 'react-router-dom';
import { Context } from '../context/AuthContext';
import { useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

function PrivateRoute({ children }) {
    const { authenticated } = useContext(Context);

    // if (!authenticated) {
    //     return <Navigate to="/auth/login" />;
    // }

    return children
}

export default PrivateRoute;