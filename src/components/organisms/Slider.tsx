import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Box from '../atoms/Box';
import SliderCard from '../molecules/SliderCard';

const Slider = () => {
  return (
    <Box className="w-full swiper-container">
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
        className="mySwiper">
        {[1, 2, 3, 4, 5].map((item) => (
          <SwiperSlide key={item}>
            <SliderCard
              title="Abhishek Gupta"
              experience="마케팅 · 2y+"
              flag="/assets/flag.svg"
              image="/assets/avatar.svg"
              skills={['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성']}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Slider;
