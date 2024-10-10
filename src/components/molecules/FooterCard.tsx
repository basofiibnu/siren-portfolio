import React from 'react';
import Box from '../atoms/Box';
import Image from '../atoms/Image';
import Paragraph from '../atoms/Paragraph';

const FooterCard = ({ title, icon, caption }: { title: string; icon: string; caption: string }) => {
  return (
    <Box className="flex flex-col gap-3 rounded-xl p-4 bg-white w-max">
      <Box className="bg-[#EFF1F6] rounded-lg p-2 w-max">
        <Image src={icon} alt={title} />
      </Box>
      <Paragraph className="text-[#343741] text-sm font-black">{title}</Paragraph>
      <Box className="flex items-center gap-1 mt-2">
        <Paragraph className="text-[#5E626F] text-sm font-black">{caption}</Paragraph>
        <Image src="/assets/righticon.svg" alt="righticon" />
      </Box>
    </Box>
  );
};

export default FooterCard;
