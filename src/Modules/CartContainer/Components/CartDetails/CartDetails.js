import React, { useState } from "react";
import { useSelector } from "react-redux";
import closeIcon from "../../../../Resources/Assets/img/Group 8156.svg";
import productImg from "../../../../Resources/Assets/img/Appleheadphones.png";
import increase from "../../../../Resources/Assets/img/Group 8203.png";
import decrease from "../../../../Resources/Assets/img/Group 8204.png";
import "./CartDetails.css";
function CartDetails() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const product = [
    {
      id: "0",
      img: productImg,
      name: "Add product name here in this space and edit it",
      color: "red",
      price: "340 SAR",
      count: "2",
      Subtotal: "680 SAR",
    },
    {
      id: "1",
      img: productImg,
      name: "Add product name here in this space and edit it",
      color: "green",
      price: "340 SAR",
      count: "2",
      Subtotal: "680 SAR",
    },
    {
      id: "2",
      img: productImg,
      name: "Add product name here in this space and edit it",
      color: "yellow",
      price: "340 SAR",
      count: "2",
      Subtotal: "680 SAR",
    },
  ];
  const [counterNumber, setCounterNumber] = useState(0);
  console.log(setCounterNumber);
  //   const increaseCount = () => {
  //     setCounterNumber(counterNumber + 1);
  //   };
  //   const decreaseCount = () => {
  //     if (counterNumber !== 0) {
  //       setCounterNumber(counterNumber - 1);
  //     }
  //   };

  return (
    <div className={currentLocal.language==="English"?"cart_details mt-4 mb-5":"cart_details ar_cart_details mt-4 mb-5"}>
      <h1>{currentLocal.cart.cartDetails}</h1>
      <div className="cart_details_container">
        <table>
          <tr>
            <th className="product_label">
              <p className="mb-0">{currentLocal.cart.product}</p>
            </th>
            <th >
              {" "}
              <p className="mb-0 price_label">{currentLocal.cart.price}</p>
            </th>
            <th>
              <p className="mb-0 quantity_label">{currentLocal.cart.quantity}</p>
            </th>
            <th>
              {" "}
              <p className="mb-0">{currentLocal.cart.subtotal}</p>
            </th>
          </tr>
          {product.map((productItem, index) => {
            return (
              <tr key={productItem.id} className="prouduct_row">
                <td>
                  <div className="Product d-flex ">
                    <div className="product_img">
                      <img src={productImg} alt="productImg" />
                    </div>
                    <div className="product_img_details">
                      <p className="product_img_name">{productItem.name}</p>
                      <span className="color">{currentLocal.cart.Color}:</span>
                      <div
                        className="product_color d-inline-block"
                        style={{ backgroundColor: productItem.color }}
                      ></div>
                      <div className="product_color d-inline-block">
                        {productItem.color}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="mb-0 Price">{productItem.price}</p>
                </td>
                <td>
                  {" "}
                  <div className="Quantity ">
                    <div className="product_info_number_product_container d-flex justify-content-between w-50">
                      <p
                        className="p-0 m-0 decrease_container"
                        // onClick={decreaseCount}
                      >
                        <img src={decrease} alt="decrease" className="mx-2" />
                      </p>
                      <p className="p-0 m-0 counter">{counterNumber}</p>
                      <p
                        className="p-0 m-0 increase_container"
                        // onClick={(e) => {
                        //   console.log(e.target.id);
                        // }}
                      >
                        <img
                          src={increase}
                          alt="increase"
                          id={productItem.id}
                          className="mx-2"
                        />
                      </p>
                    </div>
                  </div>{" "}
                </td>
                <td className="Subtotal">
                  {" "}
                  <p className="mb-0 Subtotal">{productItem.Subtotal}</p>
                  <img
                          src={closeIcon}
                          alt="closeIcon"
                          id={productItem.id}
                        />
                </td>
              </tr>
            );
          })}
        </table>

        {/* <div className="cart_details_title">
          <Container fluid>
            <Row>
              <Col md={5} className="p-0">
                <div className="Product d-flex justify-content-center">
                  <p>{currentLocal.cart.product}</p>
                </div>
              </Col>
              <Col md={2} className="p-0">
                <div className="Price d-flex justify-content-center">
                  <p>{currentLocal.cart.price}</p>
                </div>{" "}
              </Col>
              <Col md={2} className="p-0">
                <div className="Quantity d-flex justify-content-center">
                  <p>{currentLocal.cart.quantity}</p>
                </div>{" "}
              </Col>
              <Col md={2} className="p-0">
                <div className="Subtotal d-flex justify-content-center">
                  <p>{currentLocal.cart.subtotal}</p>
                </div>
              </Col>
              <Col md={1} className="p-0"></Col>
            </Row>
          </Container>
        </div>
        <div className="product_container px-4">
          {product.map((productItem, index) => {
            return (
              <div className="products mt-4 pb-4" key={productItem.id}>
                <Container fluid>
                  <Row>
                    <Col md={5} className="p-0">
                      <div className="Product d-flex ">
                        <div className="product_img">
                          <img src={productImg} alt="productImg" />
                        </div>
                        <div className="product_img_details">
                          <p className="product_img_name">{productItem.name}</p>
                          <span className="color">
                            {currentLocal.cart.Color}:
                          </span>
                          <div
                            className="product_color d-inline-block"
                            style={{ backgroundColor: productItem.color }}
                          ></div>
                          <div className="product_color d-inline-block">
                            {productItem.color}
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={2} className="p-0">
                      <div className="Price d-flex justify-content-center h-100 align-items-center">
                        <p className="mb-0">{productItem.price}</p>
                      </div>{" "}
                    </Col>
                    <Col md={2} className="p-0">
                      <div className="Quantity d-flex justify-content-center h-100 align-items-center">
                        <div className="product_info_number_product_container d-flex justify-content-between w-50">
                          <p
                            className="p-0 m-0 decrease_container"
                            // onClick={decreaseCount}
                          >
                            <img
                              src={decrease}
                              alt="decrease"
                              className="mx-2"
                            />
                          </p>
                          <p className="p-0 m-0 counter">{counterNumber}</p>
                          <p
                            className="p-0 m-0 increase_container"
                            // onClick={(e) => {
                            //   console.log(e.target.id);
                            // }}
                          >
                            <img
                              src={increase}
                              alt="increase"
                              id={productItem.id}
                              className="mx-2"
                            />
                          </p>
                        </div>
                      </div>{" "}
                    </Col>
                    <Col md={2} className="p-0">
                      <div className="Subtotal d-flex justify-content-center h-100 align-items-center">
                        <p className="mb-0">{productItem.Subtotal}</p>
                      </div>
                    </Col>
                    <Col md={1} className="p-0">
                      <div className="close_icone_container d-flex justify-content-end  h-100 align-items-center">
                        <img
                          src={closeIcon}
                          alt="closeIcon"
                          id={productItem.id}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
}

export default CartDetails;
