import { Swiper, SwiperSlide } from "swiper/react";

const Members = () => {
  const images = [
    "tom2.jpeg",
    "charlie.jpeg",
    "joe.jpeg",
    "josh.jpeg",
    "myles.jpeg",
  ];

  return (
    <div class="members">
      <h2>Meet The Members</h2>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((img) => {
          return (
            <SwiperSlide>
              <img class="member" src={img} alt="Blossoms Logo" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Members;
