import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Box from '../atoms/Box';
import BenefitCard from '../molecules/BenefitCard';

const Benefits = ({ data }: { data: { title: string; icon: string }[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const loopedBenefits = [...data, ...data];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.length]);

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
            animate={{ x: `-${(currentIndex * 100) / data.length}%` }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onAnimationComplete={() => {
              if (currentIndex === data.length) {
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
