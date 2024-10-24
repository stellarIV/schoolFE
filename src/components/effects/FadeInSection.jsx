import React from 'react';
import video from '../../assets/hvid.mp4';
import logo from '../../assets/mage.png';
import { motion } from 'framer-motion';
import ScrollableImages from '../effects/ScrollableImages';

const FadeInSection = ({ children, direction }) => {
  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -30 : 30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={variants}
      className="px-6 pb-9 sm:px-32 text-sm leading-7"
    >
      {children}
    </motion.div>
  );
};
export default FadeInSection