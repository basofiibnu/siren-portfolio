import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Box from '../atoms/Box';
import BenefitCard from '../molecules/BenefitCard';

const Benefits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const benefits = [
    { title: '해외 마케팅', icon: '/assets/iconmarketing.svg' },
    { title: '퍼블리셔', icon: '/assets/iconimage.svg' },
    { title: '캐드원(제도사)', icon: '/assets/iconbox.svg' },
    { title: '해외 세일즈', icon: '/assets/icontarget.svg' },
    { title: '해외 CS', icon: '/assets/iconcall.svg' },
  ];

  const loopedBenefits = [...benefits, ...benefits];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % benefits.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [benefits.length]);

  const variants = {
    initial: { x: '100%' },
    animate: { x: '0%' },
    exit: { x: '-100%' },
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box className="flex gap-3 items-center">
        <Box className="overflow-hidden w-full">
          <motion.div
            className="flex gap-4"
            initial={{ x: 0 }}
            animate={{ x: `-${(currentIndex * 100) / benefits.length}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onAnimationComplete={() => {
              if (currentIndex === benefits.length) {
                setCurrentIndex(0);
              }
            }}>
            {loopedBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="min-w-[332px]"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}>
                <BenefitCard title={benefit.title} icon={benefit.icon} />
              </motion.div>
            ))}
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Benefits;
