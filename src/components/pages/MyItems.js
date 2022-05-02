import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useProducts from '../hooks/useProducts';
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
    const [user] = useAuthState(auth)
    const [myProducts, setMyProducts] = useState([])
    useEffect(() => {
        const getMyProducts = async () => {
            const { data } = await axios.get(`http://localhost:5000/myproducts?email=${user.email}`)
            setMyProducts(data)
        }
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