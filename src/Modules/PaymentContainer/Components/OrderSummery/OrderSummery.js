import React from "react";
import { useSelector } from "react-redux";
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../../../Resources/Assets/img/leftArrow.svg";
import "./OrderSummery.css";
function OrderSummery() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div className="order_summery mt-4">
      <div className="order_summery_container">
        <h1>{currentLocal.payment.orderSummary}</h1>
        <div className="total d-flex justify-content-between mt-2">
          <p>{currentLocal.payment.total}</p>
          <p className="total_price">3,560SAR</p>
        </div>
        <div className="order_name  mt-2">
          <p className="mb-0">{currentLocal.payment.name}</p>
          <p className="name ">Muhammed Elbehiri</p>
        </div>
        <div className="order_delivery_address  mt-2">
          <p className="mb-0">{currentLocal.payment.deliveryAddress}</p>
          <p className="deliveryAddress ">Your Personal Data Will Be Used To Process Your Order, Jeddah, Saudi </p>
        </div>
        <div className="order_mobileNumber  mt-2">
          <p className="mb-0">{currentLocal.payment.mobileNumber}</p>
          <p className="mobileNumber ">+966 052 6545483 </p>
        </div>
        <div className="order_email  mt-2">
          <p className="mb-0">{currentLocal.conactus.mailInfotitle}</p>
          <p className="email ">Mike.Miller@Mail.Com</p>
        </div>
        <div className="order_other_notes  mt-2">
          <p className="mb-0">{currentLocal.payment.otherNotes}</p>
          <p className="otherNotes mb-0">Your Personal Data Will Be Used To Process Your Order, Support Your Experience Throughout This Website, And </p>
        </div>
      </div>
      <div className="button mt-4">
      <button>
                  {currentLocal.language === "English" ? (
                    <>
                      {currentLocal.payment.placeOrder}
                      <img src={rightArrow} alt="rightArrow" />
                    </>
                  ) : (
                    <>
                      {currentLocal.payment.placeOrder}
                      <img src={leftArrow} alt="leftArrow" />
                    </>
                  )}
                </button>
      </div>
    </div>
  );
}

export default OrderSummery;
