import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product, route, handleDelete }) => {
    const navigate = useNavigate()
    const { name, img, description, price, quantity, supplier, _id } = product
    return (
        <div className="bg-slate-400 text-center p-2 rounded-lg flex flex-col">
            <p>Item id : {_id}</p>
            <h1 className="text-3xl my-3">{name}</h1>
            <div className="flex justify-center">
                <img src={img} alt="" className="w-1/2" />
            </div>
            <p className="my-3" style={{ wordWrap: 'break-word' }}>{description}</p>
            <p className="font-bold text-xl">Price : {price}</p>
            {
                quantity > 0
                    ?
                    <p className="font-bold text-xl">Quantity : {quantity}</p>
                    :
                    <p className="font-bold text-xl text-red-500">Out of Stock</p>
            }
            <p className="font-bold text-xl">Supplier : {supplier}</p>
            {route === "Manage" && <div className="w-1/2 mx-auto h-full flex justify-end flex-col">
                <button className="px-3 py-2 bg-blue-500" onClick={() => navigate(_id)}>Update</button><br />
                <button className="px-3 py-2 bg-red-500 mt-2" onClick={() => handleDelete(_id)}>Delete</button>
            </div>}
        </div>
    );
};

export default Product;