import React from 'react';
import headphones from "../../../Resources/Assets/img/52856.png";
import smallMobile from "../../../Resources/Assets/img/smallMobile.png";
import smallBag from "../../../Resources/Assets/img/smallBag.png";
import smallBook from "../../../Resources/Assets/img/smallBook.png";
import smallCamer from "../../../Resources/Assets/img/smallBook.png";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
import SwiperCore, {
    EffectFade,Navigation,Pagination
  } from 'swiper';
  
import "./HotSales.css"
import Product from '../../Common/Poduct/Product';
import { Link } from 'react-router-dom';
function HotSales() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
    SwiperCore.use([EffectFade,Navigation,Pagination]);
    const product = [
        {
          img: headphones,
          title: "Add product name here in this space and edit it",
          rating: 4,
          price: "SAR 3,099.00",
          id:1
        },
        {
          img: smallMobile,
          title: "Add product name here in this space and edit it",
          rating: 4,
          price: "SAR 3,099.00",
          id:2
        },
        {
          img: smallBag,
          title: "Add product name here in this space and edit it",
          rating: 4,
          price: "SAR 3,099.00",
          id:3
        },
        {
          img: smallBook,
          title: "Add product name here in this space and edit it",
          rating: 4,
          price: "SAR 3,099.00",
          id:4
        },
        {
          img: smallCamer,
          title: "Add product name here in this space and edit it",
          rating: 4,
          price: "SAR 3,099.00",
          id:5
        },
        {
          img: smallMobile,
          title: "Add product name here in this space and edit it",
          rating: 4,
          price: "SAR 3,099.00",
          id:6
        },
        {
          img: smallBook,
          title: "Add product name here in this space and edit it",
          rating: 4,
          price: "SAR 3,099.00",
          id:7
        },
        {
          img: smallCamer,
          title: "Add product name here in this space and edit it",
          rating: 4,
          price: "SAR 3,099.00",
          id:8
        },
      ];
  return <div className='hot_sales pr pl'>
            <h2>{currentLocal.home.hotSales}</h2>
      <p className="best_seller_pragrapg">{currentLocal.home.hotSalesPragaph}</p>

     <Swiper slidesPerView={1} centeredSlides={false} slidesPerGroupSkip={1} grabCursor={true} keyboard={{
  "enabled": true
}} breakpoints={{
  "769": {
    "slidesPerView": 5,
    "slidesPerGroup": 5
  }
}} scrollbar={true} navigation={true} pagination={{
  "clickable": true
}} className="mySwiper">
    {product.map((Blog)=>{
 return(
    <SwiperSlide>
                            <Link 
           to={`/blogDetails/:${Blog.id}`} 
          >
    <Product
        img={Blog.img}
        title={Blog.title}
        rating={Blog.rating}
        price={Blog.price}
      />
      </Link>
</SwiperSlide>
 )
    })}
  </Swiper> 
  
  
   </div>;
}

export default HotSales;