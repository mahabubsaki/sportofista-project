import axios from 'axios';
import React from 'react';

const Add = () => {
    const handleAddProduct = async (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const img = e.target.link.value
        const description = e.target.description.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        const supplier = e.target.supplier.value
        const newProduct = { name, img, description, price: parseInt(price), quantity: parseInt(quantity), supplier }
        const { data } = await axios.post('http://localhost:5000/addproduct', newProduct)
        e.target.reset()
    }
    return (
        <div style={{ minHeight: '600px' }} className="flex justify-center items-center">
            <div className="w-3/4">
                <h1 className="text-center text-3xl my-3">Add a Product</h1>
                <form onSubmit={handleAddProduct}>
                    <input type="text" name="name" placeholder="Product Name" className="bg-gray-200 p-3 w-full block mx-auto mb-3" required />
                    <input type="text" name="link" placeholder="Image Url" className="bg-gray-200 p-3 w-full block mx-auto mb-3" required />
                    <textarea type="text" name="description" placeholder="Product Description" className="bg-gray-200 p-3 w-full block mx-auto mb-3" rows="10" style={{ resize: "none" }} required></textarea>
                    <input type="number" name="price" placeholder="Product Price" className="bg-gray-200 p-3 w-full block mx-auto mb-3" required />
                    <input type="number" name="quantity" placeholder="Product Quantity" className="bg-gray-200 p-3 w-full block mx-auto mb-3" required />
                    <input type="text" name="supplier" placeholder="Product Supplier" className="bg-gray-200 p-3 w-full block mx-auto mb-3" required />
                    <div className="flex justify-center">
                        <button type="submit" className="p-3 bg-blue-500">Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Add;