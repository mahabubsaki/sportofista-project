import React from 'react';
import { SiFacebook, SiInstagram, SiTwitter } from 'react-icons/si'
import './Footer.css'
const Footer = () => {
    return (
        <div className="w-full bg-black text-white footer">
            <div className="w-4/5 mx-auto grid grid-cols-2 md:grid-cols-4 mt-4 pt-4">
                <div className="text-center">
                    <h1 className="text-3xl mb-4">About</h1>
                    <p>Our story</p>
                    <p>Awards</p>
                    <p>Our team</p>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl mb-4">Company</h1>
                    <p>Our Services</p>
                    <p>Clients</p>
                    <p>Contacts</p>
                </div>
                <div className="text-center">
                    <h1 className="text-3xl mb-4">Resources</h1>
                    <p>Blogs</p>
                    <p>Privacy & Policy</p>
                    <p>Newsletter</p>
                </div>
                <div>
                    <h1 className="text-2xl mb-4 text-center">Follow us</h1>
                    <div className="flex justify-center">
                        <a href="https://www.facebook.com/mahabubsaki/" target={`_blank`}><SiFacebook className="mx-2 text-white icon"></SiFacebook></a>
                        <a href="https://www.instagram.com/mahabub_saki/" target={`_blank`}><SiInstagram className="mx-2 text-white icon"></SiInstagram></a>
                        <a href="https://twitter.com/MahabubSaki" target={`_blank`}><SiTwitter className="mx-2 text-white icon"></SiTwitter></a>
                    </div>
                </div>
            </div>
            <hr className="bg-gray-500 w-4/5 mx-auto mt-4" />
            <div className="w-4/5 mx-auto">
                <h3>Copyright &copy;{new Date().getFullYear()} All rights reserved to SportoFista</h3>
            </div>
        </div>
    );
};

export default Footer;