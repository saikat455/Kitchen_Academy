import Image from 'next/image';
import React from 'react';
import { BiHeart } from 'react-icons/bi';

type Props = {
    article: {
        id: number;
        userImage: string;
        username: string;
        reaction: number;
        coverImage: string;
        title: string;
        description: string;
    }
}

const ArticleCard = ({article}: Props) => {
    return (
        <div className='bg-white rounded-lg overflow-hidden'>
            <Image src={`${article.coverImage}`} alt={article.title} width={300} height={300} className='w-full h-full'>

            </Image>
            <div className='p-5'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-4'>
                        <Image src={article.userImage} alt={article.username} width={40} height={40} className='rounded-full'>

                        </Image>
                        <p className='text-base text-black text-opacity-70'>{article.username}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <BiHeart className='text-red-600'></BiHeart>
                        <p className='text-sm text-gray-800'>
                        {article.reaction}
                        </p>

                    </div>
                </div>

                <h1 className='mt-4 mb-4 text-lg font-semibold'>
                    {article.title}
                </h1>
                <p className='text-base text-gray-700'>
                {article.description}
                </p>
                <button className='mt-4 mb-3 hover:text-green-600 text-lg text-black font-bold underline'>
                    Learn More
                </button>
            </div>
        </div>
    );
};

export default ArticleCard;