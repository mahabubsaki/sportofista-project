import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useProducts from '../hooks/useProducts';
import Product from '../part-component/Product';

const Manage = () => {
    const toastConfig = {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    const [products, setProducts] = useProducts('manage')
    const navigate = useNavigate()
    const handleDelete = async (id) => {
        const ask = window.confirm('Are you sure you want to delete this product')
        if (ask) {
            const { data } = await axios.delete(`http://localhost:5000/deleteproduct?id=${id}`)
            if (data.acknowledged) {
                const updatedProducts = products.filter(product => product._id !== id)
                setProducts(updatedProducts)
                toast.success('Deleted Product Successfully', toastConfig)
            }
        }
    }
    return (
        <div style={{ minHeight: '600px' }}>
            <div className="flex justify-between w-3/4 mx-auto mt-2 items-center">
                <Link to="/add" className="text-xl block text-center text- text-green-500">Add an item to Inventory</Link>
                <button className="p-3 bg-green-500" onClick={() => navigate('/add')}>Add</button>
            </div>
            <p className="text-center text-2xl">Currently Stocked {products?.length} Itmes</p>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2">
                {products.map(product => <Product product={product} key={product._id} route="Manage" handleDelete={handleDelete}>
                </Product>)}
            </div>
        </div>
    );
};

export default Manage;