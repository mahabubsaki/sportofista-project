import React from 'react';

const Banner = () => {
    return (
        <div className="bg-[url(https://i.ibb.co/Z82nN9k/84-banner.jpg)] min-h-[550px] bg-no-repeat bg-cover flex justify-between items-center md:flex-row flex-col">
            <div className="flex justify-center items-center border border-black md:w-1/2 w-full h-80">
                <div>
                    <h1 className="text-4xl">SportoFista</h1>
                </div>
            </div>
            <img src='https://i.ibb.co/C8PpsXT/255-2559755-picture-library-library-sports-equipment-png-images-transparent.png' alt="" />
        </div>
    );
};

export default Banner;