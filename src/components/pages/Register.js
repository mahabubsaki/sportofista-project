import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { toast } from 'react-toastify';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../utilities/Loading';
import axios from 'axios';

const Register = () => {
    const toastConfig = {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const handleRegisterForm = async (e) => {
        e.preventDefault();
        if (password.length < 8) {
            toast.error('Password Length must be at least 8 characters', toastConfig)
            return
        }
        if (password !== confirm) {
            toast.error('Connfirm Password does not match', toastConfig)
            return
        }
        await createUserWithEmailAndPassword(email, password)
    }
    useEffect(() => {
        if (user || user1) {
            if (user?.user?.uid) {
                async function updateName() {
                    await updateProfile({ displayName: name })
                }
                updateName()
                const verify = async () => {
                    await sendEmailVerification()
                    toast.success('Email Verification sent', toastConfig)
                }
                verify()
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
            navigate('/')
        }
    }, [user, user1])
    useEffect(() => {
        if (error?.message) {
            toast.error(error.message, toastConfig)
        }
        else if (error1?.message) {
            toast.error(error.message, toastConfig)
        }
    }, [error, error1])
    if (loading || loading1 || updating || sending) {
        return <Loading></Loading>
    }
    return (
        <div style={{ minHeight: '600px' }} className="flex justify-center items-center">
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl text-center mb-3">Register</h1>
                <form onSubmit={handleRegisterForm}>
                    <input type="text" name="name" className='bg-gray-200 p-3 w-3/4 block mx-auto my-2' placeholder="Name" required onChange={(e) => setName(e.target.value)} /> <br />
                    <input type="email" name="email" className='bg-gray-200 p-3 w-3/4 block mx-auto' placeholder="Email" required onChange={(e) => setEmail(e.target.value)} /> <br />
                    <input type="password" name="password" className='bg-gray-200 p-3 my-2 w-3/4 block mx-auto' placeholder="Password" required onChange={(e) => setPassword(e.target.value)} /> <br />
                    <input type="password" name="confirm" className='bg-gray-200 p-3 mb-2 w-3/4 block mx-auto' placeholder="Confirm Password" required onChange={(e) => setConfirm(e.target.value)} /> <br />
                    <button type="submit" className="bg-blue-500 w-1/2 mx-auto block p-3">Register</button>
                </form>
                <p className="text-center">or</p>
                <p className="text-center my-2">Already have an account? <Link to="/login" className='text-green-500'>Login</Link></p>
                <button className="bg-blue-500 w-1/2 mx-auto block p-3" onClick={() => signInWithGoogle()}>
                    <FcGoogle className="inline mx-2"></FcGoogle>
                    <span>Continue With Google</span>
                </button>
            </div>
        </div>
    );
};

export default Register;