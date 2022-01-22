import React from "react";
import Slider from "react-slick";
import PrevIcon from "../../../Resources/Assets/img/PrevIcon";
import firstPost from "../../../Resources/Assets/img/Group 5923.png";
import Post from "../../../Resources/Assets/img/firstPost.png";
import NextIcon from "../../../Resources/Assets/img/NextIcon";
import "./LandingPage.css";
import { Link } from "react-router-dom";
function LandingPage() {
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
    infinite: true,
    autoplay: true,
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
          infinite: true,
          autoplay: true,
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
          infinite: true,
          autoplay: true,
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
          infinite: true,
          autoplay: true,
          autoplaySpeed: 3000,
          pauseOnHover: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  const content = [
    {
      img: firstPost,
    },
    {
      img: Post,
    },
    {
      img: firstPost,
    },
    {
      img: Post,
    },
    {
      img: firstPost,
    },
    {
      img: Post,
    },
  ];

  return (
    <div className="landing_page">
      <Slider {...settings} accessibility={false}>
        {content.map((content) => {
          return (
            <div>
              <Link to="/buynow">
                <img alt="" src={content.img} />
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default LandingPage;
