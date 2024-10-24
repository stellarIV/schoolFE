import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import science from '../../assets/science.jpg'
import math from '../../assets/math.png'
import music from '../../assets/music.jpg'
import art from '../../assets/math.png'
import sport from '../../assets/science.jpg'
import charity from '../../assets/charity.jpg'

const clubs = [
  {
    name: 'Science Club',
    image: science,
    description: 'Explore the wonders of science through experiments, field trips, and competitions. Join us to ignite your curiosity and innovate solutions to real-world problems.',
  },
  {
    name: 'Math Club',
    image: math,
    description: 'Challenge your mind with complex problems, mathematical puzzles, and inter-school competitions. Our club fosters a deep love for numbers and logical thinking.',
  },
  {
    name: 'Music Club',
    image: music,
    description: 'Express yourself through music. Whether you sing, play an instrument, or compose, the Music Club offers you a platform to perform, learn, and create.',
  },
  {
    name: 'Art Club',
    image: art,
    description: 'Unleash your creativity with the Art Club. Engage in various forms of art, from painting to sculpture, and showcase your work in exhibitions and competitions.',
  },
  {
    name: 'Sports Club',
    image: sport,
    description: 'Stay active and compete in various sports like soccer, basketball, and athletics. The Sports Club is where teamwork meets competition and fitness.',
  },
  {
    name: 'Charity Club',
    image: charity,
    description: 'Make a difference in the community by organizing charity events and drives. The Charity Club is all about giving back and helping those in need.',
  },
]

const events = [
  { date: 'September 15, 2024', title: 'Science Fair', description: 'An annual event where students showcase their scientific projects and experiments.' },
  { date: 'October 10, 2024', title: 'Math Olympiad', description: 'Compete with peers in challenging mathematical puzzles and problems.' },
  { date: 'November 5, 2024', title: 'Music Concert', description: 'A showcase of musical talents from the Music Club, featuring solos and group performances.' },
  { date: 'December 12, 2024', title: 'Art Exhibition', description: 'An exhibition of artwork created by students in the Art Club, including paintings, sculptures, and more.' },
  { date: 'January 20, 2025', title: 'Winter Sports Meet', description: 'A series of athletic events including soccer, basketball, and track and field competitions.' },
  { date: 'February 14, 2025', title: 'Charity Fundraiser', description: 'A school-wide event organized by the Charity Club to raise funds for local charities.' },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

const Events = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const scheduleRef = useRef(null)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleScroll = () => {
    const element = scheduleRef.current
    if (element) {
      const scrollTop = element.scrollTop
      const scrollHeight = element.scrollHeight - element.clientHeight
      const scrollPercent = (scrollTop / scrollHeight) * 100
      setScrollPercentage(scrollPercent)
    }
  }

  useEffect(() => {
    const element = scheduleRef.current
    if (element) {
      element.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  return (
    <div className='section dark:text-white' id='events'>
      <div className='mt-12 text-center'>
        <h3 className='text-2xl font-bold mb-4'>Upcoming Events</h3>
        <p className='text-lg'>
          Participate in exciting competitions and seminars that will be held throughout the year.
          Compete in your favorite club activities or join in on the school-wide athletic events.
        </p>
        <motion.button
          className='mt-6 px-6 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700'
          onClick={toggleExpand}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isExpanded ? 'Hide Event Schedule' : 'View Event Schedule'}
        </motion.button>
        {isExpanded && (
          <motion.div
            className='mt-6 bg-gray-100 dark:bg-gray-900 rounded-lg p-6 relative'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ overflow: 'hidden', position: 'relative' }}
          >
            <div
              style={{
                maxHeight: '20rem',
                overflowY: 'scroll',
                paddingRight: '1rem',
                scrollbarWidth: 'none', // Firefox
                msOverflowStyle: 'none', // IE and Edge
              }}
              className='scroll-container'
              ref={scheduleRef}
            >
              {events.map((event, index) => (
                <div key={index} className='mb-4'>
                  <h4 className='text-xl font-bold'>{event.date}</h4>
                  <h5 className='text-lg'>{event.title}</h5>
                  <p className='text-gray-700 dark:text-gray-300'>{event.description}</p>
                </div>
              ))}
            </div>
            <div
              className='absolute top-0 right-0 w-3 bg-white rounded-full'
              style={{
                height: '100%',
                background: `linear-gradient(to bottom, cyan ${scrollPercentage}%, white ${scrollPercentage}%)`,
              }}
            />
          </motion.div>
        )}
      </div>
      <h2 className='text-3xl font-bold text-center mt-8 mb-10'>Clubs & Activities</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {clubs.map((club, index) => (
          <motion.div
            key={index}
            className='card bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden'
            initial='hidden'
            whileInView='visible'
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <img
              src={club.image}
              alt={`${club.name}`}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-xl font-bold dark:text-black mb-2'>{club.name}</h3>
              <p className='text-gray-700 dark:text-black'>{club.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Events
