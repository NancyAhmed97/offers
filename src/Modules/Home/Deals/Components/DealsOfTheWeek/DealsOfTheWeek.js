import React from 'react';
import { Link } from 'react-router-dom';
import blogImg from "../../../../../Resources/Assets/img/Appleheadphones.png"
import Product from '../../../../Common/Poduct/Product';
import PrevIcon from "../../../../../Resources/Assets/img/DisactiveArrow";
import NextIcon from "../../../../../Resources/Assets/img/SmallActiveArrow";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "./DealsOfTheWeek.css"
function DealsOfTheWeek() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
  
    const blog = [
        {
          id: 1,
    
          img: blogImg,
          price: "SAR 3,099.00",
          rating: 4,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
          paragraph:
            "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
        },
        {
          id: 1,
    
          img: blogImg,
          price: "SAR 3,099.00",
          rating: 4,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
          paragraph:
            "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
        },
        {
          id: 1,
    
          img: blogImg,
          price: "SAR 3,099.00",
          rating: 4,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
          paragraph:
            "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
        },
        {
          id: 1,
    
          img: blogImg,
          price: "SAR 3,099.00",
          rating: 4,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
          paragraph:
            "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
        },
        {
          id: 1,
    
          img: blogImg,
          price: "SAR 3,099.00",
          rating: 4,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
          paragraph:
            "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
        },
        {
          id: 1,
    
          img: blogImg,
          price: "SAR 3,099.00",
          rating: 4,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
          paragraph:
            "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
        },
        {
          id: 1,
    
          img: blogImg,
          price: "SAR 3,099.00",
          rating: 4,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
          paragraph:
            "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
        },
        {
          id: 1,
    
          img: blogImg,
          price: "SAR 3,099.00",
          rating: 4,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
          paragraph:
            "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
        },
        {
          id: 1,
    
          img: blogImg,
          price: "SAR 3,099.00",
          rating: 4,
          date: "5 September, 2022",
          title:
            " Add product name here in this space and edit it here in same Content",
          paragraph:
            "Rendered her for put improved concerns his. Ladies bed wisdom theirs mrs men months set. Everything so ",
        },
  
      ];
      const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
    
        return (
          <div onClick={onClick} className={className} style={{ ...style }}>
            <PrevIcon />
          </div>
        );
      };
      const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
    
        return (
          <div onClick={onClick} style={{ ...style }} className={className}>
            <NextIcon />
          </div>
        );
      };
      var settings = {
        dots: false,
        infinite: false,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              dots: false,
              infinite: false,
              autoplay: false,
              autoplaySpeed: 3000,
              pauseOnHover: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
            },
          },
          {
            breakpoint: 668,
            settings: {
              dots: false,
              infinite: false,
              autoplay: false,
              autoplaySpeed: 3000,
              pauseOnHover: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
            },
          },
    
          {
            breakpoint: 480,
            settings: {
              dots: false,
              infinite: false,
              autoplay: false,
              autoplaySpeed: 3000,
              pauseOnHover: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
            },
          },
        ],
      };

  return <div className='deals_of_the_week'>
      <h2>{currentLocal.home.dealsOfTheWeek}</h2>
      <Slider {...settings} accessibility={false}>
        {blog.map((productDetails) => {
          return (
            <div>
                           <Link 
           to={`/blogDetails/:${productDetails.id}`} 
          >
          <Product
                        img={productDetails.img}
                        title={productDetails.title}
                        rating={productDetails.rating}
                        price={productDetails.price}
                      />
          </Link>
            </div>
          );
        })}
      </Slider>

  </div>;
}

export default DealsOfTheWeek;
