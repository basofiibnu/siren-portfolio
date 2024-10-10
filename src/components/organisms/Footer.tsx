import Paragraph from '../atoms/Paragraph';
import FooterCard from '../molecules/FooterCard';
import Box from '../atoms/Box';
import Image from '../atoms/Image';

const Footer = () => {
  return (
    <footer className="bg-[#FBFBFB] pl-[150px]">
      <Box className="container mx-auto p-4 py-16 flex flex-col gap-10">
        <Box className="flex items-center gap-4">
          <Box className="flex flex-col gap-2 justify-start flex-[3]">
            <Image src="/assets/footerlogo.svg" alt="logo" width={187} />
            <Paragraph className="text-sm leading-5 font-black text-[#343741] max-w-[247px] mt-2">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </Paragraph>
            <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F] mt-4">010-0000-0000</Paragraph>
            <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F]">aaaaa@naver.com</Paragraph>
          </Box>

          <Box className="flex gap-4 items-center flex-[7]">
            <FooterCard title="해외 개발자 원격 채용" caption="바로가기" icon="/assets/iconcode.svg" />
            <FooterCard title="외국인 원격 채용 (비개발)" caption="바로가기" icon="/assets/iconavatar.svg" />
            <FooterCard title="한국어 가능 외국인 채용" caption="바로가기" icon="/assets/iconkor.svg" />
            <FooterCard title="해외 개발자 활용 서비스" caption="바로가기" icon="/assets/icongear.svg" />
          </Box>
        </Box>

        <Box className="flex items-center gap-4">
          <Box className="flex items-center gap-4 flex-[3]">
            <Box className="flex flex-col gap-2 justify-start">
              <Paragraph className="text-sm leading-[18px] font-black text-[#343741]">상호명</Paragraph>
              <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F] mt-2">하이퍼하이어</Paragraph>
              <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F]">
                Hyperhire India Private Limited
              </Paragraph>
            </Box>
            <Box className="flex flex-col gap-2 justify-start">
              <Paragraph className="text-sm leading-[18px] font-black text-[#343741]">대표 CEO</Paragraph>
              <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F] mt-2">김주현</Paragraph>
              <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F]">Juhyun Kim</Paragraph>
            </Box>
          </Box>

          <Box className="flex gap-4 items-center flex-[7]">
            <Box className="flex flex-col gap-2 justify-start">
              <Paragraph className="text-sm leading-[18px] font-black text-[#343741]">사업자등록번호 CIN</Paragraph>
              <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F] mt-2">427-86-01187</Paragraph>
              <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F]">U74110DL2016PTC290812</Paragraph>
            </Box>
            <Box className="flex flex-col gap-2 justify-start">
              <Paragraph className="text-sm leading-[18px] font-black text-[#343741]">주소 ADDRESS</Paragraph>
              <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F] mt-2">
                서울특별시 강남대로 479, 지하 1층 238호{' '}
              </Paragraph>
              <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F]">
                D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
              </Paragraph>
            </Box>
          </Box>
        </Box>

        <Box>
          <Paragraph className="text-[13px] leading-5 font-black text-[#5E626F] mt-4">ⓒ 2023 Hyperhire</Paragraph>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
