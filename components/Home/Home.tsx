"use client";

import React, { useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Courses from './Course/Courses';
import Feature from './Feature/Feature';
import Review from './Review/Review';
import Article from './Article/Article';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    useEffect (() => {
        const initAOS = async () => {
            await import('aos');
            AOS.init({
                duration:1000,
                easing: 'ease',
                once: true,
                anchorPlacement: 'top-bottom',
            })
        };
        initAOS();
    }, []);

    return (
        <div className=''>
            <Hero></Hero>
            <About></About>
            <Courses></Courses>
            <Feature></Feature>
            <Review></Review>
            <Article></Article>
        </div>
    );
};

export default Home;