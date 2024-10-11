import React, { useState } from 'react';
import Box from '../atoms/Box';
import Paragraph from '../atoms/Paragraph';
import Image from '../atoms/Image';
import Button from '../atoms/Button';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const menuVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };
  return (
    <header className="h-[60px] flex flex-col items-center justify-center">
      <Box className="flex w-full items-center justify-between">
        <Box>
          <Image src="/assets/logo.svg" alt="logo" />
        </Box>
        <Box className="items-center gap-8 hidden md:flex">
          <Box className="relative">
            <Box className="flex items-center gap-1 cursor-pointer" onClick={() => setShowMenu(!showMenu)}>
              <Paragraph className="text-base leading-6 font-black text-white">채용</Paragraph>
              <Image src="/assets/chevrondown.svg" alt="chevron-down" />
            </Box>

            <AnimatePresence>
              {showMenu && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={menuVariants}
                  transition={{ duration: 0.3 }}
                  className="absolute top-8 cursor-pointer z-10 w-full min-w-[240px] flex flex-col rounded-lg border border-[#F2F4F7] px-4 py-[10px] bg-white gap-4"
                  style={{ boxShadow: '0px 4px 6px -2px #10182808' }}>
                  <Paragraph
                    className="text-[#344054] text-sm leading-[21px] font-bold"
                    onClick={() => setShowMenu(!showMenu)}>
                    채용
                  </Paragraph>
                  <Paragraph
                    className="text-[#344054] text-sm leading-[21px] font-medium"
                    onClick={() => setShowMenu(!showMenu)}>
                    해외 개발자 원격 채용
                  </Paragraph>
                  <Paragraph
                    className="text-[#344054] text-sm leading-[21px] font-medium"
                    onClick={() => setShowMenu(!showMenu)}>
                    외국인 원격 채용 (비개발 직군)
                  </Paragraph>
                  <Paragraph
                    className="text-[#344054] text-sm leading-[21px] font-medium"
                    onClick={() => setShowMenu(!showMenu)}>
                    한국어 가능 외국인 채용
                  </Paragraph>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
          <Paragraph className="text-base leading-6 font-black text-white">해외 개발자 활용 서비스</Paragraph>
        </Box>
        <Box className="hidden md:block">
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
