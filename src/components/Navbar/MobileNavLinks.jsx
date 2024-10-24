import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiChevronDown, HiChevronUp } from 'react-icons/hi'
import { motion } from 'framer-motion'

const MobileNavLinks = ({ title, href, submenu, setToggle }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggle = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <li className="list-none cursor-pointer mb-4">
      <div onClick={handleToggle} className="flex justify-between items-center">
        <Link
          to={href}
          className="font-semibold transition-all duration-300"
          onClick={() => setToggle((prev) => !prev)}
        >
          {title}
        </Link>
        {submenu && submenu.length > 0 && (
          <span className="ml-2">
            {isExpanded ? <HiChevronUp /> : <HiChevronDown />}
          </span>
        )}
      </div>
      {isExpanded && submenu && submenu.length > 0 && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-2 pl-4 border-l-2 border-gray-300 dark:border-gray-600"
        >
          {submenu.map((item, i) => (
            <Link
              key={i}
              to={item.href}
              className="block font-normal text-sm transition-all duration-300 py-1 dark:text-white text-white"
              onClick={() => setToggle(false)} // Close the mobile menu after clicking a link
            >
              {item.title}
            </Link>
          ))}
        </motion.div>
      )}
    </li>
  )
}

export default MobileNavLinks
