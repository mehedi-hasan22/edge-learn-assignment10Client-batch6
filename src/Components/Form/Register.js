import React, { useContext, useState } from 'react';
import { Form, Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')
    const navigate = useNavigate();

    const { createUser, updateUserInfo, signInGoogle, signInGitHub } = useContext(AuthContext)
    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log('clicked', email, password)

        createUser(email, password,)
            .then((result) => {
                const user = result.user;
                form.reset();
                handleUpdateUser(name, photoURL)
                console.log(user)
                setError('');
                navigate('/signIn')
            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode)
            });
    }

    const handleUpdateUser = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserInfo(profile)
            .then(() => { })
            .catch(error => setError(error))

    }

    return (
        <div className='w-max mx-auto'>
            <div className="hero min-h-screen w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" name='name' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image URL</span>
                                </label>
                                <input type="text" placeholder="Image URl" name='photoURL' className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary btn-wide px-40">Register</button>
                            </div>
                            <h1 className='text-sm'>Already have an account? <Link to='/signIn' className='text-primary'>Sign In Here!</Link></h1>
                        </Form>
                        <div className='mx-auto'>
                            <button onClick={signInGoogle} className="btn my-2 btn-wide btn-outline">Google</button> <br />
                            <button onClick={signInGitHub} className='btn my-2 btn-wide btn-outline'>Github</button>
                        </div>
                        <p className='text-rose-600'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;