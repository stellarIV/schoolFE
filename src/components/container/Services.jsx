import { motion } from 'framer-motion'
import React from 'react'
import libraryImg from '../../assets/sp2.jpg'
import itLabImg from '../../assets/music.jpg'
import biologyLabImg from '../../assets/l1.jpg'
import chemistryLabImg from '../../assets/music.jpg'
import physicsLabImg from '../../assets/e4.jpg'

const services = [
  {
    name: 'Library Access',
    image: libraryImg,
    description: 'Our library is divided into sections for Elementary, Middle School, and High School. Each section provides age-appropriate resources and learning materials to support students\' educational needs.',
  },
  {
    name: 'IT Laboratory',
    image: itLabImg,
    description: 'Our IT lab is equipped with the latest computers and software, providing students with the resources needed for coding, programming, and digital projects.',
  },
  {
    name: 'Biology Laboratory',
    image: biologyLabImg,
    description: 'The Biology lab is designed for experiments and learning in life sciences. It is equipped with microscopes, slides, and other tools to explore the wonders of biology.',
  },
  {
    name: 'Chemistry Laboratory',
    image: chemistryLabImg,
    description: 'Our Chemistry lab provides students with the opportunity to conduct chemical experiments in a safe and controlled environment, guided by experienced instructors.',
  },
  {
    name: 'Physics Laboratory',
    image: physicsLabImg,
    description: 'The Physics lab is equipped with tools and instruments for studying mechanics, electricity, optics, and more, allowing hands-on exploration of physical principles.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const imgVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1 } },
  exit: { opacity: 0, transition: { duration: 1 } },
}

const Services = () => {
  return (
    <div className='section dark:text-white py-24' id='services'>
      <h2 className='text-4xl font-extrabold text-center mb-12'>Explore Our Services</h2>

      {/* Library Access */}
      <div className='mb-12'>
        <motion.div
          className='service-card bg-white dark:bg-[#5555] shadow-xl rounded-lg overflow-hidden flex flex-col'
          initial='hidden'
          whileInView='visible'
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <div className='w-full h-64 relative'>
            <motion.img
              src={libraryImg}
              alt='Library Access'
              className='absolute w-full h-full object-cover'
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imgVariants}
            />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold dark:text-white mb-4'>Library Access</h3>
            <motion.p
              className='text-gray-700 dark:text-gray-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Our library is divided into sections for Elementary, Middle School, and High School. Each section provides age-appropriate resources and learning materials to support students' educational needs.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* IT Laboratory */}
      <div className='mb-12'>
        <motion.div
          className='service-card bg-white dark:bg-[#5555] shadow-xl rounded-lg overflow-hidden flex flex-col'
          initial='hidden'
          whileInView='visible'
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <div className='w-full h-64 relative'>
            <motion.img
              src={itLabImg}
              alt='IT Laboratory'
              className='absolute w-full h-full object-cover'
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imgVariants}
            />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold dark:text-white mb-4'>IT Laboratory</h3>
            <motion.p
              className='text-gray-700 dark:text-gray-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Our IT lab is equipped with the latest computers and software, providing students with the resources needed for coding, programming, and digital projects.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Biology Laboratory */}
      <div className='mb-12'>
        <motion.div
          className='service-card bg-white dark:bg-[#5555] shadow-xl rounded-lg overflow-hidden flex flex-col'
          initial='hidden'
          whileInView='visible'
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <div className='w-full h-64 relative'>
            <motion.img
              src={biologyLabImg}
              alt='Biology Laboratory'
              className='absolute w-full h-full object-cover'
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imgVariants}
            />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold dark:text-white mb-4'>Biology Laboratory</h3>
            <motion.p
              className='text-gray-700 dark:text-gray-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              The Biology lab is designed for experiments and learning in life sciences. It is equipped with microscopes, slides, and other tools to explore the wonders of biology.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Chemistry Laboratory */}
      <div className='mb-12'>
        <motion.div
          className='service-card bg-white dark:bg-[#5555] shadow-xl rounded-lg overflow-hidden flex flex-col'
          initial='hidden'
          whileInView='visible'
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <div className='w-full h-64 relative'>
            <motion.img
              src={chemistryLabImg}
              alt='Chemistry Laboratory'
              className='absolute w-full h-full object-cover'
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imgVariants}
            />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold dark:text-white mb-4'>Chemistry Laboratory</h3>
            <motion.p
              className='text-gray-700 dark:text-gray-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Our Chemistry lab provides students with the opportunity to conduct chemical experiments in a safe and controlled environment, guided by experienced instructors.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Physics Laboratory */}
      <div className='mb-12'>
        <motion.div
          className='service-card bg-white dark:bg-[#5555] shadow-xl rounded-lg overflow-hidden flex flex-col'
          initial='hidden'
          whileInView='visible'
          variants={cardVariants}
          viewport={{ once: true }}
        >
          <div className='w-full h-64 relative'>
            <motion.img
              src={physicsLabImg}
              alt='Physics Laboratory'
              className='absolute w-full h-full object-cover'
              initial="initial"
              animate="animate"
              exit="exit"
              variants={imgVariants}
            />
          </div>
          <div className='p-6'>
            <h3 className='text-2xl font-bold dark:text-white mb-4'>Physics Laboratory</h3>
            <motion.p
              className='text-gray-700 dark:text-gray-300'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              The Physics lab is equipped with tools and instruments for studying mechanics, electricity, optics, and more, allowing hands-on exploration of physical principles.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Services
