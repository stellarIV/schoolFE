import React from 'react';
import { motion } from 'framer-motion';
import { Events } from '../index';
import s1 from '../../assets/l1.jpg';
import s2 from '../../assets/c1.jpg';
import s3 from '../../assets/sp2.jpg';
import s4 from '../../assets/l1.jpg';
import s5 from '../../assets/e1.jpg';
import s6 from '../../assets/e4.jpg';

// Array of news items
const newsItems = [
  {
    id: 1,
    title: 'New Science Lab Opens',
    description: 'Our new state-of-the-art science lab is now open! Students can conduct advanced experiments with the latest technology.',
    image: s1,
  },
  {
    id: 2,
    title: 'Student Volunteer Program',
    description: 'Join our student volunteer program and make a difference in the community. Various opportunities available!',
    image: s2,
  },
  {
    id: 3,
    title: 'Sports Day 2024',
    description: 'Get ready for the annual sports day! Show your athletic skills and cheer on your friends in various competitions.',
    image: s3,
  },
  {
    id: 4,
    title: 'Art Exhibition',
    description: 'Our talented students will be showcasing their artwork at the annual art exhibition. Don’t miss it!',
    image: s4,
  },
];

const NewsAndEvents = () => {
  return (
    <div className='p-3 sm:px-20 dark:text-white' id='studentLife'>
      <br />
      <div className='place-items-center gap-8 pt-12'>
      <div className='pl-5'>
            <div className='font-semibold sm:text-[1.875rem] text-[1.5rem] '>
              What <span className='text-[#0df]'>Our Students</span> <br />Get 
            </div>
            <p className='text-grey text-sm leading-7'>
              Education is the foundation of our future, and an ideal school plays a crucial role in shaping young minds. My vision of an ideal school is a place where learning is engaging, inclusive, and holistic, fostering both academic excellence and personal growth.
              <br /><span className='hidden md:flex'> Our school is located in a serene environment, surrounded by nature. The campus is equipped with modern facilities, including spacious classrooms, well-stocked libraries, advanced science and computer labs, and expansive sports fields. The classrooms are designed to be bright and airy, with large windows that let in natural light, creating a conducive atmosphere for learning.</span>
            </p>
          </div>
        {/* News Section */}
        <div className='pt-8'>
          <div className='pl-5'>
            <div className='font-semibold sm:text-[1.875rem] text-[1.5rem]'>
              School News & Opportunities
            </div>
          </div>
          <div className='space-y-6 p-4'>
            {newsItems.map((news) => (
              <div 
                key={news.id} 
                className='relative bg-white dark:bg-[#1f102d] rounded-xl shadow-lg overflow-hidden group'
              >
                <img 
                  src={news.image} 
                  alt={news.title} 
                  className='h-72 w-full object-cover transition-all duration-500 group-hover:brightness-75'
                />
                <div 
                  className='absolute inset-y-0 right-0 bg-black bg-opacity-75 w-[10%] group-hover:w-[75%] transition-all duration-500 ease-in-out flex items-center p-6 overflow-hidden group-hover:overflow-auto'
                >
                  <div className='text-white whitespace-nowrap group-hover:whitespace-normal'>
                    <div className='text-lg font-semibold mb-2'>
                      {news.title}
                    </div>
                    <p className='text-sm'>
                      {news.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Existing Content */}
       
      </div>
      
      <div>
        <Events/>
      </div>
    </div>
  );
}

export default NewsAndEvents;
