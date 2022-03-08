import React, { useEffect, useState } from "react";
import "./TrackOrderTable.css";
import productImg from "../../../../../../Resources/Assets/img/Appleheadphones.png";
import { useSelector } from "react-redux";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";

function TrackOrderTable() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  var { auth } = useSelector((state) => state);
  const [orderDetails, setOrderDetails] = useState("");
  useEffect(() => {
    const orderPath = window.location.href.lastIndexOf(":");
    const orderId = window.location.href.slice(orderPath + 1);
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/order_detail/${orderId}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setOrderDetails(res.data.data);
      }
    });
  }, [auth.authorization.access_token]);
  console.log(orderDetails);
  console.log(orderDetails.address && orderDetails.address.country);
  // const product = [
  //   {
  //     id: "0",
  //     img: productImg,
  //     name: "Add product name here in this space and edit it",
  //     color: "red",
  //     price: "340 SAR",
  //     count: "1",
  //   },
  //   {
  //     id: "1",
  //     img: productImg,
  //     name: "Add product name here in this space and edit it",
  //     color: "green",
  //     price: "340 SAR",
  //     count: "1",
  //   },
  //   {
  //     id: "2",
  //     img: productImg,
  //     name: "Add product name here in this space and edit it",
  //     color: "yellow",
  //     price: "340 SAR",
  //     count: "1",
  //   },
  // ];

  return (
    <div
      className={
        currentLocal.language === "English"
          ? "track_order_table mt-4 mb-5"
          : "track_order_table ar_track_order_table mt-4 mb-5"
      }
    >
      <div className="cart_details_container">
        {/* <Container fluid className="p-0"> */}
        <Row className="track_order_table_title border-bottom">
          <Col md={6} xs={6}>
            {" "}
            <p className="mb-0 d-flex order_number">
              {currentLocal.track.Ordernumber} # {orderDetails.order_number}{" "}
            </p>
          </Col>
          <Col md={2} xs={3}>
            {" "}
            <p className="mb-0 deliveryAddress">
              {currentLocal.track.deliveryAddress}
            </p>
          </Col>
          <Col md={4} xs={3}>
            <p className="mb-0 trackpragraph">
              {orderDetails.address && orderDetails.address.city} ,{" "}
              {orderDetails.address && orderDetails.address.country}{" "}
            </p>
          </Col>
        </Row>
        {orderDetails.length !== 0 &&
          orderDetails.products.map((productItem, index) => {
            console.log(productItem);
            return (
              <Row className="mt-3">
                <Col md={6}>
                  <div className="d-flex">
                    <div className="product_img">
                      <img src={productImg} alt="productImg" />
                    </div>
                    <div>
                      <p className="product_img_name mx-3">
                        {currentLocal.language === "English"
                          ? productItem.en_name
                          : productItem.ar_name}
                      </p>
                      <span className="color mx-3">
                        {currentLocal.cart.Color}:
                    
                      </span>
                      <span
                          className="product_color d-inline-block "
                          style={{ backgroundColor: productItem.color }}
                        ></span>
                    </div>
                  </div>
                </Col>
              </Row>
            );
          })}
        {/* {orderDetails.length !== 0 &&
           orderDetails.products.map((productItem,index) => {
            const url = "https://offers.com.fig-leaf.net";
            return (
              <Row className="p-0 mt-4 product_row" key={productItem.id}>
                <Col xs={2} md={2}>
                  <div className="product_img">
                    <img
                      src={url + productItem.product.image}
                      alt="productImg"
                    />
                  </div>
                </Col>
                <Col xs={5} md={4}>
                  <div className="d-flex justify-content-between details">
                    <div className="product_img_details">
                      <p className="product_img_name mb-0">
                        {" "}
                        {currentLocal.language === "English"
                          ? productItem.product.en_name
                          : productItem.product.ar_name}
                      </p>
                      <span className="color">
                        {currentLocal.cart.Color}:
                      </span>
                      <div
                        className="product_color d-inline-block"
                        style={{ backgroundColor: productItem.color.color }}
                      ></div>
                      <div className="product_color d-inline-block">
                        {currentLocal.language === "English"
                          ? productItem.color.en_name
                          : productItem.color.ar_name}
                      </div>
                    </div>
                    <p className="mb-0 Price ">
                      {productItem.product.price} SAR
                    </p>
                  </div>
                </Col>
                <Col xs={4} md={4}>
                  <div className="d-flex justify-content-around details position-relative">
                    <div className="Quantity ">
                      <div className="product_info_number_product_container d-flex justify-content-between w-50">
                    
                        <p className="p-0 m-0 counter">
                          {productItem.quantity}
                        </p>
                      </div>
                    </div>{" "}
                    <p className="mb-0 Subtotal">
                      {productItem.total_price} SAR
                    </p>
                  </div>
                </Col>
             
              </Row>
            );
          })} */}
        {/* </Container> */}
      </div>
    </div>
    //   <div
    //     className={
    //       currentLocal.language === "English"
    //         ? "track_order_table"
    //         : "track_order_table ar_track_order_table"
    //     }
    //   >
    //     <table className="w-100">
    //       <thead>
    //         <tr className="border-bottom" >
    //           <th className="Ordernumber">
    //             {currentLocal.track.Ordernumber} # {orderDetails.order_number}
    //           </th>
    //           <th className="deliveryAddress">
    //             {currentLocal.track.deliveryAddress}
    //           </th>
    //           <th className="trackpragraph">
    //             {orderDetails.address && orderDetails.address.city} ,{" "}
    //             {orderDetails.address && orderDetails.address.country}
    //           </th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {orderDetails &&
    //           orderDetails.products.map((productItem,index) => {
    //             console.log(productItem.price);
    //             return (
    //               <tr key={index} className="my-3">
    //                 <td >
    //                   <div className="Product d-flex" >
    //                     <div className="product_img">
    //                       <img src={productImg} alt="productImg" />
    //                     </div>
    //                     <div className="product_img_details">
    //                       <p className="product_img_name">
    //                         {currentLocal.language === "English"
    //                           ? productItem.en_name
    //                           : productItem.ar_name}
    //                       </p>
    //                       <span className="color">
    //                         {currentLocal.cart.Color}:
    //                       </span>
    //                       <div
    //                         className="product_color d-inline-block"
    //                         style={{ backgroundColor: productItem.color }}
    //                       ></div>
    //                       <div className="product_color d-inline-block">
    //                         {productItem.color_name}
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </td>
    //                 <td className="count">x{productItem.quantity}</td>
    //                 <td className="price">{productItem.price}
    //                 <span className="currancy">SAR</span>
    //                 </td>
    //               </tr>
    //             );
    //           })}
    //       </tbody>

    //       {/* <tr>
    //   <td>Alfreds Futterkiste</td>
    //   <td>Maria Anders</td>
    //   <td>Germany</td>
    // </tr>
    // <tr>
    //   <td>Centro comercial Moctezuma</td>
    //   <td>Francisco Chang</td>
    //   <td>Mexico</td>
    // </tr>
    // <tr>
    //   <td>Ernst Handel</td>
    //   <td>Roland Mendel</td>
    //   <td>Austria</td>
    // </tr> */}
    //     </table>
    //   </div>
  );
}

export default TrackOrderTable;
