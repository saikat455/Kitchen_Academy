"use client";

import { navLinks } from '@/constant/constant';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };
        window.addEventListener('scroll', handler);
        return () => window.removeEventListener('scroll', handler);
    }, []);

    return (
        <div className={`fixed ${navBg ? "bg-slate-500" : "bg-transparent"} w-full transition-all duration-200 h-[12vh] z-[1000]`}>
            <div className='flex items-center h-full justify-between w-[80%] xl:w-[80%] mx-auto'>
                
                <Image src="/images/logo.png" alt="Logo" width={100} height={80} className='mt-5'/>
                
                <div className='hidden lg:flex items-center space-x-6'>
                    {navLinks.map((link) => (
                        <Link key={link.id} href={link.url}>
                            <p className='nav_link'>{link.label}</p>
                        </Link>
                    ))}
                </div>
                <div className="flex items-center space-x-3">
                    <button className='md:px-8 md:py-2 px-6 py-1 text-white font-semibold text-sm bg-pink-700 hover:bg-pink-900 transition-all duration-200 rounded-lg'>Sign Up</button>
                    <HiBars3BottomRight onClick={openNav} className='w-6 h-6 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div>
    );
};

export default Nav;
