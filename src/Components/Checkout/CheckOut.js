import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {

    const { user } = useContext(AuthContext)
    // console.log(user)

    const card = useLoaderData()[0];
    return (
        <div class="flex w-11/12 lg:w-6/12 border lg:flex-row flex-col rounded-md mx-auto my-5 p-5">
            <div class="lg:w-1/2 m-2">
                <img className='rounded-md w-full' src={card.image_url
                } alt="" />
            </div>
            <div class="flex-initial lg:w-1/2 m-2 my-auto">
                <h1>{card.details}</h1>
                <p className='my-5'>course ID: {card._id}</p>
                <p>User Token: {user.uid}</p>
            </div>
        </div>
    );
};

export default CheckOut;