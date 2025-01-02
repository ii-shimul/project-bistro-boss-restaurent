import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <section className="max-w-7xl mx-auto my-10">
      <SectionTitle title="Order Online" subtitle="From 11am to 10pm"></SectionTitle>
      <Swiper
        slidesPerView={5}
        centeredSlides={true}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={slide1}
            alt=""
            className="h-full w-full relative object-contain"
          />
          <h1 className="text-3xl text-center absolute bottom-10 left-5 text-white font-serif [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)]">
            Salads
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt=""
            className="h-full w-full relative object-contain"
          />
          <h1 className="text-3xl text-center absolute bottom-10 left-5 text-white font-serif [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)]">
            Pizza
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide3}
            alt=""
            className="h-full w-full relative object-contain"
          />
          <h1 className="text-3xl text-center absolute bottom-10 left-5 text-white font-serif [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)]">
            Soups
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide4}
            alt=""
            className="h-full w-full relative object-contain"
          />
          <h1 className="text-3xl text-center absolute bottom-10 left-5 text-white font-serif [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)]">
            Desserts
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide5}
            alt=""
            className="h-full w-full relative object-contain"
          />
          <h1 className="text-3xl text-center absolute bottom-10 left-5 text-white font-serif [text-shadow:_0_1px_0_rgb(0_0_0_/_70%)]">
            Salads
          </h1>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
