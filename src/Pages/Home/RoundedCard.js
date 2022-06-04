import React from 'react';

const RoundedCard = ({children}) => {
    return (
        <div className='flex flex-col justify-center items-center rounded-full h-52 w-52 bg-teal-700 gap-2 overflow-hidden'>
            {children}
        </div>
    );
};

export default RoundedCard;