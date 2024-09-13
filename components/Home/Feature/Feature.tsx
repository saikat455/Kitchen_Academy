

"use client";

import Image from 'next/image';
import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import Tilt from "react-parallax-tilt";

const Feature = () => {
    return (
        <div className="pt-16 pb-16">
            
            <div className="flex flex-col md:flex-row items-center w-[90%] lg:w-[80%] gap-20 mx-auto ">
                <Tilt>
                    <div data-aos = 'zoom-in' data-aos-anchor-placement='top-center'  className="flex-1 flex justify-center md:justify-start mb-8 md:mb-0">
                        <Image src="/images/f.png" alt="image" width={500} height={500} className="w-full h-full object-cover" />
                    </div>
                </Tilt>

                <div className="flex-1 flex flex-col justify-center text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                        <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center">
                            <FaBriefcase className="h-6 w-6 text-white" />
                        </div>
                        <h1 className="text-xl text-black font-semibold">
                            Premium learning experience
                        </h1>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">
                        Providing amazing online courses.
                    </h1>
                    <div className="mt-4 mb-4">
                        <h1 className="text-lg md:text-2xl text-black text-opacity-70 font-semibold">
                            Master the skills that matter to you
                        </h1>
                        <p className="text-sm md:text-base text-black text-opacity-70 mt-2">
                        Discover and develop essential skills through our expertly crafted courses, tailored to meet your personal and professional goals.
                        </p>
                    </div>
                    <div className="mt-4 mb-4">
                        <h1 className="text-lg md:text-2xl text-black text-opacity-70 font-semibold">
                            Increase your learning skills
                        </h1>
                        <p className="text-sm md:text-base text-black text-opacity-70 mt-2">
                        Enhance your abilities with our interactive courses designed to boost your learning efficiency and foster personal growth.

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feature;
