import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaEdge, FaUserGraduate } from "react-icons/fa";
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="navbar bg-primary">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Homepage</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><Link to='/faq'>FAQ</Link></li>
                        <li><Link to='blog'>Blog</Link></li>
                    </ul>
                </div>
            </div>
            <div className="navbar">
                <Link to='/' className="btn btn-primary normal-case text-xl"><FaEdge className='m-2 text-white text-2xl' />  Edge Learn</Link>
            </div>
            <div className="navbar-end">
                <div className='mx-5'>
                    <Link to='/signIn' className='mx-2'>Sign In</Link> <br />
                </div>
                <div className='mx-5'>
                    <p>{user?.displayName}</p>
                </div>
                <FaUserGraduate className='text-white text-3xl'></FaUserGraduate>
            </div>
        </div >
    );
};

export default Header;