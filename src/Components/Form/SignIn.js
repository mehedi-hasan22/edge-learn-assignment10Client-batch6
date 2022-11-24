import React, { useContext } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const SignIn = () => {
    const { signInWithPassword, } = useContext(AuthContext)
    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Please verify your email address.')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div>
            <div className="hero min-h-screen w-full bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <Form onSubmit={handleSignIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <h1 className='text-sm'>Don't have an account? <Link to='/register' className='text-primary'>Register Here!</Link></h1>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;