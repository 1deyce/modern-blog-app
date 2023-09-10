import React from 'react';
import moment from 'moment/moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className='bg-gradient-to-right-top from-purple-800 to-black shadow-black shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img 
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top absolute h-auto w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg' 
        />
      </div>
      <h1 
        className='transition duration-700 text-center mb-8 cursor-pointer hover:text-[#5483b3] text-3xl font-semibold'
      >
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
    </div>
  )
}

export default PostCard;