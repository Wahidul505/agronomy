import React from 'react';

const Blog = ({children}) => {
    return (
        <div className='bg-gray-800 bg-opacity-70 p-4 rounded shadow text-gray-100 text-lg'>
            {children}
        </div>
    );
};

export default Blog;