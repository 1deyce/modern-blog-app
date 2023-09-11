import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { getRecentPosts, getSimilarPosts } from '@/services';

const PostWidget = ({ categories, slug }) => {
  const [ relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug)
        .then((result) => setRelatedPosts(result))
    } else {
      getRecentPosts()
        .then((result) => setRelatedPosts(result))
    }
  }, [slug]);

  console.log(relatedPosts);

  return (
    <div className='bg-[#5483b3] shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b border-[#c1e8ff] pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}  
      </h3> 
      {relatedPosts.map((post) => (
        <div key={post.title} className='flex items-center w-full'>
          <div className='w-16 flex-none'>
            <img
              src={post.featuredImage.url} 
              alt={post.title}
              height="60px"
              width="60px"
              className='align-middle rounded-lg'
            />
          </div>
          <div className='flex-row ml-4'>
            <p className='text-gray-900 font-extralight'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget;