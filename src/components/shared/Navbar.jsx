"use client"
import React, { useEffect, useState } from 'react';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import Link from 'next/link';
import { authClient } from "@/lib/auth-client"
import { useRouter } from 'next/navigation';

const NavBar = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchSession = async () => {
            try {
                const { data } = await authClient.getSession();
                setUser(data?.user || null);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchSession();
    }, []);

    const handleLogout = async () => {
        await authClient.signOut();
        setUser(null);
        window.location.href = '/';
    };

    if (loading) {
        return (
            <div className="flex justify-between items-center bg-base-100 shadow-sm px-4 py-3">
                <Link href={'/'}>
                    <Image src={logo} alt='logo' width={60} height={10} />
                </Link>
                <div className="flex gap-4">
                    <div className="skeleton w-20 h-8 rounded-full"></div>
                    <div className="skeleton w-20 h-8 rounded-full"></div>
                    <div className="skeleton w-20 h-8 rounded-full"></div>
                </div>
                <div className="skeleton w-20 h-10 rounded-full"></div>
            </div>
        );
    }

    return (
        <div className="flex justify-between items-center bg-base-100 shadow-sm px-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/AllBooks'}>All Books</Link></li>
                        <li><Link href={'/MyProfile'}>My Profile</Link></li>
                    </ul>
                </div>
                <Link href={'/'}>
                    <Image src={logo} alt='logo' width={60} height={10} />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-6">
                    <li>
                        <Link href={'/'} className="text-sm font-bold text-gray-600 hover:text-secondary">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href={'/AllBooks'} className="text-sm font-bold text-gray-600 hover:text-secondary">
                            All Books
                        </Link>
                    </li>
                    <li>
                        <Link href={'/MyProfile'} className="text-sm font-bold text-gray-600 hover:text-secondary">
                            My Profile
                        </Link>
                    </li>
                </ul>
            </div>

            <div className="navbar-end px-4">
                {user ? (
                    <div className="flex items-center gap-3">
                        <span className="hidden md:block text-sm font-medium">
                            {user.name || user.email}
                        </span>
                        <button 
                            onClick={handleLogout} 
                            className="btn btn-ghost btn-sm text-error"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <Link href={'/Signin'}>
                        <button className="btn btn-primary btn-sm rounded-full px-6">
                            Login
                        </button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default NavBar;