import React from 'react';
import Navbar from '../../components/navbar';
import DashboardGame from '../../components/dashboardGame';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='text-white container'>
                <h1 className='mt-4'>Your Username</h1>
            </div>
            <DashboardGame />
        </div>
    )
};

export default Dashboard;