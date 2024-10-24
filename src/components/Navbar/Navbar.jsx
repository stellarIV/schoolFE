import React, { useState, useEffect } from 'react'

import {HiMenuAlt2, HiX, HiSun, HiMoon} from 'react-icons/hi'
import Navlink from './Navlink';
import MobileNavLinks from './MobileNavLinks';
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';
const navLinks = [
  {
    id: 3,
    title: 'About Us',
    href: '#',
    sublink: true,
    submenu: [
      { title: 'Our Mission', href: '/about' },
      { title: 'Leadership', href: '/leadership' },
      { title: 'Contact', href: '/contact' },

    ],
  },
  
  {
    id: 2,
    title: 'Programs',
    href: '/programs',
    sublink: true,
    submenu: [
      { title: 'Kindergarten', href: '/kg' },
      { title: 'Primary School', href: '/ps' },
      { title: 'Secondary School', href: '/ss' },
      { title: 'High School', href: '/hs' },
      // { title: 'Events', href: '/events' },
    ],
  },
  {
    id: 1,
    title: 'News & Events',
    href: '/newsevents',
    sublink: true,
    submenu: [
      { title: 'Student Life', href: '/studentLife' },
      { title: 'Teaching', href: '/teacher' },
      { title: 'Services', href: '/services' },
    ],
  },
  // {
  //   id: 4,
  //   title: 'Events',
  //   href: '/events',
  //   sublink: true,
  //   submenu: [
  //     { title: 'Competitions', href: '/competitions' },
  //     { title: 'Athletics', href: '/athletics' },
  //   ],
  // },
  {
    id: 4,
    title: 'Resources',
    href: '/courses',
    sublink: true,
    // submenu: [
    //   { title: 'Library', href: '/library' },
    //   { title: 'Bus Services', href: '/busServices' },
    //   { title: 'Labs', href: '/labs' },
    // ],
  },
];


const Navbar = () => {
    const [darkMode, setDarkMode] = useState(() => {
      return localStorage.getItem('theme') === 'dark';
    });
  
    useEffect(() => {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    }, [darkMode]);
  
    const handleToggle = () => {
      setDarkMode(!darkMode);
    };
  const [toggle, setToggle] = useState(false)
  return (
    <div className='transition-all duration-700 h-[75px] ease-in-out shadow-xl fixed w-full top-0 left-0 z-20 bg-[#9145fc] sm:bg-[#a25fff] dark:bg-[#b934de] sm:dark:bg-[#6a3a9ee1] rounded-b-xl'>
      <div>
        <div className=' py-4 mx-auto flex items-center justify-evenly px-2'>
         <div className='flex items-center gap-4 justify-between md:w-[1300px]'> 
            <div className='flex items-center gap-4'>
            <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/FFFFFF/menu--v1.png" alt="menu--v1" className=' text-3xl md:hidden cursor-pointer h-8 w-6' onClick={()=> setToggle(true)}/>
            <Link to={'/'} className='text-sm sm:text-lg flex text-[#ffffff] dark:text-[#e9e8e8] tracking-wide font-semibold xm:text-xl '>Millenium Progress Accadamy</Link>

            </div>
            <div className='md:flex items-center dark:text-[#e9e8e8] text-white hidden'>
              {navLinks.map((navLink) =>{
                return <Navlink key={navLink.id} {...navLink}/>;
              })}
            </div>
            {/* <div>
               <button className='hover:scale-125 text-nowrap hover:bg-[#68dcff] dark:hover:bg-[#0097c5] hover:text-white dark:hover:dark:text-[#e9e8e8] duration-700 py-2 px-4 font-medium text-sm border border-solid rounded-full bg-[#ffffff] dark:bg-[#d3d3d3] text-[#06c5ff] dark:text-[#0083ab]'>Sign Up</button>
            </div> */}
            <div>
            <button
      onClick={handleToggle}
      className={`relative right-1 ml-[50%] w-10 h-10 rounded-full transition-all duration-700 ease-in-out transform ${
        darkMode ? 'bg-yellow-500' : 'bg-gray-800'
      }`}
    >
      <span className="absolute inset-0 flex items-center justify-center">
        {darkMode ? (
          <HiSun className="text-white text-2xl" />
        ) : (
          <HiMoon className="text-white text-2xl" />
        )}
      </span>
      <span
        className={`absolute inset-0 w-10 h-10 rounded-full bg-opacity-50 transition-all duration-700 ease-in-out transform ${
          darkMode ? 'bg-yellow-500 scale-150' : 'bg-gray-800 scale-0'
        }`}
      ></span>
    </button>
            </div>
            {toggle && (
              <motion.div
              initial={{x: -500, opacity: 0}}
              animate={{x:0, opacity:1}}
              transtion={{duration:0.7}}
              className='fixed  md:hidden h-full w-96 top-0 left-0 z-20 dark:bg-[#281a6f] duration-700 bg-[#5231f7] text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
                {navLinks.map(navLink =>{

                  return <MobileNavLinks key={navLink.id} {...navLink} setToggle={setToggle}/>
                })}
                <HiX className='absolute right-12 top-12 text-3xl cursor-pointer' onClick={(prev) =>
                  setToggle(!prev)
                } />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
