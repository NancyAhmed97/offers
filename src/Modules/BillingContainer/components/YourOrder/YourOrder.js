import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../../../Resources/Assets/img/leftArrow.svg";
import "./YourOrder.css";
function YourOrder({ alertState }) {
  const history = useHistory();
  var { auth } = useSelector((state) => state);
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [orderProduct, setOrderProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/cart`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setOrderProduct(res.data.data.cart.products);
        setTotalPrice(res.data.data.cart.price);
      }
    });
  }, [auth]);

  const passData = () => {
    if (
      !localStorage.getItem("firstName") ||
      !localStorage.getItem("lastName") ||
      !localStorage.getItem("streetAddress") ||
      !localStorage.getItem("email") ||
      !localStorage.getItem("mobile") ||
      !localStorage.getItem("AddressType") ||
      !localStorage.getItem("acceptTerms") ||
      !localStorage.getItem("orderNode")
    ) {
      alertState(true);
      window.scrollTo(0, 0);
    } else {
      alertState(false);
      history.push("/payment");
      window.scrollTo(0, 0);
    }
  };
  return (
    <div className="your_order mt-4">
      <div className="your_order_container">
        <h1>{currentLocal.billing.yourOrder}</h1>
        <div className="product_count d-flex justify-content-between">
          <p>{orderProduct && orderProduct.length} Products</p>
          <p>{currentLocal.billing.Subtotal}</p>
        </div>
        {orderProduct &&
          orderProduct.map((productItem) => {
            console.log(productItem.product);
            console.log(productItem);
            return (
              <div
                key={productItem.product.id}
                className="products d-flex justify-content-between mt-2"
              >
                <div>
                  <span>
                    {currentLocal.language === "English"
                      ? productItem.product.en_name
                      : productItem.product.ar_name}
                  </span>
                  <span className="count">x{productItem.quantity}</span>
                </div>
                <div className="product_price ">
                  {productItem.total_price} SAR
                </div>
              </div>
            );
          })}
        <div className="product_Subtotal d-flex justify-content-between mt-2">
          <p>{currentLocal.billing.Subtotal}</p>
          <p>3,560SAR</p>
        </div>

        <div className="vat_container d-flex justify-content-between mt-2">
          <p>{currentLocal.billing.vat}</p>
          {/* <p>150 SAR</p> */}
        </div>
        {/* <div className="discount_container d-flex justify-content-between mt-1">
          <p>{currentLocal.billing.discount}</p>
          <p>-150 SAR</p>
        </div> */}
        <div className="total d-flex justify-content-between mt-2">
          <p>{currentLocal.payment.total}</p>
          <p>{totalPrice}SAR</p>
        </div>
        <div className="d-flex justify-content-center billingPragraph mt-4">
          <p>{currentLocal.billing.billingPragraph}</p>
        </div>
      </div>
      <div className="button mt-4">
        <Link onClick={passData} className="text-decoration-none">
          <button>
            {currentLocal.language === "English" ? (
              <>
                {currentLocal.billing.continueToPayment}
                <img src={rightArrow} alt="rightArrow" />
              </>
            ) : (
              <>
                {currentLocal.billing.continueToPayment}
                <img src={leftArrow} alt="leftArrow" />
              </>
            )}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default YourOrder;
