import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='section dark:text-white' id='contact'>
      <section data-mapbox>
    <figure>
        <iframe className="w-full rounded-2xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26293.21406353469!2d37.40101951028742!3d11.586967778954184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1644cf36b60a3589%3A0x16cecef4301f0cbf!2sMillennium%20Progress%20Academy!5e0!3m2!1sen!2set!4v1724305323575!5m2!1sen!2set" width="400" height="300" loading="lazy" ></iframe>
    </figure>
</section>

      <div className='text- center max-w-[600px] mx-auto'>
        <div  className='sm:text 3sx text-2xl font-bold mb-5'>
          Our Contact 
        </div>
        <p className='text-sm leading-7'>
        For any inquiries or further information, please feel free to contact us at Sunshine Academy. Our main office is located at 123 Learning Lane, Education City. You can reach us by phone at (555) 123-4567 or via email at info@sunshineacademy.edu. Our office hours are Monday to Friday, from 8:00 AM to 4:00 PM. We look forward to assisting you and providing any information you may need about our programs and admissions process. Thank you for considering Sunshine Academy for your educational needs!
        </p>
      </div>
      <div className="flex flex-col md:flex-row p-8 space-y-8 md:space-y-0 md:space-x-8">
            <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Get in touch</h2>
                <p className="text-gray-600 mb-6">
                For any inquiries or further information, please feel free to contact us at SOS Hermann Gmeiner. Our main office is located at 123 Learning Lane, Education City. Thank you for considering Sunshine Academy for your educational needs!
                </p>
                <div className="space-y-4">
                    <div>
                        <p className="text-gray-800 font-semibold">545 Kebele x</p>
                        <p className="text-gray-500">Bahir Dar, Felege Hiwot</p>
                    </div>
                    <div>
                        <p className="text-gray-800 font-semibold">+251 934 312 439</p>
                    </div>
                    <div>
                        <p className="text-gray-800 font-semibold">hello@example.com</p>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <motion.form 
                initial={{scale:0}}
                whileInView={{scale:1}}
                transition={{duration:0.5}}
                 className="space-y-4">
                    <div className="flex space-x-4">
                        <input 
                            type="text" 
                            placeholder="First name" 
                            className="w-1/2 p-3 border border-gray-300 rounded-md dark:border-black dark:bg-[#00467b]"/>
                        <input 
                            type="text" 
                            placeholder="Last name" 
                            className="w-1/2 p-3 border border-gray-300 rounded-md dark:border-black dark:bg-[#00467b]"/>
                    </div>
                    <input 
                        type="email" 
                        placeholder="Email"
                         
                        className="w-full p-3 border border-gray-300 rounded-md dark:border-black dark:bg-[#00467b]"/>
                    <input 
                        type="text" 
                        placeholder="Phone number" 
                        className="w-full p-3 border border-gray-300 rounded-md dark:border-black dark:bg-[#00467b]" />
                    <textarea 
                        placeholder="Message" 
                        className="w-full p-3 border dark:border-black dark:bg-[#00467b] border-gray-300 rounded-md h-32 "/>
                    <button type="submit" 
                        className="w-full p-3 bg-[#009dff] dark:hover:bg-[#0058b5] dark:hover:text-white dark:text-[#0067b1] dark:bg-[#d7d7d7] text-white font-semibold rounded-md duration-700 hover:bg-blue-700">
                        Send message
                    </button>
                </motion.form>
            </div>
        </div>
    </div>
  )
}

export default Contact
