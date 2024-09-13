

"use client";

import Image from 'next/image';
import React from 'react';


const HeroImage = () => {
    return (
        <div className='relative w-full h-full'>
    <Image src="/images/hero.png" layout='responsive' width={800} height={600} alt='hero' />
</div>

    );
};

export default HeroImage;
