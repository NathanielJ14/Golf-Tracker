import React from 'react';
import '../../public/stylesheets/dashboard.css';

const DashboardGame = () => {
    return (
        <div className='text-white row dashboardGame'>
            <div className='col'>
                <div className="card">
                    <div className="card-body">
                        <h5 class="card-title title">Project</h5>
                        <hr />
                        <a href="" class="btn btn-success">Github</a>
                        <a href="" class="btn btn-success">Deployment</a>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className="card">
                    <div className="card-body">
                        <h5 class="card-title title">Project</h5>
                        <hr />
                        <a href="" class="btn btn-success">Github</a>
                        <a href="" class="btn btn-success">Deployment</a>
                    </div>
                </div>
            </div>
            <div className='col'>
                <div className="card">
                    <div className="card-body">
                        <h5 class="card-title title">Project</h5>
                        <hr />
                        <a href="" class="btn btn-success">Github</a>
                        <a href="" class="btn btn-success">Deployment</a>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default DashboardGame;