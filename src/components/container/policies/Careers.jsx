import React from 'react';

const Careers = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 dark:text-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Careers at [School Name]</h1>

      <p className="text-gray-700 mb-4">
        Join our dynamic team at [School Name]! We are always looking for passionate, dedicated professionals to contribute to our educational community.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Current Openings</h2>
      <p className="text-gray-700 mb-4">
        We currently have the following openings:
      </p>
      <ul className="text-gray-700 list-disc list-inside mb-4">
        <li>Math Teacher - Full Time</li>
        <li>Science Teacher - Full Time</li>
        <li>Administrative Assistant - Part Time</li>
        <li>IT Support Specialist - Full Time</li>
      </ul>
      <p className="text-gray-700 mb-4">
        To apply for any of these positions, please send your resume and cover letter to <a href="mailto:careers@schoolwebsite.com" className="text-blue-600 hover:text-blue-800">careers@schoolwebsite.com</a>.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Work with Us?</h2>
      <p className="text-gray-700 mb-4">
        At [School Name], we offer a supportive environment that values growth, collaboration, and innovation. We provide competitive benefits and professional development opportunities to help our staff thrive.
      </p>

      <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Equal Opportunity Employer</h2>
      <p className="text-gray-700 mb-4">
        [School Name] is an equal opportunity employer. We celebrate diversity and are committed to creating an inclusive environment for all employees.
      </p>
    </div>
  );
};

export default Careers;
