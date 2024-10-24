import React from 'react'
import { motion } from 'framer-motion'

const CourseItems = ({ id, icon, category, resources }) => {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-w-[200px]"
      viewport={{ once: true }}
    >
      <div className='flex items-center flex-col gap-4 bg-white dark:bg-[#09466a] p-8 rounded-md hover:scale-110 duration-700'>
        <div><img src={icon} alt="" className='w-10'/></div>
        <div className='font-semibold'>{category}</div>
        <ul className='text-sm text-gray dark:text-white list-disc list-inside'>
          {resources.map((resource, index) => (
            <li key={index}><a href={resource.link} target="_blank" rel="noopener noreferrer" className='hover:underline hover:text-[#02b3ff] duration-700'>{resource.name}</a></li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default CourseItems
