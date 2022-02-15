import React, { useState } from "react";
import FaceBook from "../../../../../../Resources/Assets/img/LightFacebook";
import Twitter from "../../../../../../Resources/Assets/img/Lighttwitter";
import { useSelector } from "react-redux";
import LightLinkidin from "../../../../../../Resources/Assets/img/LightLinkidin";
import increase from "../../../../../../Resources/Assets/img/Group 8140.svg";
import decrease from "../../../../../../Resources/Assets/img/Line 60.svg";
import wishList from "../../../../../../Resources/Assets/img/Group 8142.svg";
import ReactStars from "react-rating-stars-component";
import "./ProductInfo.css";
function ProductInfo({ product, reviews }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [counterNumber, setCounterNumber] = useState(0);
  const increaseCount = () => {
    setCounterNumber(counterNumber + 1);
  };
  const decreaseCount = () => {
    if (counterNumber !== 0) {
      setCounterNumber(counterNumber - 1);
    }
  };
  console.log(counterNumber);
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "product_info"
          : "product_info ar_product_info"
      }
    >
      <div className="product_info_container">
        <h1>
          {currentLocal.language === "English"
            ? product.en_name
            : product.ar_name}
        </h1>
        <p className="mt-3">
          {product.en_attributes !== null ||
          (product.ar_attributes !== null &&
            currentLocal.language === "Englisg")
            ? product.en_attributes
            : product.ar_attributes}
        </p>
        <div className="rating d-flex">
          <ReactStars
            count={5}
            value={product.rate}
            size={24}
            color2={"#FABB27"}
            edit={false}
            id="stars"
          />
          <p className=" mb-0">
            {product.rate}/5
            <span>|</span>
            <span>540 Rating</span>
          </p>
        </div>
        <div className="stock">
          {product.in_stock !== "0" && (
            <div className="mb-0 stock_container">
              {currentLocal.productDetails.InStock}
            </div>
          )}
        </div>
        <div className="price mt-4">
          <p className="price_container">
            SAR
            <span>{product.price}</span>
          </p>
        </div>
      </div>
      <div className="product_info_order">
        <div className="product_info_number_product d-flex">
          <div className="product_info_number_product_container">
            <p className="p-0 m-0 decrease_container" onClick={decreaseCount}>
              <img src={decrease} alt="decrease" />
            </p>
            <p className="p-0 m-0 counter">{counterNumber}</p>
            <p className="p-0 m-0 increase_container" onClick={increaseCount}>
              <img src={increase} alt="increase" />
            </p>
          </div>
          <div className="product_info_add_cart">
            <div className="product_info_add_cart_button">
              {currentLocal.productDetails.addToCart}
            </div>
          </div>
          <div className="product_info_add_wish_list">
            <img src={wishList} alt="wishList" />
            <p className="m-0 d-inline-block">
              {currentLocal.productDetails.saveToWishlist}
            </p>
          </div>
        </div>
        <p className="productPragraph mt-4">
          {currentLocal.language === "English"
            ? product.en_desc
            : product.ar_desc}
        </p>
        <p className="product_info_category_name">
          {currentLocal.productDetails.Categories}
          <span>
            {currentLocal.language === "English"
              ? product.category_id && product.category_id.en_name
              : product.category_id && product.category_id.ar_name}
          </span>
        </p>
        <div className="product_info_order_share">
          <ul className="p-0">
            <li className="d-inline-block ">
              <p>{currentLocal.productDetails.ShareProduct}</p>
            </li>
            <li className="d-inline-block mx-2">
              <a
                href={product.facebook_share_url}
                target={"_blank"}
                rel="noreferrer"
              >
                <FaceBook />
              </a>
            </li>
            <li className="d-inline-block mx-2">
              <a
                href={product.linkedin_share_url}
                target={"_blank"}
                rel="noreferrer"
              >
                <Twitter />
              </a>
            </li>
            <li className="d-inline-block mx-2">
              <a
                href={product.twitte_share_url}
                target={"_blank"}
                rel="noreferrer"
              >
                <LightLinkidin />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
