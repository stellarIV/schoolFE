import React from 'react'
import { motion } from 'framer-motion'
import { Events } from '../index'
import s1 from '../../assets/s1.jpg'
import s2 from '../../assets/s2.jpg'
import s3 from '../../assets/s3.png'
import s4 from '../../assets/s4.jpg'
import s5 from '../../assets/e1.jpg'
import s6 from '../../assets/e4.jpg'

const StudentLife = () => {
  
  return (
    <div className='p-3 sm:px-20 dark:text-white' id='studentLife'>
      <br />
       <div className=' place-items-center gap-8 pt-12'>
        <div className='pl-5'>
          <div className='font-semibold sm:text-[1.875rem] text-[1.5rem] '>
          Your <span className='text-[#0df] '>Home</span> <br className='sm:hidden' />Away From Home
          </div>
          <p className='text-grey text-sm leading-7 px-5 pt-3'>Life at Marist outside the classroom offers a wealth of opportunity for personal growth and development that supports and enhances students' academic experience. From exciting trips to Broadway shows to volunteering at a local elementary school or food pantry, getting a massage at the annual Wellness Fair, attending a workshop on stress management in a residence hall, or participating with hundreds of fellow students in the Relay for Life, there are countless activities from which to choose. <br /><br />

Consistent with the Marist College Mission, the sense of community and the sense of service to others is important to us. Both the philosophy and the staff in the Division of Student Affairs support the development of the whole person: intellectually, socially, physically, and spiritually. Our programs and services are designed to promote self-discovery, leadership development, healthy behaviors, and social responsibility as well as enjoyment. <br /><br />

You'll make great friends, you'll learn about yourself and the world, and you'll grow in all aspects of your life. And we'll be there with support along the way, with professionals like mentors, residence directors, counselors, security, and medical staff should the need arise.</p>
<div className='pt-3 font-semibold sm:text-[1.875rem] text-[1.5rem] '>
          Programs & Features
          </div>
        </div>
        <div className=' justify-center grid sm:grid-cols-2 md:grid-cols-4 p-4 md:w- md:object-cover gap-3 dark:text-black'>
        <div className='bg-white dark:bg-[#cdcdcd] rounded-xl'>
        <img src={s1} alt="" className='h-72 p-2 md:w- md:object-cover max-w-96 hover:saturate-150 duration-500 ' />
        <div className='flex justify-between px-3 '>
          <div className='text-sm mb-3 '>Student Services</div>
          <img src="https://img.icons8.com/windows/32/sort-right.png" alt="sort-right" className='w-5 h-5 cursor-pointer' onClick=''/>
        </div>
        </div>
        <div className='bg-white dark:bg-[#cdcdcd]  rounded-xl'>
        <img src={s2} alt="" className='h-72 p-2 md:w- md:object-cover max-w-96 hover:saturate-150 duration-500 ' />
        <div className='flex justify-between px-3 '>
          <div className='text-sm mb-3'>Student Involvement</div>
          <img src="https://img.icons8.com/windows/32/sort-right.png" alt="sort-right" className='w-5 h-5 cursor-pointer'/>
        </div>
        </div>
        <div className='bg-white dark:bg-[#cdcdcd]  rounded-xl'>
        <img src={s3} alt="" className='h-72 object-top object-cover p-2 md:w- md:object-cover max-w-96 hover:saturate-150 duration-500  ' />
        <div className='flex justify-between px-3 '>
          <div className='text-sm mb-3'>
          Athletics
          </div>
          <img src="https://img.icons8.com/windows/32/sort-right.png" alt="sort-right" className='w-5 h-5 cursor-pointer'/>
        </div>
        </div>
        <div className='bg-white dark:bg-[#cdcdcd]  rounded-xl'>
        <img src={s4} alt="" className='h-72 p-2 md:w- md:object-cover max-w-96 hover:saturate-150 duration-500 ' />
        <div className='flex justify-between px-3 '>
          <div className='text-sm mb-3'>Experimentiation</div>
          <img src="https://img.icons8.com/windows/32/sort-right.png" alt="sort-right" className='w-5 h-5 cursor-pointer'/>
        </div>
        </div>
        </div>
        


        <div className='grid sm:grid-cols-2 place-items-center gap-8'>
        <div className='pl-5'>
          <div className='font-semibold sm:text-[1.875rem] text-[1.5rem] '>
              What <span className='text-[#0df] '>Our Students</span> <br />Get 
          </div>
          <p className='text-grey text-sm leading-7'>
          Education is the foundation of our future, and an ideal school plays a crucial role in shaping young minds. My vision of an ideal school is a place where learning is engaging, inclusive, and holistic, fostering both academic excellence and personal growth.
          <br /> Our school is located in a serene environment, surrounded by nature. The campus is equipped with modern facilities, including spacious classrooms, well-stocked libraries, advanced science and computer labs, and expansive sports fields. The classrooms are designed to be bright and airy, with large windows that let in natural light, creating a conducive atmosphere for learning.</p>
        </div>
        <div className='p-4 md:w-3/4 sm:row-start-1  overflow-hidden'>
        <motion.img
        initial={{ opacity: 0, x:-300}}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{duration: 2.5}}
         src={s5} alt=""  />  
        
        
        </div>
        <p className='text-grey text-sm leading-7'>
        The curriculum in our school is well-rounded, balancing academics with extracurricular activities. Students have the opportunity to explore a wide range of subjects, from mathematics and science to arts and humanities. The school also offers various clubs and organizations, such as debate club, drama society, and robotics team, allowing students to pursue their interests and develop new skills.
        <br />My ideal school places a strong emphasis on values such as respect, empathy, and integrity. It fosters a sense of community, where every student feels valued and supported. The school promotes inclusivity and diversity, celebrating different cultures and backgrounds. Regular community service projects and environmental initiatives teach students the importance of giving back and taking care of our planet.
        </p>
        <div className='p-4 md:w-3/4 overflow-hidden '>
        <motion.img
        initial={{ opacity: 0, x:300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{duration: 2.5}}
        
         src={s6} alt="" className='  sm:pt-8' />  
        
        </div>
       
      </div>




      </div>
      {/* <div>
       <Events/>
      </div> */}
    </div>
  )
}

export default StudentLife
