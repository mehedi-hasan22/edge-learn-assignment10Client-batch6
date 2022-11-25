import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import { FaDownload, FaCrown } from "react-icons/fa";


const ref = React.createRef();

const Category = () => {
    const category = useLoaderData();
    const data = category[0]
    // console.log(data.id)
    return (
        <div ref={ref} className='w-9/12 mx-auto'>
            <div className='flex justify-between align-center mt-5'>
                <h1 className='text-3xl text-center'>dynamic category for: {data.title}</h1>
                <Pdf targetRef={ref} filename='courseOutline.pdf'>
                    {({ toPdf }) => <button className='flex btn btn-outline' onClick={toPdf}>Download outline<FaDownload className='mx-4' /></button>}
                </Pdf>

            </div>
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
                <button className='btn btn-primary my-5'><Link className='flex justify-between align-center' to={`/checkout/${data.category_id
                    }`}>Get Premium<FaCrown className='mx-2' /></Link></button>
            </div>
        </div >
    );
};

export default Category;