import React from 'react';
import Box from '../atoms/Box';
import Image from '../atoms/Image';
import Paragraph from '../atoms/Paragraph';

const BenefitCard = ({ title, icon }: { title: string; icon: string }) => {
  return (
    <Box className="w-full flex items-center gap-6 bg-white rounded-2xl p-4 bg-opacity-20">
      <Box className="bg-white rounded-lg p-3 bg-opacity-20">
        <Image src={icon} alt={title} />
      </Box>
      <Box>
        <Paragraph className="leading-9 text-white font-black text-[24px]">{title}</Paragraph>
      </Box>
    </Box>
  );
};

export default BenefitCard;
