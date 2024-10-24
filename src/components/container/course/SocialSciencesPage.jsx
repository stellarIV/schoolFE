import React from 'react'
import { motion } from 'framer-motion'

const SocialSciencesPage = () => {
  return (
    <div className='section mt-16 dark:text-white px-6 py-12 bg-gradient-to-r from-purple-500 to-indigo-500'>
      <motion.h1 
        className='text-5xl font-extrabold text-center text-white mb-12'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Explore Social Sciences
      </motion.h1>

      <motion.p 
        className='text-lg mb-10 text-center text-gray-100'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Discover the diverse world of social sciences with resources and free online courses from top universities like MIT, Harvard, and more.
      </motion.p>

      <div className='space-y-12'>
        {/* Psychology */}
        <motion.div
          className='p-6 rounded-lg bg-white dark:text-black shadow-lg'
          whileHover={{ scale: 1.05 }}
        >
          <h2 className='text-3xl font-semibold text-pink-600 mb-4'>Psychology</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Psychology explores the human mind and behavior, including mental processes and emotional responses. Enhance your understanding with these free resources.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <motion.a 
              href="https://ocw.mit.edu/courses/brain-and-cognitive-sciences/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              MIT OpenCourseWare
            </motion.a>
            <motion.a 
              href="https://pll.harvard.edu/catalog?keywords=psychology" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Harvard University
            </motion.a>
            <motion.a 
              href="https://www.edx.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              edX - Psychology
            </motion.a>
            <motion.a 
              href="https://www.khanacademy.org/test-prep/gre/psychology" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Khan Academy
            </motion.a>
          </div>
        </motion.div>

        {/* Sociology */}
        <motion.div
          className='p-6 rounded-lg bg-white dark:text-black shadow-lg'
          whileHover={{ scale: 1.05 }}
        >
          <h2 className='text-3xl font-semibold text-blue-600 mb-4'>Sociology</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Sociology examines the development, structure, and functioning of human society. Explore the dynamics of social behavior and institutions with these resources.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <motion.a 
              href="https://ocw.mit.edu/courses/sociology/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              MIT OpenCourseWare
            </motion.a>
            <motion.a 
              href="https://online-learning.harvard.edu/course/introduction-sociology" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Harvard University
            </motion.a>
            <motion.a 
              href="https://www.edx.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              edX - Sociology
            </motion.a>
            <motion.a 
              href="https://www.khanacademy.org/humanities/social-sciences" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Khan Academy
            </motion.a>
          </div>
        </motion.div>

        {/* Political Science */}
        <motion.div
          className='p-6 rounded-lg bg-white dark:text-black shadow-lg'
          whileHover={{ scale: 1.05 }}
        >
          <h2 className='text-3xl font-semibold text-red-600 mb-4'>Political Science</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Political Science studies the theory and practice of politics and government. Understand political systems, behavior, and policies with these free courses.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <motion.a 
              href="https://ocw.mit.edu/courses/political-science-and-global-studies/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              MIT OpenCourseWare
            </motion.a>
            <motion.a 
              href="https://online-learning.harvard.edu/course/introduction-politics" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Harvard University
            </motion.a>
            <motion.a 
              href="https://www.edx.org/course/introduction-to-political-science" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              edX - Political Science
            </motion.a>
            <motion.a 
              href="https://www.khanacademy.org/humanities/social-sciences" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Khan Academy
            </motion.a>
          </div>
        </motion.div>

        {/* Economics */}
        <motion.div
          className='p-6 rounded-lg bg-white dark:text-black shadow-lg'
          whileHover={{ scale: 1.05 }}
        >
          <h2 className='text-3xl font-semibold text-green-600 mb-4'>Economics</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Economics is the study of how societies use resources to produce and distribute goods and services. Learn about economic theories, markets, and policies with these resources.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <motion.a 
              href="https://ocw.mit.edu/courses/economics/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              MIT OpenCourseWare
            </motion.a>
            <motion.a 
              href="https://online-learning.harvard.edu/course/introduction-economics" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Harvard University
            </motion.a>
            <motion.a 
              href="https://www.edx.org/course/microeconomics" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              edX - Economics
            </motion.a>
            <motion.a 
              href="https://www.khanacademy.org/economics-finance-domain" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Khan Academy
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SocialSciencesPage
