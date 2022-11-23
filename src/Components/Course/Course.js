import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({ course }) => {
    const { title, image_url, details, duration } = course
    return (
        <div className='border rounded-md p-2'>
            <img style={{ "height": "200px", "width": "100%" }} className="rounded-md" src={image_url} alt="" />
            <h1 className='text-xl mb-2' >{title}</h1>
            <p className='my-2'>{
                details.length > 100 ?
                    <>{details.slice(0, 100) + '...'} <Link>Read More</Link> </>
                    :
                    details
            }</p>
            <p>Required time: {duration}</p>
        </div >
    );
};

export default Course;