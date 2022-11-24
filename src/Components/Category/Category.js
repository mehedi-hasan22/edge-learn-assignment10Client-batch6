import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Category = () => {
    const category = useLoaderData();
    const data = category[0]
    // console.log(data.id)
    return (
        <div className='w-9/12 mx-auto'>
            <h1 className='text-3xl text-center'>dynamic category for: {data.title}</h1>
            <div className='mx-auto border rounded-md lg:m-5 lg:p-5'>
                <img className='mx-auto w-full rounded-md mb-4' src={data.image_url} alt="" />
                <p>{data.details}</p>
                <h1>Course Outline</h1>
                <div className='ms-5'>
                    <li>lifetime excess</li>
                    <li>Pre recorded class</li>
                    <li>Quiz after class</li>
                    <li>24/7 support</li>
                    <li>Course finishing Certificate</li>
                </div>
                <button className='btn btn-primary my-5'><Link to={`/checkout/${data.category_id
                    }`}>Get Premium</Link></button>
            </div>
        </div>
    );
};

export default Category;