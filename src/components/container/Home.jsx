import React from 'react';
import video from '../../assets/hvid.mp4';
import logo from '../../assets/logo3.png';
import { motion } from 'framer-motion';
import ScrollableImages from '../effects/ScrollableImages';
import FadeInSection from '../effects/FadeInSection';


const Home = () => {
  
  return (
    <div className='dark:text-white  overflow-hidden' id='home'>
      <div className='flex flex-col items-center justify-center'>
        <div className='w-full'>
          <video src={video} autoPlay loop muted className='w-full mt-16 sm:mt-0 max-h-[800px] object-cover' />
        </div>
        <div className='text-white ml-9 w-full max-w-xl -mt-[40%] px-5'>
          <div className='md:mb-5 flex items-center font-bold xs:text-3xl sm:rext-6xl text-xl pt-4 duration-500'>
            Making the Future Bright
          </div>
          <div className='hidden sm:text-lg sm:flex'>
            Strengthening our heartfelt assistance to every child, nourishing them with an immense level of knowledge to make them a better version of themselves.
          </div>
          <br />
         
          <br /><br /><br /><br /><br className='hidden sm:flex' /><br /><br /><br /><br /><br/><br className='hidden sm:flex' />
        </div>
        <div className='px-[10%] flex gap-4 justify-start w-full pt-3'>
          <div className='md:mt-40 xl:mt-[190px] object-cover'>
            <img src={logo} alt="sosLogo" className='mb-3 h-20' />
          </div>
          <div className='text-3xl md:mt-40 xl:mt-[194px] sm:text-2xl font-semibold dark:text-white pt-6 text-[#211b8f]'>
            MPA
          </div>
        </div>
        <FadeInSection direction="right">
        At Millennium Progress Academy, we believe in nurturing young minds, fostering excellence, and shaping future leaders. Our commitment to quality education, holistic development, and community engagement sets us apart. Here’s what makes us unique:
        </FadeInSection>
        <FadeInSection direction="left">
        Our rigorous academic programs are designed to challenge and inspire. From early childhood education to secondary levels, we provide a comprehensive curriculum that emphasizes critical thinking, creativity, and problem-solving. Our dedicated teachers create an engaging learning environment where students thrive. Explore our modern campus equipped with spacious classrooms, advanced science labs, and a well-stocked library. Our commitment to technology integration ensures that students have access to the latest tools for learning. Whether it’s interactive whiteboards or digital resources, we prepare students for the digital age.
        </FadeInSection>
        <FadeInSection direction="right">
          
          We believe in a strong partnership between parents, teachers, and students. Regular communication, parent-teacher conferences, and involvement in school activities create a supportive network. Together, we nurture confident, well-rounded individuals ready to make a positive impact on the world.
        </FadeInSection>
        <div className='flex justify-center w-full'>
          <ScrollableImages />
        </div>
        <br /><br />
        <FadeInSection direction="right">
        At Millennium Progress Academy, diversity is celebrated. We embrace students from various backgrounds, cultures, and abilities. Our inclusive approach fosters empathy, understanding, and global citizenship. Students learn not only from textbooks but also from each other’s experiences. <br />
        Education extends beyond the classroom. Our vibrant extracurricular programs include sports, arts, music, and clubs. Whether it’s joining the debate team, participating in a robotics competition, or playing soccer, students discover their passions and develop essential life skills.
        </FadeInSection>
      </div>
    </div>
  );
};

export default Home;
