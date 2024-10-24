import React from 'react';
import principal from '../../assets/principals.jpg';

const About = () => {
  return (
    <div className='section dark:text-white' id='about'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
        <div className="border-[3px] p-5 rounded-xl border-solid border-[#02f2ff]">
          <img src={principal} alt="Principal" className='w-full h-auto rounded-lg' />
        </div>
        <div>
          <div>
            <div className='font-semibold sm:text-[1.875rem] text-[1.5rem] mb-5'>
              Our Mission and Vision
            </div>
            <p className='text-lg font-semibold mb-4'>
              <span className='text-[#00d5ff] dark:text-[#00a2c3]'>Mission:</span>
            </p>
            <p className='text-sm text-gray-700 dark:text-gray-300 leading-7 mb-6'>
              Millennium Progress Academy is a premier private college preparatory boarding school for the country’s most promising and motivated secondary school students, admitted independent of financial circumstances to the extent possible. Our immediate purpose is to provide our students a world-class education that enables them to reach their highest potential as critical thinkers, enterprising young problem-solvers, and purposeful, community-minded individuals.
            </p>
            <p className='text-lg font-semibold mb-4'>
              <span className='text-[#00d5ff] dark:text-[#00a2c3]'>Vision:</span>
            </p>
            <p className='text-sm text-gray-700 dark:text-gray-300 leading-7 mb-6'>
              Our broader goal is impact, both by advancing and modeling innovative, student-centered approaches to teaching and learning, and by inculcating among our students a commitment to the service of their various communities—be they local, national, or global—as engaged citizens and effective leaders. Millennium Progress Academy is co-educational and secular and strives to reflect Ethiopia’s rich geographic and cultural diversity. We know that embracing that diversity is critical to Ethiopia’s future.
            </p>
            
            {/* <button className='hover:text-white hover:border-[#00b7ff] hover:bg-[#00b5fc] dark:hover:bg-[#0086bb] duration-700 py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold'>
              Know More
            </button> */}
          </div>
        </div>
      </div>
      <p className='text-sm text-gray-700 dark:text-gray-300 leading-7 mb-6 section max-w-[800px]'>
              Millennium Progress Academy offers grades KG through 12. We select the promising students that make up our community based on a set of factors including middle school grades, performance on our entrance exam, 8th grade national exam results, and our assessments of leadership potential and other skills and talents.
            </p>
    </div>
  );
}

export default About;
