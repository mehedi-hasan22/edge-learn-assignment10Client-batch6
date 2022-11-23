import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Aside from '../Aside/Aside';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='flex flex-row'>
            <div className='basis-1/4 me-5 border py-40 text-xl rounded-md sticky-top'>
                <Aside></Aside>
            </div>
            <div className='basis-9/12'>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        courses.map(course => <Course
                            key={course._id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Courses;