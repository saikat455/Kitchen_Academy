import React from 'react';

const HeroContent = () => {
    return (
        <div>
        <h1 
            data-aos='fade-right' 
            className='text-2xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-7xl font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-white text-center lg:text-left'
        >
            Explore, Learn, and Master the Art of Cooking with Us!
        </h1>
    
        <p 
            data-aos='fade-left' 
            data-aos-delay='150' 
            className='mt-6 text-sm md:text-base text-white text-opacity-60 text-center lg:text-left'
        >
            Join our cooking course to master recipes, explore culinary techniques, and enhance your skills with expert guidance and community support.
        </p>
    
        <div className='mt-8 flex justify-center lg:justify-start items-center space-x-4'>
            <button 
                data-aos='zoom-in' 
                data-aos-delay='300'   
                className='button_cls bg-green-700 hover:bg-green-900'
            >
                Get Started
            </button>
            <button 
                data-aos='zoom-in' 
                data-aos-delay='450' 
                className='button_cls bg-yellow-700 hover:bg-yellow-900'
            >
                Learn More
            </button>
        </div>
    
        <div className='flex justify-center lg:justify-start items-center flex-wrap space-x-16 mt-8'>
            <div data-aos='fade-up' data-aos-delay='600'>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>250+</p>
                <p className='w-[100px] h-[3px] bg-green-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Tutors</p>
            </div>
            <div data-aos='fade-up' data-aos-delay='750'>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>2100+</p>
                <p className='w-[100px] h-[3px] bg-blue-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Students</p>
            </div>
            <div data-aos='fade-up' data-aos-delay='900'>
                <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>50+</p>
                <p className='w-[100px] h-[3px] bg-pink-600 mt-2 mb-2 rounded-lg'></p>
                <p className='md:text-lg text-sm text-white text-opacity-70'>Courses</p>
            </div>
        </div>
    </div>
    
    );
};

export default HeroContent;


