import React from 'react';

const RoundedCard = ({children}) => {
    return (
        <div className='flex flex-col justify-center items-center mt-20 rounded-full h-52 w-52 bg-teal-700 gap-2'>
            {children}
        </div>
    );
};

export default RoundedCard;