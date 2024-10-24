import React from 'react'
import { motion } from 'framer-motion'

const NaturalSciencesPage = () => {
  return (
    <div className='section mt-16 dark:text-white px-6 py-12 bg-gradient-to-r from-blue-500 to-teal-500'>
      <motion.h1 
        className='text-5xl font-extrabold text-center text-white mb-12'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Explore Natural Sciences
      </motion.h1>

      <motion.p 
        className='text-lg mb-10 text-center text-gray-100'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Dive into the wonders of the natural world with resources and free online courses from top universities like MIT, Harvard, and more.
      </motion.p>

      <div className='space-y-12'>
        {/* Mathematics */}
        <motion.div
          className='p-6 rounded-lg bg-white dark:text-black shadow-lg'
          whileHover={{ scale: 1.05 }}
        >
          <h2 className='text-3xl font-semibold text-red-600 mb-4'>Mathematics</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Mathematics is the foundation of all sciences, exploring numbers, structures, and abstract concepts. Whether it's algebra, calculus, or geometry, these resources will enhance your mathematical skills.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <motion.a 
              href="https://ocw.mit.edu/courses/mathematics/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              MIT OpenCourseWare
            </motion.a>
            <motion.a 
              href="https://online-learning.harvard.edu/course/calculus" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Harvard University
            </motion.a>
            <motion.a 
              href="https://www.edx.org/course/introduction-to-linear-algebra" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              edX - Linear Algebra
            </motion.a>
            <motion.a 
              href="https://www.khanacademy.org/math" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Khan Academy
            </motion.a>
          </div>
        </motion.div>

        {/* English */}
        <motion.div
          className='p-6 rounded-lg bg-white dark:text-black shadow-lg'
          whileHover={{ scale: 1.05 }}
        >
          <h2 className='text-3xl font-semibold text-blue-600 mb-4'>English</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            English is essential for effective communication, covering grammar, literature, and writing skills. Improve your English proficiency with these free courses and resources.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <motion.a 
              href="https://online-learning.harvard.edu/course/masterpieces-world-literature" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Harvard - Literature
            </motion.a>
            <motion.a 
              href="https://www.edx.org/learn/grammar" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              edX - STEM English
            </motion.a>
            <motion.a 
              href="https://www.coursera.org/courses?query=english" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Coursera - English
            </motion.a>
            <motion.a 
              href="https://www.khanacademy.org/humanities" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Khan Academy
            </motion.a>
          </div>
        </motion.div>

        {/* Biology */}
        <motion.div
          className='p-6 rounded-lg bg-white dark:text-black shadow-lg'
          whileHover={{ scale: 1.05 }}
        >
          <h2 className='text-3xl font-semibold text-teal-600 mb-4'>Biology</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Biology is the study of living organisms, from the simplest bacteria to complex multicellular life forms. Explore the fundamentals of life, genetics, ecosystems, and evolution.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <motion.a 
              href="https://ocw.mit.edu/courses/biology/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              MIT OpenCourseWare
            </motion.a>
            <motion.a 
              href="https://pll.harvard.edu/catalog" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Harvard University
            </motion.a>
            <motion.a 
              href="https://www.edx.org/course/introduction-to-biology-the-secret-of-life" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              edX - Biology
            </motion.a>
            <motion.a 
              href="https://www.khanacademy.org/science/biology" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Khan Academy
            </motion.a>
          </div>
        </motion.div>

        {/* Chemistry */}
        <motion.div
          className='p-6 rounded-lg bg-white dark:text-black shadow-lg'
          whileHover={{ scale: 1.05 }}
        >
          <h2 className='text-3xl font-semibold text-pink-600 mb-4'>Chemistry</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Chemistry is the science of matter, exploring the properties, composition, and reactions of substances. Delve into organic, inorganic, and physical chemistry with these resources.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <motion.a 
              href="https://ocw.mit.edu/courses/chemistry/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              MIT OpenCourseWare
            </motion.a>
            <motion.a 
              href="https://pll.harvard.edu/catalog" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Harvard University
            </motion.a>
            <motion.a 
              href="https://www.coursera.org/courses?query=chemistry" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Coursera - Chemistry
            </motion.a>
            <motion.a 
              href="https://www.khanacademy.org/science/chemistry" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Khan Academy
            </motion.a>
          </div>
        </motion.div>

        {/* Physics */}
        <motion.div
          className='p-6 rounded-lg bg-white dark:text-black shadow-lg'
          whileHover={{ scale: 1.05 }}
        >
          <h2 className='text-3xl font-semibold text-green-600 mb-4'>Physics</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Physics is the study of the fundamental forces of nature and the laws that govern the universe. From classical mechanics to quantum physics, explore the world of physics.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <motion.a 
              href="https://ocw.mit.edu/courses/physics/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              MIT OpenCourseWare
            </motion.a>
            <motion.a 
              href="https://pll.harvard.edu/catalog" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Harvard University
            </motion.a>
            <motion.a 
              href="https://www.edx.org/course/mechanics-reinforced" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              edX - Physics
            </motion.a>
            <motion.a 
              href="https://www.khanacademy.org/science/physics" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Khan Academy
            </motion.a>
          </div>
        </motion.div>

        {/* Environmental Science */}
        <motion.div
          className='p-6 rounded-lg bg-white dark:text-black shadow-lg'
          whileHover={{ scale: 1.05 }}
        >
          <h2 className='text-3xl font-semibold text-yellow-600 mb-4'>Environmental Science</h2>
          <p className='text-gray-700 dark:text-gray-300 mb-4'>
            Environmental Science explores the interaction between natural systems and human activity. Learn about ecology, conservation, and the impact of climate change.
          </p>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
            <motion.a 
              href="https://ocw.mit.edu/courses/earth-atmospheric-and-planetary-sciences/" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              MIT OpenCourseWare
            </motion.a>
            <motion.a 
              href="https://pll.harvard.edu/catalog" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Harvard University
            </motion.a>
            <motion.a 
              href="https://www.edx.org/course/environmental-science-and-sustainability" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              edX - Environmental Science
            </motion.a>
            <motion.a 
              href="https://www.khanacademy.org/science/biology/ecology" 
              target="_blank" 
              rel="noopener noreferrer"
              className='animated-button py-2 px-4 rounded-md text-center text-white transition-all duration-300 ease-in-out'
            >
              Khan Academy - Ecology
            </motion.a>
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default NaturalSciencesPage
