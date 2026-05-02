import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                       
                        <button className="btn btn-neutral mt-4">Login</button>

                         <div className='text-center mt-4'><a className="link link-hover text-sm">New user! Register to get access more books</a></div>
                         <Link href={'/SignUP'} className='text-center mt-4 btn btn-ghost'><li className="status status-error animate-bounce"></li>Register</Link>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;