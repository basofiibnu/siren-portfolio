import React from 'react';
import Paragraph from '../atoms/Paragraph';
import Box from '../atoms/Box';

const FeatureCard = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <Box className="flex flex-col gap-2">
      <hr style={{ maxWidth: '129px' }} />
      <Paragraph className="text-lg leading-[27px] font-bold text-white">{title}</Paragraph>
      <Paragraph className="text-base leading-6 opacity-70 font-black text-white">{subtitle}</Paragraph>
    </Box>
  );
};

export default FeatureCard;
