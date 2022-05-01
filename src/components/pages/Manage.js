import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useProducts from '../hooks/useProducts';
import Product from '../part-component/Product';
import Loading from '../utilities/Loading';

const Manage = () => {
    const [user, loading] = useAuthState(auth)
    const [products] = useProducts('manage')
    if (loading) {
        <Loading></Loading>
    }
    return (
        <div style={{ minHeight: '600px' }}>
            <div className="flex justify-between w-3/4 mx-auto mt-2 items-center">
                <Link to="/add" className="text-xl block text-center text- text-green-500">Add an item to Inventory</Link>
                <button className="p-3 bg-green-500">Add</button>
            </div>
            <p className="text-center text-2xl">Currently Stocked {products?.length} Itmes</p>
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2">
                {products.map(product => <Product product={product} key={product._id} route="Manage">
                </Product>)}
            </div>
        </div>
    );
};

export default Manage;