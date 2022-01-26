import React from "react";
import likeIcon from "../../../Resources/Assets/img/Group 5931.svg";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import "./Product.css";
function Product({ img, title, price, rating ,expires,expiresDays,expiresHours,expiresMins,expiresSecs,date,desc}) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="product">
      <div className="product_details">
        <div className="product_img">
          <img src={img} alt={img} className="product_img"/>
          <img src={likeIcon} alt="likeIcon" className="like_icon" />
        </div>
        <div className="contant">
          {date&&
          <p className="time">
{date}
               {/* {postBlog.created_at} */}
             </p>
          }
          <p className="m-0 product_title">{title}</p>
          {desc&&
          <p className="product_desc">{desc}</p>
          }
          {!expires&&
          <ReactStars
            count={5}
            value={rating}
            size={24}
            color2={"#FABB27"}
            edit={false}
            id="stars"
          />
        }
          <p className="m-0">{price}</p>
          {expires&&
          <>
        <p className="mb-3">{currentLocal.home.expires}</p>
        <div className="expirePeriod">
        <div className="expiresDays ">
          <p className="number m-0">{expiresDays}</p>
          <p className="days">Days</p>
        </div>
        <div className="expiresDays ">
          <p className="number m-0">{expiresHours}</p>
          <p className="hours">Hours</p>
        </div>
        <div className="expiresDays ">
          <p className="number m-0">{expiresMins}</p>
          <p className="mins">Mins</p>
        </div>
        <div className="expiresDays ">
          <p className="number m-0">{expiresSecs}</p>
          <p className="secs">Secs</p>
        </div>
        </div>
        </>
        }
        </div>
      </div>
    </div>
  );
}

export default Product;
