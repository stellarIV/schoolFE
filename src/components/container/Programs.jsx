import React from 'react'

import kindergartenImg from '../../assets/k3.jpg'  // Replace with your actual image paths
import primarySchoolImg from '../../assets/m1.jpg'
import secondarySchoolImg from '../../assets/m2.jpg'
import highSchoolImg from '../../assets/h1.jpg'

const Programs = () => {
  return (
    <div>
      

      <div className='section mt-16 px-6 py-12 bg-gradient-to-r from-yellow-500 to-orange-500'>
        <h1 className='text-4xl font-extrabold text-center dark:text-white mb-12'>
          Our Educational Programs
        </h1>
        
        <div className='space-y-12'>
          {/* Kindergarten */}
          <div className='flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
            <img src={kindergartenImg} alt="Kindergarten" className='w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0' />
            <div className='md:w-1/2 md:pl-6'>
              <h2 className='text-3xl font-semibold text-yellow-600 mb-4'>Kindergarten (KG)</h2>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                Kindergarten is the first step in a child's formal education, focusing on socialization, basic skills, and foundational knowledge. Activities are designed to be fun and engaging to foster early learning and development.
              </p>
            </div>
          </div>

          {/* Primary School */}
          <div className='flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
            <img src={primarySchoolImg} alt="Primary School" className='w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0' />
            <div className='md:w-1/2 md:pl-6'>
              <h2 className='text-3xl font-semibold text-orange-600 mb-4'>Primary School (PS)</h2>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                Primary School education covers the fundamental subjects such as reading, writing, mathematics, and science. It builds the essential skills required for further learning and personal development.
              </p>
            </div>
          </div>

          {/* Secondary School */}
          <div className='flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
            <img src={secondarySchoolImg} alt="Secondary School" className='w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0' />
            <div className='md:w-1/2 md:pl-6'>
              <h2 className='text-3xl font-semibold text-red-600 mb-4'>Secondary School (SS)</h2>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                Secondary School provides advanced education in various subjects, including sciences, humanities, and social sciences. Students develop critical thinking, analytical skills, and prepare for higher education or vocational training.
              </p>
            </div>
          </div>

          {/* High School */}
          <div className='flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg'>
            <img src={highSchoolImg} alt="High School" className='w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0' />
            <div className='md:w-1/2 md:pl-6'>
              <h2 className='text-3xl font-semibold text-blue-600 mb-4'>High School (HS)</h2>
              <p className='text-gray-700 dark:text-gray-300 mb-4'>
                High School prepares students for post-secondary education and the workforce. It offers specialized courses in various fields and focuses on developing skills in leadership, communication, and problem-solving.
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Programs
