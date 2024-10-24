import React from 'react';
import { motion } from 'framer-motion';
import s1 from '../../assets/m2.jpg';
import s2 from '../../assets/k2.jpg';
import s3 from '../../assets/k3.jpg';
import s4 from '../../assets/k4.jpg';

const SS = () => {
  return (
    <div className='p-3 sm:px-20 dark:text-white' id='MiddleSchool'>
     <br /><br /><br />
      
      {/* Title Section with Gradient Text */}
      <div className='mt-8'>
        <motion.h2
          initial={{ backgroundPosition: '200% center' }}
          animate={{ backgroundPosition: '0% center' }}
          transition={{ duration: 3, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          className='font-semibold sm:text-[2rem] text-[1.75rem] bg-gradient-to-r from-[#ff0080] via-[#7700ff] to-[#ff0080] bg-clip-text text-transparent'>
          Discover Our Middle School Experience
        </motion.h2>
      </div>
      
      {/* Text Section with Detailing */}
      <div className='text-grey text-sm leading-7 px-5 pt-3'>
        <p className='mb-6'>
          Middle School at our institution is a time of growth, exploration, and deepening understanding. Our curriculum is designed to challenge and inspire students, fostering critical thinking and a passion for lifelong learning. From science labs to art studios, students are encouraged to pursue their interests and excel in both academics and extracurricular activities.
        </p>
        <p className='mb-6'>
          Our dedicated staff is committed to supporting every student, providing guidance and mentorship as they navigate this crucial stage of their education. We emphasize the development of strong character, leadership skills, and social responsibility, ensuring that our students are well-prepared for the challenges of the future.
        </p>
        <p>
          With state-of-the-art facilities and a vibrant school community, our Middle School offers an environment where students can thrive, discover their potential, and prepare for the next steps in their educational journey.
        </p>
      </div>
      
      {/* Image and Content Blocks with Gradual Color Change */}
      <div className='grid py-8 px-6 my-5 md:grid-cols-3 sm:grid-cols-1 place-items-center gap-8'>
        <motion.div
          initial={{ backgroundColor: '#ff0080' }}
          animate={{ backgroundColor: '#00c3ff' }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          className='p-6 rounded-2xl shadow-2xl hover:shadow-none duration-700'
        >
          <div className='font-semibold text-[1.5rem] sm:text-[1.875rem]'>
            Academic Excellence
          </div>
          <p className='text-grey text-sm leading-7 mt-3'>
            Our rigorous academic programs prepare students for success in higher education and beyond. With a focus on critical thinking, problem-solving, and collaboration, we nurture the skills needed for a rapidly changing world.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3.5 }}
          className='overflow-hidden object-fill w-full h-full'
        >
          <img src={s1} alt="" className='rounded-2xl shadow-lg'/>
        </motion.div>
        
        <motion.div
          initial={{ backgroundColor: '#7700ff' }}
          animate={{ backgroundColor: '#ff0080' }}
          transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' }}
          className='p-6 rounded-2xl shadow-2xl hover:shadow-none duration-700'
        >
          <div className='font-semibold text-[1.5rem] sm:text-[1.875rem]'>
            Holistic Development
          </div>
          <p className='text-grey text-sm leading-7 mt-3'>
            Beyond academics, our programs focus on the holistic development of each student, promoting physical health, emotional well-being, and social skills through a variety of activities and experiences.
          </p>
        </motion.div>
      </div>
      <div className='text-grey text-base leading-8 px-5 pt-6'>
        <p className='mb-6'>
          At our Middle School, we focus on nurturing a deep understanding of various subjects while encouraging students to think critically and creatively. Our well-rounded curriculum ensures that students are prepared not only for academic success but also for the challenges they will face in life beyond the classroom.
        </p>
        <p className='mb-6'>
          We believe in the importance of a holistic education, which is why we offer a wide range of extracurricular activities that help develop leadership skills, teamwork, and a sense of community. From sports to arts, students have the opportunity to explore their passions and discover new interests.
        </p>
        <p>
          With dedicated teachers, state-of-the-art facilities, and a supportive learning environment, our Middle School is the perfect place for students to grow, learn, and achieve their full potential.
        </p>
      </div>
    </div>
  );
}

export default SS;
