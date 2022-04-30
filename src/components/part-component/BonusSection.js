import React from 'react';

const BonusSection = () => {
    const handleSubscribe = (e) => {
        e.preventDefault();
    }
    return (
        <div>
            <div></div>
            <div className="bg-blue-600 grid grid-cols-1 md:grid-cols-2 mt-4 w-4/5 mx-auto p-6">
                <div className="text-white text-center">
                    <h1 className="text-3xl">SUBSCRIBE TO OUR NEWSLETTER</h1>
                    <p>Stay in the loop and be the first to know about our exclusives and upcoming releases.</p>
                </div>
                <div className="flex justify-center items-center mt-3 md:mt-0">
                    <form onSubmit={handleSubscribe}>
                        <input type="email" name="email" className="p-2 border-2 border-white" />
                        <button type="submit" className="p-2 ml-3 bg-white">Subsctibe</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BonusSection;