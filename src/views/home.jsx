import React from 'react';
import '../../public/stylesheets/home.css';

const Home = () => {
    return (
        <div className="d-flex text-center text-white">
            <div className="cover-container d-flex w-100 h-100 p-4 mx-auto flex-column">
                <header className="mb-5">
                    <div>
                        <nav className="nav nav-masthead justify-content-center float-md-right">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            <a className="nav-link" href="/dashboard">Dashboard</a>
                            <a className="nav-link" href="/newgame">New Game</a>
                            <a className="nav-link" href="/login">Login</a>
                            <a className="nav-link" href="/register">Register</a>
                        </nav>
                    </div>
                </header>

                <main className="px-3 mt-5 mb-5">
                    <h1>Golf Tracker</h1>
                    <p className="lead"> Welcome to Golf Tracker! <br /> Here you can see created campground as well as create your own. You can also leave reviews on other campgrounds.</p>
                    <a href="/register" className="btn btn-lg font-weight-bold button m-5">Register</a>
                    <a href="/login" className="btn btn-lg font-weight-bold button m-5">Login</a>
                </main>
            </div>
        </div>
    );
};

export default Home;
