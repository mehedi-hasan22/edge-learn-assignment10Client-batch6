import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    const category = useLoaderData();
    const data = category[0]
    return (
        <div>
            <h1 className='text-3xl text-center'>dynamic category for: {data.title}</h1>
        </div>
    );
};

export default Category;