import React from 'react';
import '../../public/stylesheets/home.css';

const Home = () => {
    return (
        <div className="d-flex text-center text-white background">
            <div className="container d-flex w-100 h-100 p-4 mx-auto flex-column">
                <main className="px-3 mt-5 mb-5">
                    <h1 className='mt-5'>Golf Tracker</h1>
                    <p className="lead"> Welcome to Golf Tracker! <br /> Create an account or login to track your games, scores and more. </p>
                    <div className='account'>
                        <a href="/register" className="btn btn-lg font-weight-bold button mt-5 mb-3">Create an account</a>
                        <p className='fs-4'>Or</p>
                        <a href="/login" className="btn btn-lg font-weight-bold button ">Login</a>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;
