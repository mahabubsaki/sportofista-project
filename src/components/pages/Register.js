import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'

const Register = () => {
    const handleRegisterForm = e => {
        e.preventDefault();
    }
    return (
        <div style={{ minHeight: '600px' }} className="flex justify-center items-center">
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl text-center mb-3">Register</h1>
                <form onSubmit={handleRegisterForm}>
                    <input type="text" name="name" className='bg-gray-200 p-3 w-3/4 block mx-auto my-2' placeholder="Name" /> <br />
                    <input type="email" name="email" className='bg-gray-200 p-3 w-3/4 block mx-auto' placeholder="Email" /> <br />
                    <input type="password" name="password" className='bg-gray-200 p-3 my-2 w-3/4 block mx-auto' placeholder="Password" /> <br />
                    <input type="password" name="confirm" className='bg-gray-200 p-3 mb-2 w-3/4 block mx-auto' placeholder="Confirm Password" /> <br />
                    <button type="submit" className="bg-blue-500 w-1/2 mx-auto block p-3">Register</button>
                </form>
                <p className="text-center">or</p>
                <p className="text-center my-2">Already have an account? <Link to="/login" className='text-green-500'>Login</Link></p>
                <button className="bg-blue-500 w-1/2 mx-auto block p-3">
                    <FcGoogle className="inline mx-2"></FcGoogle>
                    <span>Continue With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Register;