import React from 'react'
import { motion } from 'framer-motion'
import k1 from '../../assets/m1.jpg'
import k2 from '../../assets/k2.jpg'
import k3 from '../../assets/k3.jpg'
import k4 from '../../assets/m2.jpg'
import k5 from '../../assets/m1.jpg'

const PS = () => {
  return (
    <div className='p-5 sm:px-20 dark:text-white' id='primarySchool'>
      <div className='flex flex-col items-center gap-12 pt-12'>
        
        {/* Header Section with Floating Image */}
        <div className='relative w-full text-center'>
          <motion.img 
            src={k4} 
            alt="Primary School" 
            className='w-full max-h-[600px] object-cover rounded-3xl shadow-lg'
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.div
            className='absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 rounded-3xl text-white'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <h1 className='font-extrabold text-4xl sm:text-6xl mb-4'>Primary School</h1>
            <p className='font-medium text-xl sm:text-2xl'>Discover, Learn, and Grow</p>
          </motion.div>
        </div>

        {/* Card-like Sections with Staggered Animation */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 w-full'>
          
          {/* Card 1 */}
          <motion.div 
            className='p-6 bg-white  dark:bg-[#585858] rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img src={k1} alt="Learning" className='rounded-2xl mb-4' />
            <h2 className='font-bold text-3xl text-[#FF5733] mb-3'>Interactive Learning</h2>
            <p className='text-gray-700 dark:text-gray-300 text-lg'>
              Our primary school offers a vibrant learning environment where students are engaged with interactive activities, hands-on projects, and innovative teaching methods. We focus on making learning enjoyable and meaningful.
            </p>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            className='p-6 bg-white  dark:bg-[#208093] rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <img src={k2} alt="Caring Environment" className='rounded-2xl mb-4' />
            <h2 className='font-bold text-3xl text-[#33FF57] mb-3'>Caring Environment</h2>
            <p className='text-gray-700 dark:text-gray-300 text-lg'>
              We create a nurturing atmosphere where every student feels supported and valued. Our programs emphasize emotional well-being and foster a sense of community, ensuring a balanced and healthy school life.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div 
            className='p-6 bg-white  dark:bg-[#549e8e] rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <img src={k3} alt="Extracurricular" className='rounded-2xl mb-4' />
            <h2 className='font-bold text-3xl text-[#3357FF] mb-3'>Extracurricular Activities</h2>
            <p className='text-gray-700 dark:text-gray-300 text-lg'>
              Beyond academics, we offer a range of extracurricular activities that encourage students to explore their interests and talents. From sports to arts, there’s something for everyone to enjoy and excel in.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div 
            className='p-6 bg-white dark:bg-[#67a86f] rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <img src={k5} alt="Holistic Development" className='rounded-2xl mb-4' />
            <h2 className='font-bold text-3xl text-[#FF33A6] mb-3'>Holistic Development</h2>
            <p className='text-gray-700 dark:text-gray-300 text-lg'>
              We believe in holistic education that balances academic excellence with personal growth. Our programs are designed to develop not just intellect, but also character, creativity, and physical health.
            </p>
          </motion.div>
          
        </div>
      </div>
      <p className='section'>
      Primary School at our institution is more than just an academic journey; it's an adventure filled with discovery, growth, and joy. Our comprehensive approach to education nurtures young minds through a blend of interactive learning, a caring environment, and enriching extracurricular activities. We are committed to fostering not only intellectual development but also emotional well-being, creativity, and social responsibility. Here, students are encouraged to explore their passions, build lasting friendships, and develop the skills they need to succeed in all aspects of life. At our Primary School, every day is a step towards a brighter, more confident future.
      </p>
    </div>
  )
}

export default PS
