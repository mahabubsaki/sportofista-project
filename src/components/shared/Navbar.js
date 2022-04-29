import React, { useState } from 'react';
import CustomLink from '../utilities/CustomLink';
import { CgMenuRound } from 'react-icons/cg';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)
    return (
        <>
            <div className="flex md:flex-row flex-col justify-between w-full items-center bg-blue-500">
                <div className="md:w-2/5 w-full flex justify-between items-center pl-10">
                    <img src="https://i.ibb.co/YPMZPQJ/download.png" alt="" />
                    <CgMenuRound className="text-4xl cursor-pointer md:hidden" onClick={() => setNavOpen(!navOpen)}></CgMenuRound>
                </div>
                <div className="w-2/5 mx-auto bg-transparent">
                    <div>
                        <div className={`flex md:flex-row flex-col w-full justify-between md:px-3 absolute md:static left-0 px-0 ${navOpen ? 'top-26' : '-top-full'} duration-500 z-20`}>
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/login">Login</CustomLink>
                            <CustomLink to="/register">Register</CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;