import React from 'react';

const Notfound = () => {
    return (
        <div style={{ minHeight: '600px' }} className="flex justify-center items-center">
            <div className="text-center">
                <h1 className="text-3xl">404 Not Found</h1>
                <p>You are looking for a page that doesn't exist</p>
            </div>
        </div>
    );
};

export default Notfound;