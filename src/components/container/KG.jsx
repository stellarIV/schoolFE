import React from 'react'
import { motion } from 'framer-motion'
import k1 from '../../assets/k1.jpg'
import k2 from '../../assets/k2.jpg'
import k3 from '../../assets/k3.jpg'
import k4 from '../../assets/k4.jpg'
import k5 from '../../assets/k5.jpg'

const KG = () => {
  return (
    <div className='p-3 sm:px-20 dark:text-white' id='kg'>
      <div className='place-items-center gap-8 pt-12'>
        <img src={k4} alt="" className='max-h-[700px] object-cover md:-mt-12' />
        <div className='pl-5'>
          <div className='font-bold sm:text-[2.5rem] text-[2rem] text-[#ff7b00] dark:text-[#ffab00]'>
            Welcome to Our <span className='text-[#ff1919]'>Kinder Garten School</span>
          </div>
          <p className='text-gray-700 dark:text-gray-300 text-base leading-8 px-5 pt-3'>
            Our KG school is a place where young minds blossom and creativity thrives. We believe in nurturing a love for learning through innovative and engaging methods. The journey at our primary school is filled with exploration, discovery, and a strong foundation in academics, values, and life skills. Our approach is holistic, ensuring every child receives the attention and support they need to excel.
            <br /><br />
            We foster an environment where students are encouraged to ask questions, think critically, and express themselves. The vibrant campus is designed to stimulate curiosity and imagination, with classrooms that inspire creativity and collaboration. Join us in building a brighter future, where education is not just about knowledge, but about nurturing well-rounded individuals.
          </p>
        </div>

        <div className='grid py-8 px-6 my-5 sm:grid-cols-1 md:grid-cols-3 place-items-center gap-8 bg-gradient-to-r from-[#ff7b00] to-[#ffab00] rounded-2xl shadow-xl dark:shadow-lg dark:hover:shadow-none dark:shadow-[#ff7b00] hover:shadow-none duration-700'>
          <div className='pl-5'>
            <div className='font-bold sm:text-[2.25rem] text-[1.75rem] text-white dark:text-[#fffcf0]'>
              Engaging <span className='text-[#ffef00]'>Learning</span> Experiences
            </div>
            <p className='text-white text-base leading-7'>
              Our curriculum is designed to be dynamic and adaptable, catering to the diverse needs of our students. We emphasize interactive and experiential learning, where students engage with concepts through hands-on activities, group projects, and real-world applications. 
              <br />Our goal is to create a learning environment that is both challenging and supportive, where students are motivated to achieve their best.
            </p>
          </div>
          <div className='p-4 md:col-span-2 md:row-start-1 overflow-hidden object-fill xm:w-full xm:h-full place-items-start'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{duration: 3.5}}
            >
              <img src={k1} alt="" className='md:col-span-2' />  
            </motion.div>
          </div>
        </div>

        <div className='grid py-8 px-6 my-5 md:grid-cols-3 sm:grid-cols-1 place-items-center gap-8 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] rounded-2xl shadow-xl dark:shadow-lg dark:hover:shadow-none dark:shadow-[#00c6ff] hover:shadow-none duration-700'>
          <div>
            <div className='font-bold sm:text-[2.25rem] text-[1.75rem] text-white dark:text-[#e0f7ff]'>
              Caring <span className='text-[#ffff00]'>Environment</span>
            </div>
            <p className='text-white text-base leading-7'>
              At our Kinder Garten, we prioritize the emotional and social well-being of our students. Our caring environment ensures that every child feels safe, valued, and supported. We encourage positive relationships, teamwork, and respect for others.
              <br />Through our various programs and initiatives, we aim to develop compassionate and responsible individuals who are prepared to make a difference in the world.
            </p>
          </div>
          <div className='p-4 md:col-span-2 overflow-hidden object-fill xm:w-full xm:h-full place-items-start'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{duration: 3.5}}
            >
              <img src={k2} alt="" />  
            </motion.div>
          </div>
        </div>

        <div className='grid py-8 px-6 my-5 sm:grid-cols-1 md:grid-cols-3 place-items-center gap-8 bg-gradient-to-r from-[#ff00d4] to-[#c717ff] rounded-2xl shadow-xl dark:shadow-lg dark:hover:shadow-none dark:shadow-[#ff00d4] hover:shadow-none duration-700'>
          <div className='pl-5'>
            <div className='font-bold sm:text-[2.25rem] text-[1.75rem] text-white dark:text-[#f0e4ff]'>
              Exciting <span className='text-[#00ff9d]'>Adventures</span> Await!
            </div>
            <p className='text-white text-base leading-7'>
              Learning with us, extends beyond the classroom. We offer a wide range of extracurricular activities, including sports, arts, and community service, to ensure our students develop a well-rounded skill set.
              <br />Our exciting programs are designed to ignite passion, build confidence, and foster a lifelong love for learning and exploration.
            </p>
          </div>
          <div className='p-4 md:col-span-2 md:row-start-1 overflow-hidden object-fill xm:w-full xm:h-full place-items-start'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{duration: 3.5}}
            >
              <img src={k3} alt="" className='md:col-span-2' />  
            </motion.div>
          </div>
        </div>

        <div className='grid py-8 px-6 my-5 md:grid-cols-3 sm:grid-cols-1 place-items-center gap-8 bg-gradient-to-r from-[#00ffa2] to-[#006aff] rounded-2xl shadow-xl dark:shadow-lg dark:hover:shadow-none dark:shadow-[#00ffa2] hover:shadow-none duration-700'>
          <div>
            <div className='font-bold sm:text-[2.25rem] text-[1.75rem] text-white dark:text-[#c3fff5]'>
              Discover the <span className='text-[#ff9100]'>Joy</span> of Learning
            </div>
            <p className='text-white text-base leading-7'>
              We believe that learning should be a joyful experience. Our KG school is a place where students discover the joy of learning through creative teaching methods, engaging activities, and a supportive community. 
              <br />Join us on a journey where education is an adventure, and every day is filled with opportunities to explore, learn, and grow.
            </p>
          </div>
          <div className='p-4 md:col-span-2 overflow-hidden object-fill xm:w-full xm:h-full place-items-start'>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{duration: 3.5}}
            >
              <img src={k5} alt="" />  
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default KG
