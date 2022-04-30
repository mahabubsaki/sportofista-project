import React from 'react';
import { MdOutlineAirplanemodeActive, MdSecurity } from 'react-icons/md'
import { BiInfinite, BiGift } from 'react-icons/bi'
import { VscSync } from 'react-icons/vsc'

const Feature = () => {
    return (
        <div className="grid mt-4 w-4/5 mx-auto md:grid-cols-3 grid-cols-1 gap-1">
            <div className="border">
                <div className="p-3 border border-gray-300 flex justify-center"><MdOutlineAirplanemodeActive className="text-3xl text-blue-700"></MdOutlineAirplanemodeActive></div>
                <h1 className="text-center font-bold text-xl my-2">Free Shiping</h1>
                <p className="text-center px-2">Shipping is totally free here. Make sure your desired item information is correct.</p>
            </div>
            <div className="border">
                <div className="p-3 border border-gray-300 flex justify-center"><MdSecurity className="text-3xl text-blue-700"></MdSecurity></div>
                <h1 className="text-center font-bold text-xl my-2">Secured Shiping</h1>
                <p className="text-center px-2">Your shipping item will be secured to us. We have some additional sec protection both offline and online.</p>
            </div>
            <div className="border">
                <div className="p-3 border border-gray-300 flex justify-center"><BiInfinite className="text-3xl text-blue-700"></BiInfinite></div>
                <h1 className="text-center font-bold text-xl my-2">Unlimited Gear</h1>
                <p className="text-center">You can stock here unlimited gear.</p>
            </div>
            <div className="border">
                <div className="p-3 border border-gray-300 flex justify-center"><VscSync className="text-3xl text-blue-700"></VscSync></div>
                <h1 className="text-center font-bold text-xl my-2">Free Return</h1>
                <p className="text-center">You can return delivered item anytime.</p>
            </div>
            <div className="border">
                <div className="p-3 border border-gray-300 flex justify-center"><BiGift className="text-3xl text-blue-700"></BiGift></div>
                <h1 className="text-center font-bold text-xl my-2">Free Gifts</h1>
                <p className="text-center">You can achieve a gift on certain stock items.</p>
            </div>
        </div>
    );
};

export default Feature;