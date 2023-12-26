import React from 'react';
import Navbar from '../../components/navbar';
import DashboardGame from '../../components/dashboardGame';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className='text-white mx-4'>
                <h1 className='mt-2 mb-5'>Username's Dashboard</h1>
            </div>
            <DashboardGame />
        </div>
    )
};

export default Dashboard;