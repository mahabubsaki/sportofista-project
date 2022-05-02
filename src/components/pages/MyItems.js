import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Product from '../part-component/Product';

const MyItems = () => {
    const toastConfig = {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    const navigate = useNavigate()
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([])
    useEffect(() => {
        const verify = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/check?email=${user.email}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('access_token')}`
                    }
                })
                return response
            }
            catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    localStorage.removeItem('access_token')
                    signOut(auth)
                    navigate('/login')
                    toast.error('Something went wrong', toastConfig)
                }
            }
        }
        const getMyProducts = async () => {
            const { data } = await axios.get(`http://localhost:5000/myproducts?email=${user.email}`)
            setMyProducts(data)
        }
        verify()
        getMyProducts()
    }, [user])

    const handleDelete = async (id) => {
        const ask = window.confirm('Are you sure you want to delete this product')
        if (ask) {
            const { data } = await axios.delete(`http://localhost:5000/deleteproduct?id=${id}`)
            if (data.acknowledged) {
                const updatedProducts = myProducts.filter(product => product._id !== id)
                setMyProducts(updatedProducts)
                toast.success('Deleted Product Successfully', toastConfig)
            }
        }
    }
    return (
        <div style={{ minHeight: '600px' }}>
            <h1 className="text-2xl text-center">You have currently added {myProducts.length} items</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2">
                {myProducts.map(product => <Product product={product} key={product._id} route="Manage" handleDelete={handleDelete}>
                </Product>)}
            </div>
        </div>
    );
};

export default MyItems;