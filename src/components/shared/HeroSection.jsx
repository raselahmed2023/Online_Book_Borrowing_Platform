import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <h1 className='text-6xl text-center text-gray-900 mt-4 p-7 m-7'>Find Your Next Read</h1>
             <div className='col-span-full flex justify-center mt-6'>
                <Link href='/AllBooks'>
                    <button className='btn btn-dash'>Browse Now</button>
                </Link>
            </div>

        </div>
    );
};

export default HeroSection;