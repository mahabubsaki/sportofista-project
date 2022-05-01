import React, { useState } from 'react';
import CustomLink from '../utilities/CustomLink';
import { CgMenuRound } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth)
    const handleLogout = () => {
        signOut(auth)
    }
    const [navOpen, setNavOpen] = useState(false)
    return (
        <>
            <div className="flex md:flex-row flex-col justify-between w-full items-center bg-blue-500">
                <div className="md:w-2/5 w-full flex justify-between items-center pl-10">
                    <Link to="/"><img src="https://i.ibb.co/YPMZPQJ/download.png" alt="" /></Link>
                    <CgMenuRound className="text-4xl cursor-pointer md:hidden" onClick={() => setNavOpen(!navOpen)}></CgMenuRound>
                </div>
                <div className="w-3/5 mx-auto bg-transparent">
                    <div>
                        <div className={`flex md:flex-row flex-col w-full justify-between md:px-3 absolute md:static left-0 px-0 ${navOpen ? 'top-26' : '-top-full'} duration-500 z-20`}>
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/blogs">Blogs</CustomLink>
                            {
                                user
                                    ?
                                    <>
                                        <CustomLink to="/my-items">My Items</CustomLink>
                                        <CustomLink to="/manage">Manage</CustomLink>
                                        <CustomLink to="/add">Add</CustomLink>
                                        <button onClick={handleLogout} style={{ backgroundColor: "#7FB5FF", padding: '10px', fontSize: '16px', textAlign: 'center' }}>SignOut</button>
                                    </>
                                    :
                                    <>
                                        <CustomLink to="/login">Login</CustomLink>
                                        <CustomLink to="/register">Register</CustomLink>
                                    </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;