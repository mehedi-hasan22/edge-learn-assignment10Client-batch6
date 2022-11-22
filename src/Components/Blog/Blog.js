import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <h1 className='text-center'>Blog</h1>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h1 className='text-xl'>what is cors?</h1>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h1 className='text-xl'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>It's beginner friendly, easy to implement, pre-build</p> <br />
                    <p>Here, I implemented Email & Password based Auth, Google Account based & Github Account based Authentication system</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h1 className="text-xl">How does the private route work?</h1>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property</p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <h1 className="text-xl">What is Node? How does Node works?</h1>
                </div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                    <p>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser.</p>
                    <p>It is used as backend service where javascript works on the server-side of the application.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;