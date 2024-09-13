import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-20 pb-20 bg-black'>
        <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>
            <div>
                <Image src="/images/logo.png" alt='Logo' height={100} width={100}></Image>
                <p className='text-white text-opacity-50'>Explore diverse cooking classes and culinary skills.</p>
                <div className='flex items-center space-x-4 mt-6'>
                    <FaFacebook className='w-6 h-6 text-blue-600'></FaFacebook>
                    <FaTwitter className='w-6 h-6 text-sky-500'></FaTwitter>
                    <FaYoutube className='w-6 h-6 text-red-700'></FaYoutube>
                    <FaInstagram className='w-6 h-6 text-pink-600'></FaInstagram>
                </div>
            </div>
            <div>
                <h1 className='footer_heading'>Popular</h1>
                <p className='footer_link'>Culinary Skills</p>
<p className='footer_link'>Baking Techniques</p>
<p className='footer_link'>Food Presentation</p>
<p className='footer_link'>Nutrition Basics</p>
<p className='footer_link'>Global Cuisines</p>
<p className='footer_link'>Cooking Techniques</p>

            </div>

            <div>
                <h1 className='footer_heading'>Quick Link</h1>
                <p className='footer_link'>Home</p>
                <p className='footer_link'>About</p>
                <p className='footer_link'>Courses</p>
                <p className='footer_link'>Testimonial</p>
                <p className='footer_link'> Blog</p>
                <p className='footer_link'>Contact</p>
            </div>

            <div>
                <h1 className='footer_heading'>Subscribe our Newsletter</h1>
                <input type="text" placeholder='Enter your email' className='px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white'/>
                <button className='px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white'>
                    Subscribe
                </button>
            </div>
        </div>
        <p className='text-center mt-4 text-base text-white opacity-70'>©Copyright 2024 by webdev warriors</p>
        <div></div>
    </div>
  )
}

export default Footer