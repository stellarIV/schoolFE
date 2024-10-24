import React from 'react'
import course from '../../../assets/cors.jpg'
import Catagories from './Catagories';
import CourseItems from './CourseItems';



export const categories = [
  {
    id: 8,
    icon: 'https://img.icons8.com/ios-filled/50/000000/microscope.png', // Biology
    category: 'Natural Sciences',
    link: '/natural-sciences',
  },
  {
    id: 6,
    icon: 'https://img.icons8.com/ios-filled/50/000000/scales.png', // Civics
    category: 'Social Sciences',
    link: '/social-sciences',
  },
]
export const courses = [
  {
    id: 1,
    icon: 'https://img.icons8.com/ios-filled/50/000000/calculator.png', // Math
    category: 'Math',
    resources: [
      { name: 'Khan Academy - Mathematics', link: 'https://www.khanacademy.org/math' },
    ],
  },
  {
    id: 4,
    icon: 'https://img.icons8.com/ios-filled/50/000000/chemical-plant.png', // Chemistry
    category: 'Chemistry',
    resources: [
      { name: 'Khan Academy - Chemistry', link: 'https://www.khanacademy.org/science/chemistry' },
    ],
  },
  {
    id: 5,
    icon: 'https://img.icons8.com/ios-filled/50/000000/globe.png', // Geography
    category: 'Geography',
    resources: [
      { name: 'Khan Academy - Geography', link: 'https://www.khanacademy.org/humanities/seeing-america-sh/x35b7de5e9cd6796d:theme-geography-and-the-environment' },
    ],
  },
  // Add more courses with resources here
  {
    id: 2,
    icon: 'https://img.icons8.com/ios-filled/50/000000/open-book.png', // English
    category: 'English',
    resources: [
      { name: 'MIT OpenCourseWare - Literature', link: 'https://ocw.mit.edu/courses/literature/' },
    ],
  },
  {
    id: 8,
    icon: 'https://img.icons8.com/ios-filled/50/000000/microscope.png', // Biology
    category: 'Biology',
    resources: [
      { name: 'MIT OpenCourseWare - Biology', link: 'https://ocw.mit.edu/courses/biology/' },
    ],
  },
  {
    id: 3,
    icon: 'https://img.icons8.com/ios-filled/50/000000/lightning-bolt.png', // Physics
    category: 'Physics',
    resources: [
      { name: 'Khan Academy - Physics', link: 'https://www.khanacademy.org/science/physics' },
    ],
  },
  {
    id: 6,
    icon: 'https://img.icons8.com/ios-filled/50/000000/scales.png', // Civics
    category: 'Civics',
    resources: [
      
      { name: 'iCivics', link: 'https://www.icivics.org/' },
    ],
  },
  {
    id: 7,
    icon: 'https://img.icons8.com/ios-filled/50/000000/museum.png', // History
    category: 'History',
    resources: [
      { name: 'Khan Academy - World History', link: 'https://www.khanacademy.org/humanities/world-history' },
    ],
  },
]


const Courses = () => {
  return (
    <div>
      <div className='section dark:text-white' id='course'>
        <div className='text-center'>
          <div className="w-full object-cover flex justify-center items-center">
            <img src={course} alt="pic" className='max-w-[800px] max-h-[800px] rounded-3xl' />
          </div>
          <div className=' dark:text-[#0099c3] sm:text-3xl text-2xl font-semibold mb-5'>
            Our Standardized <span className='text-[#0abaff] dark:text-[#dedede] '>Catagories</span>
          </div>
          <p className='text-sm text-grey leading-7 max-w-[700px] mx-auto'>
            The curriculum in my ideal school is well-rounded, balancing academics with extracurricular activities. Students have the opportunity to explore a wide range of subjects, from mathematics and science to arts and humanities. The school also offers various clubs and organizations, such as debate club, drama society, and robotics team, allowing students to pursue their interests and develop new skills.
          </p>
        </div>
        <div className='grid sm:grid-cols-2 mt-12 gap-8'>
          {categories.map(category => {
            return <Catagories key={category.id} {...category} />
          })}
        </div>
        <div className='text-2xl sm:text-3xl hidden md:flex w-full justify-center font-semibold pt-6'>Trending Courses!</div>
        <div className='md:grid hidden md:grid-cols-4 mt-12 gap-8'>
          {courses.map(cours => {
            return <CourseItems key={cours.id} {...cours} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Courses


// const Courses = () => {
//   return (
//     <div>
//       {/* <Navbar/> */}
//     <div className='section dark:text-white' id='course'>
//       <div className='text-center'>
//       <div className="w-full object-cover flex justify-center items-center">
//           <img src={course} alt="pic" className='max-w-[800px] max-h-[800px] rounded-3xl' />
//         </div>
//     <div className=' dark:text-[#0099c3] sm:text-3xl text-2xl font-semibold mb-5'>
//       Our Standardized <span className='text-[#0abaff] dark:text-[#dedede] '>Catagories</span>
//     </div>
//     <p className='text-sm text-grey leading-7 max-w-[700px] mx-auto'>
//     The curriculum in my ideal school is well-rounded, balancing academics with extracurricular activities. Students have the opportunity to explore a wide range of subjects, from mathematics and science to arts and humanities. The school also offers various clubs and organizations, such as debate club, drama society, and robotics team, allowing students to pursue their interests and develop new skills.
//     </p>
//       </div>
//       <div className='grid sm:grid-cols-2 mt-12 gap-8'>
//         {categories.map(category=>{
//           return <Catagories key={category.id} {...category} />
//         })}
//       </div>
//       <div className='md:grid hidden md:grid-cols-4 mt-12 gap-8'>
//         {courses.map(cours=>{
//           return <CourseItems key={cours.id} {...cours} />
//         })}
//       </div>
//     </div>
//     {/* <Footer/> */}
//     </div>
//   )
// }

// export default Courses
