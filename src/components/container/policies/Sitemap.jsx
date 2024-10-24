import React from 'react';

const Sitemap = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 dark:text-white px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Sitemap</h1>
      
      <p className="text-gray-700 mb-4">
        Welcome to the [School Name] Sitemap. Below you'll find an organized list of all the pages available on our website.
      </p>
      
      <ul className="text-gray-700 list-disc list-inside mb-4">
        <li><a href="/" className="text-blue-600 hover:text-blue-800">Home</a></li>
        <li><a href="/about" className="text-blue-600 hover:text-blue-800">About Us</a></li>
        <li><a href="/admissions" className="text-blue-600 hover:text-blue-800">Student Life</a></li>
        <li><a href="/academics" className="text-blue-600 hover:text-blue-800">Resources</a></li>
        <li><a href="/news" className="text-blue-600 hover:text-blue-800">Services</a></li>
        <li><a href="/contact" className="text-blue-600 hover:text-blue-800">Contact Us</a></li>
        <li><a href="/careers" className="text-blue-600 hover:text-blue-800">Careers</a></li>
        <li><a href="/privacypolicy" className="text-blue-600 hover:text-blue-800">Privacy Policy</a></li>
        <li><a href="/terms-and-conditions" className="text-blue-600 hover:text-blue-800">Terms and Conditions</a></li>
      </ul>

      <p className="text-gray-700 mb-4">
        If you can't find what you're looking for, please use the search function or contact us directly.
      </p>
    </div>
  );
};

export default Sitemap;
