import React from 'react';
import Image from 'next/image';

const graphCMSImageLoader = ({ src }) => src;

const Author = ({ author }) => {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-40'>
            <div className='absolute left-0 right-0 -top-14'>
                <Image
                    className="align-middle rounded-full"
                    unoptimized
                    loader={graphCMSImageLoader}
                    src={author.photo.url} 
                    alt={author.name}
                    height={100}
                    width={100} 
                />
            </div>
            <h3 className='text-white my-4 text-xl font-bold'>{author.name}</h3>
            <p className='text-white text-lg'>{author.bio}</p>
        </div>
    )
}

export default Author;