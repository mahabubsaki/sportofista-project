import React from 'react';
import useProducts from '../hooks/useProducts';
import Product from './Product';
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const HomeInventory = () => {
    const [products] = useProducts('home')
    const navigate = useNavigate()
    return (
        <div className="w-4/5 mx-auto my-4" id='mini-inventory'>
            <h1 className="text-center text-3xl mb-4">Inventory Status</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2">
                {products.map(product => <Product key={product._id} product={product}></Product>)}
            </div>
            <div className="flex justify-center mt-4">
                <button className="flex justify-center items-center bg-blue-400 p-4" onClick={() => navigate('/manage')}><span>Manage Inventory</span> <AiOutlineArrowRight className="ml-3"></AiOutlineArrowRight></button>
            </div>
        </div>
    );
};

export default HomeInventory;