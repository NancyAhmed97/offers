import React, { useState } from "react";
import FaceBook from "../../../../../../Resources/Assets/img/LightFacebook";
import Twitter from "../../../../../../Resources/Assets/img/Lighttwitter";
import { useSelector } from "react-redux";
import LightLinkidin from "../../../../../../Resources/Assets/img/LightLinkidin";
import increase from "../../../../../../Resources/Assets/img/Group 8140.svg";
import decrease from "../../../../../../Resources/Assets/img/Line 60.svg";
import likeIcon from "../../../../../../Resources/Assets/img/Group 5931.svg";
import background from "../../../../../../Resources/Assets/img/Ellipse 129.svg";
import LikedHear from "../../../../../../Resources/Assets/img/LikedHear.svg";
import redCheck from "../../../../../../Resources/Assets/img/redCheck.svg";
import ReactStars from "react-rating-stars-component";
import "./ProductInfo.css";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function ProductInfo({ product, reviews }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const history = useHistory();
  var { auth } = useSelector((state) => state);
  var authState = Object.keys(auth.authorization).length;
  const [counterNumber, setCounterNumber] = useState(0);
  const [colorId, setColorId] = useState("");
  const increaseCount = () => {
    setCounterNumber(counterNumber + 1);
  };
  // console.log(product);
  // console.log(product.is_favorite);
  const decreaseCount = () => {
    if (counterNumber !== 0) {
      setCounterNumber(counterNumber - 1);
    }
  };
  const addToCart = () => {
    axios({
      method: "post",
      url: `https://offers.com.fig-leaf.net/api/v1/add_to_cart`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
      data: {
        product_id: product.id,
        quantity: counterNumber,
        color_id: colorId?colorId:23,
      },
    }).then((res) => {
      if (res.data.success === true) {
        // console.log(res.data);
      }
    });
  };
  const [liked, setLiked] = useState(false);
  const likeProduct = (e) => {
    if (authState !== 0) {
      axios({
        method: "get",
        url: `https://offers.com.fig-leaf.net/api/v1/toggleFavorite/${e.target.id}`,
        headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
      }).then((res) => {
        // console.log(res);
        // console.log(res.data);
        // console.log(res.data.data);
        setLiked(!liked);
        // window.location.reload();
      });
    } else {
      history.push("/signup");
      window.scrollTo(0, 0);
    }
  };
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
        <div className="colors d-flex">
          <div className="ColorName d-flex">
            <img src={redCheck} alt={redCheck} />
            <p className="mb-0 mx-2">{currentLocal.productDetails.ColorName}</p>
          </div>
          {product.colors !== undefined &&
            product.colors.map((productColor) => {
              // console.log(productColor);
              return (
                <div
                  className="product_coolor mx-2 d-flex"
                  key={productColor.id}
                  onClick={() => {
                    // console.log(productColor.id);
                    setColorId(productColor.id);
                  }}
                >
                  <p
                    className="bg-color mb-0"
                    style={{ backgroundColor: productColor.color }}
                  ></p>
                  <p className="mb-0 mx-2">{productColor.name}tggtgtgttg</p>
                </div>
              );
            })}
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
            <div className="product_info_add_cart_button" onClick={addToCart}>
              {currentLocal.productDetails.addToCart}
            </div>
          </div>
          <div className="product_info_add_wish_list d-flex">
            <div className="icons" id={product.id}>
              {product.is_favorite || liked ? (
                <div className="likedIcone" onClick={likeProduct}>
                  <img
                    src={background}
                    alt="background"
                    className="background"
                    id={product.id}
                  />
                  <img
                    src={LikedHear}
                    alt="LikedHear"
                    className="LikedHear"
                    id={product.id}
                  />
                </div>
              ) : (
                <img
                  src={likeIcon}
                  alt="likeIcon"
                  className="like_icon"
                  onClick={likeProduct}
                  id={product.id}
                />
              )}
            </div>
            <p className="m-0 d-inline-block mt-3">
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
