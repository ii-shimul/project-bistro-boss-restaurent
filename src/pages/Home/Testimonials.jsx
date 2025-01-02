import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [testi, setTesti] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setTesti(data));
  }, []);
  return (
    <section className="max-w-7xl mx-auto mb-14 mt-14">
      <SectionTitle
        title="testimonials"
        subtitle="What Our Clients Say"
      ></SectionTitle>
      <Swiper
        navigation={true}
        rewind={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {testi.map((test) => {
          const {name, details, rating} = test;
          return (
            <SwiperSlide key={test._id}>
              <div className="text-center px-32">
                <p>{details}</p>
                <h1 className="text-3xl text-orange-500">{name}</h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
