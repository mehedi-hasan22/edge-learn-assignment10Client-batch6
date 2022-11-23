import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Aside from '../Aside/Aside';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className='flex flex-col md:flex-row gap-4 w-11/12 mx-auto my-5'>
            <div className='basis-1/4 me-5 border py-40 text-xl rounded-md sticky-top'>
                <Aside></Aside>
            </div>
            <div className='basis-9/12'>
                <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4'>
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