import React from "react";
import CustomCursor from "../effects/CustomCursor"; // Ensure this path is correct based on your file structure

const NotFound = () => {
  return (
    <div className="relative flex flex-col cursor-pointer sm:cursor-none items-center justify-center h-screen text-center bg-gray-100 dark:bg-gray-900 dark:text-white overflow-hidden">
      {/* Include the custom cursor */}
      <CustomCursor />

      <div className="relative z-10">
        <h1 className="text-6xl font-bold mb-4">Oops!</h1>
        <p className="text-2xl mb-8">We can't seem to find the page you're looking for.</p>
        
        <p className="text-xl">
          Go back to <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">Home</a>.
        </p>
      </div>
      
     
    </div>
  );
};

export default NotFound;
