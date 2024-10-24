import React from 'react';
import { motion } from 'framer-motion';
import hs1 from '../../assets/h1.jpg';
import hs2 from '../../assets/h2.jpg';
import hs3 from '../../assets/h3.jpg';
import hs4 from '../../assets/h4.jpg';

const HS = () => {
  return (
    <div className='p-5 sm:px-24 dark:text-white' id='highSchool'>
      <br /><br /><br />
      {/* Hero Section with Parallax Scrolling Effect */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className='relative text-center mb-12'
      >
        <motion.div
          initial={{ backgroundColor: '#ff4500' }}
          animate={{ backgroundColor: '#00c3ff' }}
          transition={{ duration: 10, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          className='absolute inset-0 opacity-40 rounded-xl'
        />
        <h2 className='relative font-bold sm:text-[2.5rem] text-[2rem] text-[#ffffff] z-10'>
          High School: A Gateway to Excellence
        </h2>
        <p className='relative text-sm leading-7 px-5 mt-4 z-10 text-[#ffffff]'>
          Discover a world of opportunities, challenges, and growth as you embark on your high school journey.
        </p>
      </motion.div>

      {/* Section with Overlapping Image and Content */}
      <div className='grid md:grid-cols-2 gap-12 items-center'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className='relative'
        >
          <img src={hs1} alt="" className='rounded-3xl shadow-lg w-full h-full object-cover' />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='absolute inset-0 bg-[#00c3ffbb] rounded-3xl flex items-center justify-center opacity-0'
          >
            <p className='text-white text-lg font-bold'>A Foundation for the Future</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className='p-6 rounded-3xl bg-[#0e65e7bb] shadow-xl text-white text-lg leading-7'
        >
          <h3 className='font-semibold text-[2rem] mb-4'>
            Academic Excellence
          </h3>
          <p>
            Our high school curriculum is designed to challenge students to think critically and independently, preparing them for the academic rigors of college and beyond. With a strong emphasis on STEM, humanities, and the arts, students are encouraged to explore their interests deeply and broadly.
          </p>
        </motion.div>
      </div>

      {/* Alternating Image and Text Sections with Smooth Animations */}
      <div className='grid grid-cols-1 gap-12 mt-12'>
        <div className='flex flex-col-reverse md:flex-row items-center'>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className='p-6 rounded-3xl bg-[#ff1919bb] shadow-xl text-white text-lg leading-7 md:w-1/2'
          >
            <h3 className='font-semibold text-[2rem] mb-4'>
              Leadership & Responsibility
            </h3>
            <p>
              We cultivate leadership and responsibility in our students through diverse extracurricular programs. Whether through student government, clubs, or community service, our students learn to lead with integrity and compassion.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className='md:w-1/2'
          >
            <img src={hs2} alt="" className='rounded-3xl max-h-[500px] shadow-lg w-full h-full object-cover' />
          </motion.div>
        </div>

        <div className='flex flex-col-reverse md:flex-row-reverse items-center'>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className='p-6 rounded-3xl bg-[#a3fe06bb] shadow-xl text-white text-lg leading-7 md:w-1/2'
          >
            <h3 className='font-semibold text-[2rem] mb-4'>
              Creativity & Innovation
            </h3>
            <p>
              Creativity and innovation are at the heart of our high school experience. Through our robust arts programs, tech labs, and creative workshops, students have endless opportunities to express themselves and bring their ideas to life.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className='md:w-1/2'
          >
            <img src={hs3} alt="" className='rounded-3xl max-h-[500px] shadow-lg w-full h-full object-cover' />
          </motion.div>
        </div>
      </div>

      {/* Final Section with Text on Image Background */}
      <div className='relative mt-12'>
        <motion.img
          src={hs4}
          alt=""
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className='rounded-3xl shadow-lg w-full h-full object-cover'
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className='absolute inset-0 bg-gradient-to-t from-[#000000bb] via-transparent to-transparent rounded-3xl flex items-center justify-center p-8'
        >
          <h3 className='text-white font-bold text-[2.5rem] text-center'>
            Preparing for a Bright Future
          </h3>
        </motion.div>
      </div>
    </div>
  );
}

export default HS;
