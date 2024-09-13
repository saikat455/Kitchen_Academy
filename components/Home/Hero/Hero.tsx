

// import React from 'react';
// import HeroContent from './HeroContent';
// import HeroImage from './HeroImage';

// const Hero = () => {
//     return (
//         <div className='pt-16 pb-16 w-full h-screen bg-slate-600 overflow-hidden'>
//             <div className='mt-10 mb-5 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16'>
//                 <div className='pr-4 lg:pr-8'>
//                     <HeroContent />
//                 </div>
//                 <div className='pl-4 lg:pl-8'>
//                     <HeroImage className='block' />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Hero;

import React from 'react';
import HeroContent from './HeroContent';
import HeroImage from './HeroImage';

const Hero = () => {
    return (
        // <div className='pt-16 pb-16 w-full h-screen bg-slate-600 overflow-hidden'>
        //     <div className='w-[90%] mx-auto flex flex-col lg:flex-row items-center gap-16'>
        //         <div className='flex-1 pr-4 lg:pr-8'>
        //             <HeroContent />
        //         </div>
        //         <div className='flex-1 pl-4 lg:pl-8'>
        //             <HeroImage />
        //         </div>
        //     </div>
        // </div>
        <div className='pt-24 md:pt-16 pb-16 w-full h-screen bg-slate-600 overflow-hidden'>
    <div className='mt-10 mb-5 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-16'>
        <div className='pr-4 lg:pr-8'>
            <HeroContent />
        </div>
        <div className='pl-4 lg:pl-8'>
            <HeroImage />
        </div>
    </div>
</div>

    );
};

export default Hero;

