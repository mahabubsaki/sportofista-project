import React from 'react';

const Product = ({ product, children }) => {
    const { name, img, description, price, quantity, supplier } = product
    return (
        <div className="bg-slate-400 text-center">
            <h1 className="text-3xl my-3">{name}</h1>
            <img src={img} alt="" />
            <p>{description}</p>
            <p className="font-bold text-xl">Price : {price}</p>
            <p className="font-bold text-xl">Quantity : {quantity}</p>
            <p className="font-bold text-xl">Supplier
                : {supplier === 0 ? 'Out of Stock' : supplier}</p>
            {children && children}
        </div>
    );
};

export default Product;