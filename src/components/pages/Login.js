import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../utilities/Loading';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
    const toastConfig = {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    let location = useLocation();
    let navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let from = location.state?.from?.pathname || "/";
    const handleLoginForm = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    const handleReset = async (e) => {
        if (!email) {
            toast.error('Please enter your email', toastConfig)
            return
        }
        await sendPasswordResetEmail(email)
        toast.info('Sent an password reset mail to given email address', toastConfig)
    }
    useEffect(() => {
        if (error?.message) {
            toast.error(error.message, toastConfig)
        }
        else if (error1?.message) {
            toast.error(error.message, toastConfig)
        }
    }, [error, error1])
    useEffect(() => {
        if (user || user1) {
            if (user) {
                const getAccessToken = async () => {
                    const email = user?.user?.email
                    const { data } = await axios.post('http://localhost:5000/enter', { email })
                    localStorage.setItem('access_token', data.accessToken)
                }
                getAccessToken()
            }
            if (user1) {
                const getAccessToken = async () => {
                    const email = user1?.user?.email
                    const { data } = await axios.post('http://localhost:5000/enter', { email })
                    localStorage.setItem('access_token', data.accessToken)
                }
                getAccessToken()
            }
            navigate(from, { replace: true });
        }
    }, [user, user1])
    if (loading || loading1 || sending) {
        return <Loading></Loading>
    }
    return (
        <div style={{ minHeight: '600px' }} className="flex justify-center items-center">
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl text-center mb-3">Login</h1>
                <form onSubmit={handleLoginForm}>
                    <input type="email" name="email" className='bg-gray-200 p-3 w-3/4 block mx-auto' placeholder="Email" onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type="password" name="password" className='bg-gray-200 p-3 my-2 w-3/4 block mx-auto' placeholder="Password" onChange={(e) => setPassword(e.target.value)} /> <br />
                    <button type="submit" className="bg-blue-500 w-1/2 mx-auto block p-3">Login</button>
                </form>
                <button className="block mx-auto text-red-500 my-3" onClick={handleReset}>Forget Password?</button>
                <p className="text-center">or</p>
                <p className="text-center my-2">New user? <Link to="/register" className='text-green-500'>Register Now</Link></p>
                <button className="bg-blue-500 w-1/2 mx-auto block p-3" onClick={() => signInWithGoogle()}>
                    <FcGoogle className="inline mx-2"></FcGoogle>
                    <span>Continue With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;