import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    const handleLoginForm = (e) => {
        e.preventDefault();
    }
    return (
        <div style={{ minHeight: '600px' }} className="flex justify-center items-center">
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl text-center mb-3">Login</h1>
                <form onSubmit={handleLoginForm}>
                    <input type="email" name="email" className='bg-gray-200 p-3 w-3/4 block mx-auto' placeholder="Email" /> <br />
                    <input type="password" name="password" className='bg-gray-200 p-3 my-2 w-3/4 block mx-auto' placeholder="Password" /> <br />
                    <button type="submit" className="bg-blue-500 w-1/2 mx-auto block p-3">Login</button>
                </form>
                <p className="text-center">or</p>
                <p className="text-center my-2">New user? <Link to="/register" className='text-green-500'>Register Now</Link></p>
                <button className="bg-blue-500 w-1/2 mx-auto block p-3">
                    <FcGoogle className="inline mx-2"></FcGoogle>
                    <span>Continue With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;