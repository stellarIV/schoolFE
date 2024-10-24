import React from 'react';
import { motion } from 'framer-motion';

const images = [
  { id: 1, name: 'School 1', src: 'https://via.placeholder.com/200?text=School+1' },
  { id: 2, name: 'School 2', src: 'https://via.placeholder.com/200?text=School+2' },
  { id: 3, name: 'School 3', src: 'https://via.placeholder.com/200?text=School+3' },
  { id: 4, name: 'School 4', src: 'https://via.placeholder.com/200?text=School+4' },
  { id: 5, name: 'School 5', src: 'https://via.placeholder.com/200?text=School+5' },
  { id: 6, name: 'School 6', src: 'https://via.placeholder.com/200?text=School+5' },
  { id: 7, name: 'School 7', src: 'https://via.placeholder.com/200?text=School+5' },
]
const log =()=>{
  console.log("happy")
}
const ScrollableImages = () => {
  return (
    <div className="overflow-x-scroll overflow-y-hidden flex space-x-4 p-4 w-[80%]">
      {images.map((image) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-w-[200px]"
          viewport={{ infinite: true }}
        >
          <img src={image.src} alt={image.name} className="rounded shadow-lg hover:shadow-none duration-700" onClick={log} />
          <p className="text-center mt-2">{image.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollableImages;
