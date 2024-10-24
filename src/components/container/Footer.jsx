import { motion } from 'framer-motion'
import React from 'react'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsTelegram,
} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <motion.div 
    initial={{marginTop: 300 }}
    whileInView={{marginTop: 0}}
    transition={{duration: 1, once: true, delay:0.3}}
    className='bg-[#6600ff] dark:bg-[#421e7a] overflow-hidden p-10 align-text-bottom'
    >
      <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-items-start gap-8 text-white '>
        <div>
          <div className='font-semibold mb-6'>
Get Started
          </div>
          <p className='text-sm'>
          Remember to customize the appearance and behavior according to your app’s design. If you encounter any specific issues or need further assistance, feel free to ask! 
          </p>
        </div>
        <div>
          <div className='font-semibold mb-6'>
            School
          </div>
          <div className='flex flex-col gap-4'>
          <Link to={'/privacypolicy'} className='text-sm hover:underline'>Privacy Policy</Link>
          {/* <Link to={'/sitmap'} className='text-sm hover:underline'>Sitemap</Link> */}
          <Link to={'/careers'} className='text-sm hover:underline'>Careers</Link>
          <Link to={'/termsandconditions'} className='text-sm hover:underline'>Terms & Conditions</Link>
          </div>
          </div>
          <div>
            <div className='font-semibold mb-6'> 
              Follow Us
            </div>
            <div className='text-sm mb-4 flex-wrap'>
              MPA@gmail.org
            </div>
            <div className='text-sm mb-4'>
              +251 945 672 324
            </div>
            <div className='flex gap-4 mt-4'>
              <a href="" className='hover:scale-125 text-xl duration-700'><BsFacebook/></a>
              <a href="" className='hover:scale-125 text-xl duration-700'><BsInstagram/></a>
              <a href="" className='hover:scale-125 text-xl duration-700'><BsTelegram/></a>
              <a href="" className='hover:scale-125 text-xl duration-700'><BsTwitter/></a>
            </div>
        </div>
        <div>
          <div className='font-semibold mb-6'>
            Website Developer
          </div>
          <div className='text-sm mb-4 flex-wrap'>
              Name: Biruk Temesgen
            </div>
          <div className='text-sm mb-4 flex-wrap'>
              Email: Biruktml@gmail.com
            </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Footer