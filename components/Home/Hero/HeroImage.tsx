

// "use client";

// import Image from 'next/image';
// import React from 'react';
// import Tilt from "react-parallax-tilt";

// const HeroImage = ({ className }) => {
//     return (
//         <Tilt className={className}>
//             <div data-aos='fade-left' data-aos-delay='1050' className='relative'>
//                 <Image src="/images/Hero.png" layout='responsive' width={800} height={600} alt='Hero' />
//             </div>
//         </Tilt>
//     );
// };

// export default HeroImage;

"use client";

import Image from 'next/image';
import React from 'react';
import Tilt from "react-parallax-tilt";

const HeroImage = () => {
    return (
        <Tilt>
            <div data-aos='fade-left' data-aos-delay='1050' className='relative w-full h-full'>
                <Image src="/images/Hero.png" layout='responsive' width={800} height={600} alt='Hero' />
            </div>
        </Tilt>
    );
};

export default HeroImage;
