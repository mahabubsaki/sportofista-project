import React from 'react';
import AnimatedButton from '../utilities/AnimatedButton';
import AnimatedText from '../utilities/AnimatedText';
import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-[url(https://i.ibb.co/Z82nN9k/84-banner.jpg)] min-h-[550px] bg-no-repeat bg-cover flex justify-between items-center md:flex-row flex-col">
            <div className="flex justify-center items-end w-full md:w-1/2 h-72">
                <div className="text-center">
                    <AnimatedText></AnimatedText>
                    <p className="text-teal-300 my-3">One of the coolest warehouse of sports gear in your area. You can stock here yout gear from anywhere anytime 😊.So why are you waiting for 🥳</p>
                    <AnimatedButton></AnimatedButton>
                </div>
            </div>
            <img src='https://i.ibb.co/C8PpsXT/255-2559755-picture-library-library-sports-equipment-png-images-transparent.png' alt="" className="banner-img mt-20" />
        </div>
    );
};

export default Banner;