import React from 'react';
import { FaArrowRight, FaAward } from 'react-icons/fa';

const About = () => {
    return (
        <div className='pt-16 pb-16'>
            <div className='w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16'>
            <div data-aos = 'fade-right' data-aos-anchor-placement='top-center' >
                <div className='flex items-center space-x-4'>
                    <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
                        <FaAward className='h-6 w-6 text-white'></FaAward>

                    </div>
                    <h1 className='text-xl text-black font-semibold'>Guaranteed and Certificate</h1>

                </div>
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[3.9rem] text-gray-800'>Online learning whenever and wherever</h1>
                <p className='mt-4 text-gray-600'>
                Master culinary skills with our expert-led courses. Learn at your own pace, anywhere, and elevate your cooking game
                </p>
                <button className='flex items-center space-x-2 px-8 py-3 mt-8 hover:bg-gray-700 transition-all duration-200 rounded-3xl bg-black text-white'>
                    <span>Learn More</span>
                    <FaArrowRight></FaArrowRight>
                </button>
            </div>
            <div data-aos = 'fade-left' data-aos-anchor-placement='top-center' data-aos-delay='150' > 
                <div>
                    <h1 className='text-7xl lg:text-9xl font-bold text-black text-opacity-5'>
                        01
                    </h1>
                    <div className='-mt-10'>
                        <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>Flexible Schedule</h1>
                        <p className='w-[90%] lg:w-[70%] text-base text-black text-opacity-60'>
                        Enjoy the freedom to learn at your convenience. Our flexible scheduling allows you to fit courses into your busy life.
                        </p>

                    </div>
                </div>

                <div className='mt-8 w-full'>
                    <h1 className='text-7xl lg:text-9xl font-bold text-black text-opacity-5'>
                        02
                    </h1>
                    <div className='-mt-10'>
                        <h1 className='text-xl md:text-2xl text-opacity-70 mb-3 text-black font-bold'>Budget Friendly</h1>
                        <p className='w-[90%] lg:w-[70%] text-base text-black text-opacity-60'>
                        Shape your learning path with a personalized schedule that fits effortlessly into your daily routine, making education accessible
                        </p>

                    </div>
                </div>
             </div>

            </div>
            
        </div>
    );
};

export default About;