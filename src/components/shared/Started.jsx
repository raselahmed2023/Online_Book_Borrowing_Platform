import React from 'react';
import User from '@/assets/user.png'
import rocket from '@/assets/rocket.png'
import pack from '@/assets/package.png'
import Image from 'next/image';

const Started = () => {
    return (
        <div>

            <div className='container mx-auto'>

                <div className='text-center'>
                    <h2 className='text-5xl text-gray-600'>Get Started With 3 Steps</h2>
                    <p className=' text-gray-400 mt-2'>Start using premium books in minutes, not hours.</p>
                </div>

                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 justify-items-center'>

                    <div className="card w-96 bg-base-100 shadow-sm p-4">
                        <div className="card-body text-center gap-4 items-center">
                            <div className="badge badge-primary rounded-full absolute top-3 right-3 py-3">01</div>
                            <div className='justify-items-center border-none rounded-full p-4 bg-purple-100'><Image src={User} alt="" /></div>
                            <h2 className="card-title">Create Account</h2>
                            <p>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>
                    </div>


                    <div className="card w-96 bg-base-100 shadow-sm p-4">
                        <div className="card-body text-center gap-4 items-center">
                            <div className="badge badge-primary rounded-full absolute top-3 right-3 py-3">02</div>
                            <div className='justify-items-center border-none rounded-full p-4 bg-purple-100'><Image src={pack} alt="" /></div>
                            <h2 className="card-title">Choose Books</h2>
                            <p>Browse our catalog and select the book that your like.</p>
                        </div>
                    </div>



                    <div className="card w-96 bg-base-100 shadow-sm p-4">
                        <div className="card-body text-center gap-4 items-center">
                            <div className="badge badge-primary rounded-full absolute top-3 right-3 py-3">03</div>
                            <div className='justify-items-center border-none rounded-full p-4 bg-purple-100'><Image src={rocket} alt="" /></div>
                            <h2 className="card-title">Discover Details</h2>
                            <p>Easily buy books and started using your premium access easily.</p>
                        </div>
                    </div>





                </div>

            </div>

        </div>
    );
};

export default Started;