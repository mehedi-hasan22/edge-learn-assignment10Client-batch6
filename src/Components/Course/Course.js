import React from 'react';

const Course = ({ course }) => {
    const { title, image_url, details, duration } = course
    return (
        <div className='border rounded-md'>
            <img src={image_url} alt="" />
            <h1 className='text-xl' >{title}</h1>
            <p>{details}</p>
            <p>{duration}</p>
        </div>
    );
};

export default Course;