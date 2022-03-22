import React, { useState, useEffect } from "react";
import FaceBook from "../../../../../../Resources/Assets/img/LightFacebook";
import Twitter from "../../../../../../Resources/Assets/img/Lighttwitter";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../../../Redux/cartRedux";
import LightLinkidin from "../../../../../../Resources/Assets/img/LightLinkidin";
import likeIcon from "../../../../../../Resources/Assets/img/Group 5931.svg";
import background from "../../../../../../Resources/Assets/img/Ellipse 129.svg";
import LikedHear from "../../../../../../Resources/Assets/img/LikedHear.svg";
import increase from "../../../../../../Resources/Assets/img/Group 8140.svg";
import decrease from "../../../../../../Resources/Assets/img/Line 60.svg";
import redCheck from "../../../../../../Resources/Assets/img/redCheck.svg";
import ReactStars from "react-rating-stars-component";
import { useLocation } from "react-router-dom";
import moment from "moment";
// import { useDispatch } from "react-redux";
import "./ProductInfo.css";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Col, Container, Row } from "react-bootstrap";
import { addProductWishList } from "../../../../../../Redux/wishListRedux";
function ProductInfo({ product, activeState }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const location = useLocation();
  const history = useHistory();
  var { auth } = useSelector((state) => state);
  var authState = Object.keys(auth.authorization).length;
  const [counterNumber, setCounterNumber] = useState(0);
  const [liked, setLiked] = useState(false);
  const [dayFinished, setDayFinished] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const dispatch = useDispatch();
  const [bitNumber, setBitNumber] = useState("");
  const [auctionEndTime, setauctionEndTime] = useState("");
  const [colorId, setColorId] = useState("");
  const [selected, setSelectes] = useState("");
  const [addToCartState, setAddToCartState] = useState(false);
  const [colorState, setColorState] = useState(false);
  let quantityWishList = useSelector((state) => state.wishlist.quantity);
  const [bitPrices, setBitPrices] = useState([]);
  const searchInPath = location.pathname.indexOf(":");
  const id = location.pathname.slice(searchInPath + 1);
  const quantityCart = useSelector((state) => state.cart.quantity);

  const now = new Date();

  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/auction_prices/${id}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      setBitPrices(res.data.data.items.splice(0, 5));
    });
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/product/${id}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      setauctionEndTime(res.data.data.product.auction_end_time);

      if (
        res.data.data.product.auction_end_time.slice(0, 10) >
        moment(now).format("YYYY-MM-DD")
      ) {
        setDayFinished(true);
      } else {
        setDayFinished(false);
      }
    });
  }, [auth.authorization.access_token, id]);
  const saveData = (e) => {
    if (e.target.id === "bitNumber") {
      setBitNumber(e.target.value);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (bitNumber) {
      axios({
        method: "post",
        url: `https://offers.com.fig-leaf.net/api/v1/new_price`,
        headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
        data: {
          price: bitNumber,
          product_id: id,
        },
      })
        .then((res) => {
          if (res.data.success === true) {
            window.location.reload(false);
          }
        })
        .catch((error) => {
          setErrorMsg(error.response.data.message);
        });
    }
  };
  const increaseCount = () => {
    setCounterNumber(counterNumber + 1);
  };
  const decreaseCount = () => {
    if (counterNumber !== 0) {
      setCounterNumber(counterNumber - 1);
    }
  };

  const addToCart = () => {
    if (authState === 0) {
      history.push(`/SignUp`);
    } else {
      axios({
        method: "post",
        url: `https://offers.com.fig-leaf.net/api/v1/add_to_cart`,
        headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
        data: {
          product_id: product.id,
          quantity: activeState.activeState === "true" ? 1 : counterNumber,
          color_id: colorId && colorId,
        },
      }).then((res) => {
        if (res.data.success === true) {
          setAddToCartState(true);
          dispatch(addProduct(quantityCart + 1));
        }
      });
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
        <div className="price mt-2">
          <p className="price_container">
            SAR
            <span>{product.price}</span>
          </p>
        </div>
        {activeState.activeState === "true" && (
          <>
            <div className="auction_end">
              <span className="bitPrices">
                {currentLocal.bit.auctionEnd} :{" "}
              </span>
              <span className="auction_end_date">
                {auctionEndTime && auctionEndTime}
              </span>
            </div>
            <div className="auction_price_input mb-3">
              <form onSubmit={sendData}>
                <Container fluid className="p-0">
                  {" "}
                  <p>{errorMsg && errorMsg}</p>{" "}
                  <Row>
                    <Col md={7}>
                      <input
                        className="w-100 m-0"
                        type="number"
                        id="bitNumber"
                        onChange={saveData}
                        value={bitNumber}
                        disabled={!dayFinished && "disabled"}
                      />
                    </Col>
                    <Col md={5}>
                      <div className="bit_button w-100 pb-3">
                        <button
                          type="submit"
                          className=" text-center bit_btn"
                          disabled={!dayFinished && "disabled"}
                        >
                          {currentLocal.bit.bit}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </form>
              <Container fluid className="p-0 mt-3">
                {/* <p className="heightBitPrice">
                {currentLocal.bit.startingBid} : SAR {heightBitPrice}
              </p> */}
                <Row>
                  <Col md={4}>
                    <p className="bitPrices">{currentLocal.bit.bitPrices}:</p>
                  </Col>
                  <Col md={8}>
                    {bitPrices &&
                      bitPrices.map((price, index) => {
                        return (
                          <div
                            className="prices d-flex justify-content-around"
                            key={index}
                          >
                            <div className="name">{price.user.surname}</div>
                            <div className="auction_price">
                              <p className="price_container">
                                SAR
                                <span>{price.price}</span>
                              </p>
                            </div>
                          </div>
                        );
                      })}
                  </Col>
                </Row>
              </Container>
            </div>
          </>
        )}
        {!activeState && (
          <p className="mb-0 slecet_color">
            {currentLocal.productDetails.selectColor}
          </p>
        )}
        <div className="colors d-flex">
          <div className={colorState?"activeColorName d-flex":"ColorName d-flex"}>
            <img src={redCheck} alt={redCheck} />
            <p className="mb-0 mx-2">{currentLocal.productDetails.ColorName}</p>
          </div>
          <Container fluid className="p-0">
            <Row>
              {product.colors !== undefined &&
                product.colors.map((productColor) => {
                  const name =
                    currentLocal.language === "English"
                      ? productColor.en_name
                      : productColor.ar_name;
                  const active = selected === name ? "active" : "";
             
                  return (
                    <Col md={3} className="mt-2">
                      <div
                        className={"product_coolor mx-2 d-flex " + active}
                        key={productColor.id}
                        onClick={() => {
                          setColorId(productColor.id);
                          setSelectes(
                            currentLocal.language === "English"
                              ? productColor.en_name
                              : productColor.ar_name
                          );
                        }}
                      >
                        <p
                          className="bg-color mb-0"
                          style={{ backgroundColor: productColor.color }}
                        ></p>
                        <p className="mb-0 mx-2">
                          {currentLocal.language === "English"
                            ? productColor.en_name
                            : productColor.ar_name}
                          {productColor.name}
                        </p>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          </Container>
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
          {!activeState.activeState && (
            <div className="product_info_add_cart">
              <div
                className={
                  addToCartState
                    ? " added_to_cart"
                    : "product_info_add_cart_button"
                }
                onClick={addToCart}
              >
                {currentLocal.productDetails.addToCart}
              </div>
            </div>
          )}
          {activeState && product.is_selected_for_auction && (
            <div className="product_info_add_cart">
              <div
                className={
                  addToCartState
                    ? " added_to_cart"
                    : "product_info_add_cart_button"
                }
                onClick={addToCart}
              >
                {currentLocal.productDetails.addToCart}
              </div>
            </div>
          )}
          {/* </>
          )} */}
          <div
            className="product_info_add_wish_list d-flex"
            style={{ cursor: "pointer" }}
          >
            <div className="icons" id={product.id}>
              {product.is_favorite || liked ? (
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
                  id={product.id}
                />
              )}
            </div>
            <p className="m-0 d-inline-block mt-2">
              {currentLocal.productDetails.saveToWishlist}
            </p>
          </div>
        </div>
        <p className="productPragraph mt-4">
          {currentLocal.language === "English"
            ? product.en_short_desc
            : product.ar_shortحح_desc}
        </p>
        <p className="product_info_category_name">
          {currentLocal.productDetails.Categories}
          <span>
            ؛
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
