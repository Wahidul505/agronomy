import React from 'react';

const Blog = ({children}) => {
    return (
        <div className='bg-green-600 bg-opacity-70 p-3 rounded shadow text-gray-100 text-lg'>
            {children}
        </div>
    );
};

export default Blog;