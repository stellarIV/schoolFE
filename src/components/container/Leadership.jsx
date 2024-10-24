import React from 'react';
import ownerImg from '../../assets/s1.jpg';      // Replace with your actual image paths
import principalImg from '../../assets/s2.jpg';
import directorImg from '../../assets/k1.jpg';

const Leadership = () => {
  return (
    <div className='section mt-16 px-6 py-12 bg-gray-100'>
      <h1 className='text-4xl font-extrabold text-center text-gray-800 mb-12 dark:text-white'>
        Meet Our Leadership Team
      </h1>
      
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/* Owner */}
        <div className='flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden'>
          <img src={ownerImg} alt="Owner" className='w-full h-48 object-cover' />
          <div className='p-6 bg-blue-600 text-white'>
            <h2 className='text-2xl font-semibold mb-2'>John Doe</h2>
            <p className='text-lg'>Owner</p>
          </div>
          <div className='p-6 bg-gray-50 text-gray-800'>
            <p className='text-md'>
              John Doe is the visionary founder and owner of our institution. With over 20 years of experience in the education sector, he is committed to fostering a nurturing and innovative learning environment. His leadership ensures that our values and mission drive every aspect of our school's development.
            </p>
          </div>
        </div>

        {/* Principal */}
        <div className='flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden'>
          <img src={principalImg} alt="Principal" className='w-full h-48 object-cover' />
          <div className='p-6 bg-green-600 text-white'>
            <h2 className='text-2xl font-semibold mb-2'>Jane Smith</h2>
            <p className='text-lg'>Principal</p>
          </div>
          <div className='p-6 bg-gray-50 text-gray-800'>
            <p className='text-md'>
              Jane Smith, our Principal, brings a wealth of educational leadership experience to our school. Her focus on academic excellence and student well-being has shaped a vibrant and inclusive school culture. Jane is passionate about implementing innovative teaching methods and supporting our dedicated educators.
            </p>
          </div>
        </div>

        {/* Director */}
        <div className='flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden'>
          <img src={directorImg} alt="Director" className='w-full h-48 object-cover' />
          <div className='p-6 bg-red-600 text-white'>
            <h2 className='text-2xl font-semibold mb-2'>Emily Johnson</h2>
            <p className='text-lg'>Director</p>
          </div>
          <div className='p-6 bg-gray-50 text-gray-800'>
            <p className='text-md'>
              Emily Johnson, our Director, oversees the strategic direction and operational management of the school. With her expertise in educational administration and community engagement, Emily ensures that our programs are aligned with the latest educational trends and community needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leadership;
