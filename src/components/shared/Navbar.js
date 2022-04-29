import React from 'react';

const Navbar = () => {
    return (
        <div className="flex justify-between border w-full border-black items-center">
            <div className="w-2/5 border border-black flex justify-center">
                <img src="https://i.ibb.co/x5SLv4J/download.png" alt="" />
            </div>
            <div className="w-2/5 mx-auto">
                <div className="flex w-full justify-between px-4">
                    <p>Home</p>
                    <p>Login</p>
                    <p>Register</p>
                    <p>Blogs</p>
                </div>
            </div>
        </div>
    );
};

export default Navbar;