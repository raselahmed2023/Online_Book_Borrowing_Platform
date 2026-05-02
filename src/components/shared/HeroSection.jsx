import Image from 'next/image';
import React from 'react';
import hero from '@/assets/hero.jpg';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <div className="hero relative container mx-auto mt-10 rounded-xl overflow-hidden h-[400px] md:h-[500px]">

            <Image
                src={hero}
                alt="Background"
                fill
                className="object-cover"
                priority
            />

            <div className="hero-overlay bg-black/10 absolute inset-0"></div>

            <div className="hero-content text-neutral-content text-center relative z-10">
                <div className="w-full">
                    <h1 className="mb-5 text-4xl md:text-6xl font-bold">Find Your Next Read</h1>
                    <Link href='/AllBooks'>
                        <div className="lg:tooltip mt-3" data-tip="new books!">
                            <button className="btn hover:bg-red-700">Browse Now</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;