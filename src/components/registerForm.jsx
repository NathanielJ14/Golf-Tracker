import React from 'react';
import '../../public/stylesheets/user.css';

const RegisterForm = () => {
    return (
        <div className='d-flex text-white bg-dark bgAuth'>
            <div className='container d-flex w-50 h-100 mx-auto flex-column'>
                <h1 className='text-center mt-4'>Create an account</h1>
                <div className='container mt-3 formBg'>
                    <form>
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control" id="username" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-success">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
