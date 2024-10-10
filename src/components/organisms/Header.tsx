import React from 'react';
import Box from '../atoms/Box';
import Paragraph from '../atoms/Paragraph';
import Image from '../atoms/Image';
import Button from '../atoms/Button';

const Header = () => {
  return (
    <header className="h-[60px] flex flex-col items-center justify-center">
      <Box className="flex w-full items-center justify-between">
        <Box>
          <Image src="/assets/logo.svg" alt="logo" />
        </Box>
        <Box className="flex items-center gap-8">
          <Box className="flex items-center gap-1">
            <Paragraph className="text-base leading-6 font-black text-white">채용</Paragraph>
            <Image src="/assets/chevrondown.svg" alt="chevron-down" />
          </Box>
          <Paragraph className="text-base leading-6 font-black text-white">해외 개발자 활용 서비스</Paragraph>
        </Box>
        <Box>
          <Button
            className="bg-white rounded-lg py-2 px-6 text-base leading-6 font-black text-[#4A77FF]"
            onClick={() => {}}>
            문의하기
          </Button>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
