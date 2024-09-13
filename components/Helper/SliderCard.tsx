import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

type Props = {
    name: string;
    image: string;
    role: string;
};

const SliderCard = ({image, name, role}: Props) => {


    return (
        <div className='flex flex-wrap sm:flex-nowrap items-center space-x-10'>
            <div className='h-full w-full'>
            <Image src={image} alt='image' width={450} height={450} className='w-[60%] h-[40%]'>

            </Image>
            </div>

            <div className='mt-6 mb-7'>
                <div className='flex items-center'>
                    <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'></FaStar>
                    <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'></FaStar>
                    <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'></FaStar>
                    <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'></FaStar>
                    <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'></FaStar>
                </div>
                <p className='mt-6 text-gray-800 w-[95%] md:w-[80%] text-xs md:text-sm lg:text-base font-semibold
                 text-opacity-60'>
                    An outstanding platform with valuable resources and user-friendly design. It greatly enhanced my skills and exceeded my expectations.
                </p>
                <div className='mt-7'>
                    <h1 className='text-xl text-black font-semibold'>{name}</h1>
                    <h1 className='text-lg text-black font-opacity-60'>{role}</h1>
                </div>
            </div>
            
        </div>
    );
};

export default SliderCard;


