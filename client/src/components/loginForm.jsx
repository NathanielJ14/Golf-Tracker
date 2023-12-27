import React from 'react';

const LoginForm = () => {
    return (
        <div className='d-flex text-white bgAuth'>
            <div className='container d-flex w-50 h-100 mx-auto flex-column'>
                <h1 className='text-center mt-4'>Login</h1>
                <div className='container mt-3 formBg'>
                    <form>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" class="btn btn-success">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
