import React from 'react'
import t1 from '../../assets/t1.png'
import t2 from '../../assets/t2.png'
import t3 from '../../assets/t4.png'
import { Link } from 'react-router-dom'

const Teacher = () => {
  return (
    <div className='section dark:text-white' id='teacher'>
      <div className='grid sm:grid-cols-2 place-items-center gap-8'>
        <div className='pl-5'>
          <div className='font-semibold sm:text-[1.875rem] text-[1.5rem] '>
              The <span className='text-[#0df] '>Competative Teachers</span> <br />Working with Us! 
          </div>
          <p className='text-grey text-sm leading-7'>In our school, teachers use innovative and interactive teaching methods. They incorporate technology into their lessons, using smart boards and educational software to make learning more dynamic and engaging. Teachers encourage students to think critically and creatively, rather than just memorizing facts. Group projects, hands-on experiments, and field trips are integral parts of the curriculum, providing students with practical knowledge and real-world experiences.</p>
        </div>
        <div className='p-4 md:w-3/4 sm:row-start-1'>
        <img src={t1} alt="" />
        </div>
        <p className='text-grey text-sm leading-7'>
        To attract and engage students, teachers should create a welcoming and inclusive classroom environment where every student feels valued. Demonstrating enthusiasm and passion for the subject matter can significantly boost students’ interest and motivation. Incorporating interactive activities, such as group projects and hands-on experiments, makes learning dynamic and engaging. Utilizing technology and multimedia resources can further enhance the learning experience. Providing students with choices in their assignments fosters a sense of autonomy and investment in their education. Connecting lessons to real-life applications helps students see the relevance of their studies. Encouraging questions and curiosity, along with using positive reinforcement, builds a supportive and stimulating learning atmosphere. By being approachable and supportive, teachers can build strong relationships with their students, making learning both enjoyable and effective.
        </p>
        <div className='p-4 md:w-3/4 '>
        <img src={t2} alt="" />
        </div>
        <div>
        <div className='font-semibold sm:text-[1.875rem] text-[1.5rem] '>
              Become <span className='text-[#0df] '>An Instructor</span> <br /> of Our school 
          </div>
          <p className='text-grey text-sm leading-7'>
          We are excited to announce a range of rewarding job opportunities for passionate and dedicated teachers! Our institution is committed to fostering a dynamic and inclusive learning environment where educators can thrive and make a significant impact on students’ lives. We offer competitive salaries, professional development programs, and a supportive community that values innovation and collaboration. Whether you are an experienced teacher or a recent graduate, we invite you to join our team and contribute to shaping the future of education. Explore the possibilities and take the next step in your teaching career with us!
          </p><br />
          <Link href='mailto:MPA@gmail.org' className='py-3 px-4 rounded-xl shadow-lg hover:scale-125 hover:bg-white hover:text-[#00bfff] duration-700 bg-[#00bfff] dark:bg-[#ffffff] dark:text-black text-white dark:hover:bg-[#0088b5] dark:hover:text-white'>
            Apply for Job
          </Link>
        </div>
        <div className='p-4 md:w-3/4 sm:row-start-3'>
        <img src={t3} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Teacher
