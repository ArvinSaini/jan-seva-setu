import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
    const { user } = useAuth();
    if (!user) {
        return <Navigate to="/login" />;
    }
    return (
        <div>Protected</div>
    );
};

export default Dashboard;