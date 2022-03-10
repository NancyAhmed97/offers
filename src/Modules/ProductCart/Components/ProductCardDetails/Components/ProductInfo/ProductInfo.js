import React, { useState, useEffect } from "react";
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
import { useLocation } from "react-router-dom";
import "./ProductInfo.css";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Col, Container, Row } from "react-bootstrap";
function ProductInfo({ product, activeState }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const location = useLocation();
  const history = useHistory();
  var { auth } = useSelector((state) => state);
  var authState = Object.keys(auth.authorization).length;
  const [counterNumber, setCounterNumber] = useState(0);
  const [liked, setLiked] = useState(false);
  const [style, setStyle] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [bitNumber, setBitNumber] = useState("");
  const [colorId, setColorId] = useState("");
  // const [heightBitPrice, setHeightBitPrice] = useState("");
  const [bitPrices, setBitPrices] = useState([]);
  const searchInPath = location.pathname.indexOf(":");
  const id = location.pathname.slice(searchInPath + 1);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/auction_prices/${id}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      setBitPrices(res.data.data.items);
      // setHeightBitPrice(res.data.data.items[0].price);
    });
  }, [activeState.activeState, id, auth.authorization.access_token]);
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
    axios({
      method: "post",
      url: `https://offers.com.fig-leaf.net/api/v1/add_to_cart`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
      data: {
        product_id: product.id,
        quantity: counterNumber,
        color_id: colorId && colorId,
      },
    }).then((res) => {
      if (res.data.success === true) {
      }
    });
  };
  const likeProduct = (e) => {
    if (authState !== 0) {
      axios({
        method: "get",
        url: `https://offers.com.fig-leaf.net/api/v1/toggleFavorite/${e.target.id}`,
        headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
      }).then((res) => {
        setLiked(!liked);
      });
    } else {
      history.push("/signup");
      window.scrollTo(0, 0);
    }
  };
  console.log(colorId);
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
        {activeState.activeState === "true" && (
          <div className="auction_price_input mb-4">
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
                    />
                  </Col>
                  <Col md={5}>
                    <div className="bit_button w-100 ">
                      <button type="submit" className=" text-center bit_btn">
                        Bit
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
                        <div className="prices" key={index}>
                          <p className="price_container">
                            SAR
                            <span>{price.price}</span>
                          </p>
                        </div>
                      );
                    })}
                </Col>
              </Row>
            </Container>
          </div>
        )}

        <div className="colors d-flex">
          <div className="ColorName d-flex">
            <img src={redCheck} alt={redCheck} />
            <p className="mb-0 mx-2">{currentLocal.productDetails.ColorName}</p>
          </div>
          <Container fluid className="p-0">
            <Row>
              {product.colors !== undefined &&
                product.colors.map((productColor) => {
                  return (
                    <Col md={3} className="mt-2">
                      <div
                        className={style?"style_product_color":"product_coolor mx-2 d-flex"}
                        key={productColor.id}
                        onClick={() => {
                          setColorId(productColor.id);
                          setStyle(true);
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
          {activeState !== true && (
            <div className="product_info_add_cart">
              <div className="product_info_add_cart_button" onClick={addToCart}>
                {currentLocal.productDetails.addToCart}
              </div>
            </div>
          )}
          {activeState && (
            <div className="product_info_add_cart" style={{ display: "none" }}>
              <div className="product_info_add_cart_button" onClick={addToCart}>
                {currentLocal.productDetails.addToCart}
              </div>
            </div>
          )}
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
            <p className="m-0 d-inline-block mt-2">
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
