// import React, { useState } from 'react'
// import { Link } from 'react-scroll'
// import { HiArrowCircleUp, HiArrowCircleDown } from 'react-icons/hi'
// const Navlink = ({title,href,submenu}) => {
//  const [isOpen, setIsOpen] = useState(false)
//   return (
//     <div>
//     <li onClick={()=>setIsOpen((prev)=>!prev)} className='list-none transition-all cursor-pointer mr-8  hover:border-b-4 text-nowrap duration-100 flex flex-col'>
//        <div className='flex '>

//        <Link to={href} spy={true} smooth={true} duration={500} offset={-50} className='font-semibold transition-all duration-300 pr-2' >{title}</Link> 
//        <div className='pt-1'>

//          {!isOpen?(<HiArrowCircleDown/>):(<HiArrowCircleUp/>)}
//        </div>
//        </div>
//     </li>
//     {isOpen &&(
//       <div className='dark:bg-[#8dd7ffa5]  bg-[#02a6ffa5] dark:text-black absolute top-20 flex flex-col items-start p-2 w-28 rounded-b-lg'>
//           {submenu.map((item,i)=>
//           <Link to={item.href} spy={true} smooth={true} duration={500} offset={-50} className=' hover:underline transition-all duration-300 text-sm cursor-pointer' >{item.title}
//             </Link>
//           )}
          
//         </div>
//       )}
//     </div>   
//   )
// }

// export default Navlink

import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navlink = ({ title, href, submenu }) => {
  return (
    <li className="list-none mr-8 flex flex-col relative">
      <div className="group">
        <div className="relative">
          <Link
            to={href}
            className="font-semibold transition-all duration-300 pr-2 cursor-pointer hover:border-b-4"
          >
            {title}
          </Link>
          {submenu && submenu.length > 0 && (
            <div className="hidden overflow-hidden group-hover:flex duration-300 items-start absolute left-0 top-full mt-1 p-2 w-32 rounded-b-lg">
              <motion.div
                initial={{ y: 500, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="dark:bg-[#245c7b] dark:text-white mt-4 flex text-black flex-col bg-[#ffffff]  p-2 w-28 rounded-b-lg"
              >
                {submenu.map((item, i) => (
                  <Link
                    key={i}
                    to={item.href}
                    className="hover:underline transition-all duration-300 text-xs mb-2 cursor-pointer"
                  >
                    {item.title}
                  </Link>
                ))}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </li>
  )
}

export default Navlink
