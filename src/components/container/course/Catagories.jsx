import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Catagories = ({ id, icon, category, link }) => {
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
        <div>{category}</div>
        {link ? (
          <Link to={link} className='text-sm text-gray hover:underline dark:hover:text-white hover:text-[#02b3ff] duration-700'>View More</Link>
        ) : (
          <span className='text-sm text-gray hover:underline dark:hover:text-white hover:text-[#02b3ff] duration-700'>View More</span>
        )}
      </div>
    </motion.div>
  )
}

export default Catagories
