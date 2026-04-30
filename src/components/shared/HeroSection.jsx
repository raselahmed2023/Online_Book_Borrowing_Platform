import Link from 'next/link';
import React from 'react';
import { GiSpellBook } from "react-icons/gi";

const HeroSection = () => {
    return (
        <div className="hero bg-base-100 p-10">
            <div className="hero-content text-center flex flex-col">
                <div className="w-full">
                    <h1 className="text-5xl font-semibold">Find Your Next Read</h1>
                </div>
                <Link href='/AllBooks'>
                    <div className="lg:tooltip" data-tip="new books">
                        <button className="btn">Browse Now</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;