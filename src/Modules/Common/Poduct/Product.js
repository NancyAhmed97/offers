import React from "react";
import likeIcon from "../../../Resources/Assets/img/Group 5931.svg";
import ReactStars from "react-rating-stars-component";
import "./Product.css";
function Product({ img, title, price, rating }) {
  return (
    <div className="product">
      <div className="product_details">
        <div className="product_img">
          <img src={img} alt={img} />
          <img src={likeIcon} alt="likeIcon" className="like_icon" />
        </div>
        <div className="contant">
          <p className="m-0">{title}</p>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            color2={"#FABB27"}
            edit={false}
            id="stars"
          />
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
