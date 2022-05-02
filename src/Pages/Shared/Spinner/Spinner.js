import React from 'react';

const Spinner = () => {
    return (
        <div className='py-20 flex justify-center items-center'>
            <div className='h-32 w-32 rounded-full border-t-4 border-orange-400 animate-spin'></div>
        </div>
    );
};

export default Spinner;