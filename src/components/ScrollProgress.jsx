import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ width: `${scrollProgress}%` });
  }, [scrollProgress, controls]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

    setScrollProgress(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="scroll-progress"
      initial={{ width: '0%' }}
      animate={controls}
      transition={{ duration: 0.3 }}
    />
  );
};

export default ScrollProgress;
