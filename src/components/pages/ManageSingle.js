import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ManageSingle = () => {
    const toastConfig = {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    }
    const { id } = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getSingleProduct = async () => {
            const { data } = await axios.get(`http://localhost:5000/product/${id}`)
            setProduct(data)
        }
        getSingleProduct()
    }, [id])
    const { name, img, description, price, quantity, supplier } = product
    const [currentQuantity, setCurrentQuantity] = useState(quantity)
    useEffect(() => {
        setCurrentQuantity(quantity)
    }, [quantity])
    const handleDeliver = async () => {
        setCurrentQuantity(currentQuantity - 1)
        const newQuantity = currentQuantity - 1
        const { data } = await axios.put(`http://localhost:5000/updateproduct?newQuantity=${newQuantity}&id=${id}`)
        if (data?.acknowledged) {
            toast.success('Delivered Successfully', toastConfig)
        }
    }
    return (
        <div style={{ minHeight: '600px' }}>
            <div className="flex items-center flex-col-reverse md:flex-row">
                <div className="w-1/2 text-xl text-center">
                    <p className="font-bold">Name:{name}</p>
                    <p className="font-bold">Price: ${price}</p>
                    {
                        currentQuantity > 0
                            ?
                            <p className="font-bold text-xl">Quantity : {currentQuantity}</p>
                            :
                            <p className="font-bold text-xl text-red-500">Out of Stock</p>
                    }
                    <p className="font-bold">Supplier: {supplier}</p>
                    <button className="p-3 bg-yellow-400 my-3" onClick={handleDeliver}>Delivered</button>
                </div>
                <div className="flex justify-center item-center w-1/2">
                    <div className="text-center">
                        <p className="font-bold">Product Id : {id}</p>
                        <img src={img} alt="" />
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <div>
                    <h1 className="text-center text-3xl">Wanna Stock This Item?</h1>
                    <div className="flex justify-center">
                        <form>
                            <input type="number" className="border-black bg-gray-300 p-3" placeholder='Quantity' />
                            <button className="p-3 bg-blue-500">Stock</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSingle;