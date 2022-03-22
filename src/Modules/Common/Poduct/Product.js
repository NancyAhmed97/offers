import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import "./Product.css";
import likeIcon from "../../../Resources/Assets/img/Group 5931.svg";
import background from "../../../Resources/Assets/img/Ellipse 129.svg";
import LikedHear from "../../../Resources/Assets/img/LikedHear.svg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import {
  addProductWishList,
  addQuantitWishList,
} from "../../../Redux/wishListRedux";
function Product({
  img,
  Currency,
  title,
  price,
  rating,
  expires,
  expiresDays,
  expiresHours,
  expiresMins,
  expiresSecs,
  date,
  desc,
  id,
  is_favorite,
  currentState,
}) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  let quantityWishList = useSelector((state) => state.wishlist.quantity);
  const [liked, setLiked] = useState(false);
  const history = useHistory();
  var { auth } = useSelector((state) => state);
  var authState = Object.keys(auth.authorization).length;
  const dispatch = useDispatch();

  
  return (
    <div className="product_container">
      <div className="product">
        <div className="product_details">
          <Link
            to={
              currentState
                ? `/blogDetails/:${id !== undefined && id}`
                : `/productcart/:${id !== undefined && id}`
            }
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <div className="product_img">
              <img src={img} alt={img} className="product_img" />
            </div>
          </Link>
          <div className="contant">
            {date && <p className="time">{date}</p>}
            <Link
              to={
                currentState
                  ? `/blogDetails/:${id !== undefined && id}`
                  : `/productcart/:${id !== undefined && id}`
              }
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="text-decoration-none"
            >
              <p className="m-0 product_title pt-2">{title}</p>
            </Link>
            {desc && <p className="product_desc">{desc}</p>}
            {rating !== undefined && (
              <ReactStars
                count={5}
                value={rating}
                size={24}
                color2={"#FABB27"}
                edit={false}
                id="stars"
              />
            )}
            {price && (
              <>
                <p className="m-0 price">
                  {Currency}
                  <span className="curency mx-1">SAR</span>
                  <span className="price_text">{price}</span>
                </p>
              </>
            )}
            {expires && (
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
            )}
            <div className="icons" id={id} style={{ cursor: "pointer" }}>
              {is_favorite || liked ? (
                <div
                  className="likedIcone"
                  onClick={(e) => {
                    axios({
                      method: "get",
                      url: `https://offers.com.fig-leaf.net/api/v1/toggleFavorite/${e.target.id}`,
                      headers: {
                        Authorization: `Bearer ${auth.authorization.access_token}`,
                      },
                    }).then((res) => {
                      setLiked(false);
                      dispatch(addProductWishList(quantityWishList - 1));
                    });
                  }}
                >
                  <img
                    src={background}
                    alt="background"
                    className="background"
                    id={id}
                  />
                  <img
                    src={LikedHear}
                    alt="LikedHear"
                    className="LikedHear"
                    id={id}
                  />
                </div>
              ) : (
                <img
                  src={likeIcon}
                  alt="likeIcon"
                  className="like_icon"
                  onClick={(e) => {
                     axios({
                      method: "get",
                      url: `https://offers.com.fig-leaf.net/api/v1/toggleFavorite/${e.target.id}`,
                      headers: {
                        Authorization: `Bearer ${auth.authorization.access_token}`,
                      },
                    }).then((res) => {
                      dispatch(addProductWishList(quantityWishList + 1));
                      setLiked(true);
                    });
                  }}
                  id={id}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
