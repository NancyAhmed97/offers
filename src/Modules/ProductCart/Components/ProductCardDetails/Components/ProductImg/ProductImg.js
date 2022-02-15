import React, {useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ProductImg.css";
import { FreeMode, Navigation, Thumbs } from "swiper";
function ProductImg({ image }) {
  const url = "https://offers.com.fig-leaf.net";
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="product_img">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img src={url + image} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={url + image} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={url + image} alt="img" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={url + image} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={url + image} alt="img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={url + image} alt="img" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductImg;
