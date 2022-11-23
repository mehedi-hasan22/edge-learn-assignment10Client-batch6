import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories/')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className=' text-center'>
            <h1>All Categories:</h1>
            {
                categories.map(category => <p className='mt-3' key={category.id}>
                    <Link to={`category/${category.id}`}>{category.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Aside;