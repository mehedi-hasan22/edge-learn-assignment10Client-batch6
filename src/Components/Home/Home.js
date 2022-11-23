import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-0" style={{ backgroundImage: `url("https://c4.wallpaperflare.com/wallpaper/632/34/549/technology-monitor-alpha-coders-binary-wallpaper-preview.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Launch Your Career With Edge Learn</h1>
                        <p className="mb-5">Go from no-code to an in-demand junior web developer, at a fraction of the cost of a bootcamp. Start with the front-end by learning HTML, CSS, and JavaScript. Then, master the back-end and APIs to round out your full-stack skills</p>
                        <button className="btn btn-primary"><Link to='/courses' >Get Started</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;