import React from 'react';
import Box from '../atoms/Box';
import Image from '../atoms/Image';
import Paragraph from '../atoms/Paragraph';

const SliderCard = ({
  title,
  experience,
  image,
  skills,
  flag,
}: {
  title: string;
  experience: string;
  image: string;
  flag: string;
  skills: string[];
}) => {
  return (
    <Box className="bg-white p-9 rounded-xl flex flex-col items-center justify-center gap-8 w-full min-w-[322px]">
      <Box className="flex flex-col items-center gap-4">
        <Box className="relative">
          <Image src={image} alt={title} />
          <Image src={flag} alt={title} className="absolute bottom-0 right-3" />
        </Box>
        <Box className="w-full flex flex-col items-center justify-center gap-2">
          <Paragraph className="text-[#24252F] text-[24px] leading-[36px] font-black">{title}</Paragraph>
          <Paragraph className="text-[#4A77FF] text-base leading-[24px] font-black">{experience}</Paragraph>
        </Box>
      </Box>

      <Box className="flex gap-1 items-center flex-wrap justify-center">
        {skills.map((skill) => (
          <Box
            key={skill}
            className="border border-[#C1C5CF] py-1 px-3 rounded-md text-[#5E626F] text-base leading-6 font-black">
            {skill}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SliderCard;
