import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper";
import "./HotSales.css";
import Product from "../../Common/Poduct/Product";
function HotSales({ hotSales }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  SwiperCore.use([EffectFade, Navigation, Pagination]);
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "en_hot_sales hot_sales pr pl"
          : "ar_hot_sales hot_sales pr pl"
      }
    >
      <h2>
        {currentLocal.language === "English"
          ? hotSales && hotSales.section.en_name
          : hotSales && hotSales.section.ar_name}
      </h2>
      <p className="best_seller_pragrapg">
        {currentLocal.home.hotSalesPragaph}
      </p>

      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {hotSales !== undefined &&
          hotSales.items.map((Blog, index) => {
            const url = "https://offers.com.fig-leaf.net";
            return (
              <SwiperSlide key={index}>
                <Product
                  img={url + Blog.image}
                  title={
                    currentLocal.language === "English"
                      ? Blog.en_name
                      : Blog.en_name
                  }
                  rating={Blog.rate}
                  price={Blog.price}
                  id={Blog.id}
                  is_favorite={Blog.is_favorite}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}

export default HotSales;
