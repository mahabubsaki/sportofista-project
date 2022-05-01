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
    const handleUpdateStock = async (e) => {
        e.preventDefault()
        const inpuQuantity = e.target.quantity.value
        if (parseInt(inpuQuantity) <= 0 || isNaN(parseInt(inpuQuantity))) {
            toast.error('Invalid Stock Input Given', toastConfig)
            e.target.reset()
            return
        }
        const newQuantity = parseInt(currentQuantity) + parseInt(inpuQuantity)
        console.log(newQuantity);
        const { data } = await axios.put(`http://localhost:5000/updateproduct?newQuantity=${newQuantity}&id=${id}`)
        if (data?.acknowledged) {
            setCurrentQuantity(newQuantity)
            toast.success('Stocked Successfully', toastConfig)
        }
        e.target.reset()
    }
    const handleDeliver = async () => {
        const newQuantity = currentQuantity - 1
        const { data } = await axios.put(`http://localhost:5000/updateproduct?newQuantity=${newQuantity}&id=${id}`)
        if (data?.acknowledged) {
            setCurrentQuantity(newQuantity)
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
                    <div className="text-center w-full">
                        <p className="font-bold">Product Id : {id}</p>
                        <p style={{ wordWrap: 'break-word' }}>{description}</p>
                        <div className="flex justify-center">
                            <img src={img} alt="" width="300" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex justify-center">
                <div>
                    <h1 className="text-center text-3xl">Wanna Stock This Item?</h1>
                    <div className="flex justify-center">
                        <form onSubmit={handleUpdateStock}>
                            <input type="number" className="border-black bg-gray-300 p-3" name="quantity" placeholder='Quantity' />
                            <button className="p-3 bg-blue-500" type="submit">Stock</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageSingle;