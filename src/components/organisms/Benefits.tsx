import React from 'react';
import Box from '../atoms/Box';
import BenefitCard from '../molecules/BenefitCard';

const Benefits = () => {
  return (
    <Box className="flex gap-3 items-center">
      <BenefitCard title="해외 마케팅" icon="/assets/iconmarketing.svg" />
      <BenefitCard title="퍼블리셔" icon="/assets/iconimage.svg" />
      <BenefitCard title="캐드원(제도사)" icon="/assets/iconbox.svg" />
      <BenefitCard title="해외 세일즈" icon="/assets/icontarget.svg" />
    </Box>
  );
};

export default Benefits;
