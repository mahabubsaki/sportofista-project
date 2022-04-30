import React from 'react';

const BonusSection = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
    }
    return (
        <div className="mt-4 w-4/5 mx-auto">
            <div className="my-4">
                <h1 className="text-3xl text-center my-2">Our Companies</h1>
                <div className="flex flex-wrap justify-between">
                    <img src="https://i.ibb.co/jhXthVd/asics-logo-png-transparent.png" alt="" />
                    <img src="https://i.ibb.co/RTkMF6p/29a3a7b92a39a77bff9d6773882f6746.png" alt="" />
                    <img src="https://i.ibb.co/zstjjHv/Umbro-logo-current-svg.png" alt="" />
                    <img src="https://i.ibb.co/qpLrkmw/puma-eps-vector-logo.png" alt="" />
                    <img src="https://i.ibb.co/W6t940S/nike-swoosh-logo-png-the-top-10-most-popular-shoe-brands-everyone-is-wearing-top-10-rate-pict-1200x6.png" alt="" />
                    <img src="https://i.ibb.co/znc5sd2/Adidas-Logo-svg.png" alt="" />
                </div>
            </div>
            <div className="bg-blue-600 grid grid-cols-1 md:grid-cols-2 p-6">
                <div className="text-white text-center">
                    <h1 className="text-3xl">SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <p>Stay in the loop and be the first to know about our exclusives and upcoming releases.</p>
                </div>
                <div className="flex justify-center items-center mt-3 md:mt-0">
                    <form onSubmit={handleSubscribe}>
                        <input type="email" name="email" className="p-2 w-3/6 border-2 border-white rounded-lg" />
                        <button type="submit" className="p-2 ml-3 bg-white rounded-lg">Subsctibe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BonusSection;