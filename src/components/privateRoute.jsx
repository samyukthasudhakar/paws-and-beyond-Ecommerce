import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context'

const PrivateRoute = () => {
    const { authState:{isLoggedIn} } = useAuth()
    return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}

export { PrivateRoute }