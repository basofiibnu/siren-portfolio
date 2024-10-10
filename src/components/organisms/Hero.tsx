import React from 'react';
import Box from '../atoms/Box';
import Paragraph from '../atoms/Paragraph';
import Heading from '../atoms/Heading';
import FeatureCard from '../molecules/FeatureCard';

const Hero = () => {
  return (
    <Box className="flex flex-col gap-4 w-full relative">
      <Box className="bg-white rounded-lg px-3 py-[6px] w-max triangle relative">
        <Paragraph className="text-[#40E2E8] text-lg leading-6 font-black">풀타임, 파트타임</Paragraph>
      </Box>
      <Box className="mt-2">
        <Heading className="text-[48px] text-white font-black leading-[62.4px]">최고의 실력을 가진</Heading>
        <Heading className="text-[48px] text-white font-black leading-[62.4px]">외국인 인재를 찾고 계신가요?</Heading>
      </Box>
      <Box>
        <Heading className="text-[24px] text-white font-black leading-[34px]">법률 및 인사관리 부담없이</Heading>
        <Heading className="text-[24px] text-white font-black leading-[34px]">
          1주일 이내에 원격으로 채용해보세요.
        </Heading>
      </Box>
      <Box>
        <Paragraph className="text-lg text-white font-black leading-[27px]">개발자가 필요하신가요?</Paragraph>
      </Box>

      <Box className="flex items-start justify-start gap-6 mt-10">
        <FeatureCard title="평균 월 120만원" subtitle="임금을 해당 국가를 기준으로 계산합니다." />
        <FeatureCard title="최대 3회 인력교체" subtitle="막상 채용해보니 맞지 않아도 걱정하지 마세요. " />
        <FeatureCard title="평균 3일, 최대 10일" subtitle="급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다." />
      </Box>
    </Box>
  );
};

export default Hero;
