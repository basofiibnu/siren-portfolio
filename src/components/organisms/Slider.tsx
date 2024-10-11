import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';
import Box from '../atoms/Box';
import SliderCard from '../molecules/SliderCard';
import { useState } from 'react';
import Paragraph from '../atoms/Paragraph';
import Image from '../atoms/Image';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Slider = () => {
  const [centeredSlide, setCenteredSlide] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    const centeredIndex = swiper?.realIndex;
    setCenteredSlide(centeredIndex);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Box className="w-full swiper-container">
        <Box className="flex items-center justify-center gap-2 w-full mb-8 pl-[25px]">
          <Box className="bg-[#E9F7EF] rounded-lg px-4 py-2 w-max sliderTriangle relative flex items-center gap-2">
            <Image src="/assets/dolar.svg" alt="dolar" />
            <Paragraph className="text-[#00C696] text-[18px] leading-[27px] font-black">
              월 {centeredSlide + 1}00만원
            </Paragraph>
          </Box>
        </Box>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 1.5,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Navigation]}
          onSlideChange={handleSlideChange}
          className="mySwiper">
          {[1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide key={item}>
              <SliderCard
                title="Abhishek Gupta"
                experience="마케팅 · 2y+"
                flag="/assets/flag.svg"
                image="/assets/avatar.svg"
                skills={['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성']}
                className="slider-card-content"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </motion.div>
  );
};

export default Slider;
