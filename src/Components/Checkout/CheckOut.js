import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const CheckOut = () => {

    const { user, userInfo } = useContext(AuthContext)
    console.log(user)

    const card = useLoaderData()[0];
    return (
        <div class="flex w-9/12 border rounded-md mx-auto my-5 p-5">
            <div class="flex-initial h-1/2 w-1/2 m-2">
                <img className='rounded-md' src={card.image_url
                } alt="" />
            </div>
            <div class="flex-initial w-1/2 m-2 my-auto">
                <h1>{card.details}</h1>
                <p className='my-5'>course ID: {card._id}</p>
                <p>User Token: {userInfo.UID}</p>
            </div>
        </div>
    );
};

export default CheckOut;