import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../../../Resources/Assets/img/leftArrow.svg";
import "./OrderSummery.css";
function OrderSummery({
  paymentType,
  nameOnCard,
  cardNumber,
  cvv,
  cardExpiryMonth,
  expiryYear,
  alertState,
  SuccessAlert,
  AlertMsg,
  DangerAlert,
}) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  var { auth } = useSelector((state) => state);

  const sendOrder = () => {
    if (
      !paymentType ||
      !nameOnCard ||
      !cardNumber ||
      !cvv ||
      !cardExpiryMonth
    ) {
      alertState(true);
    } else {
      axios({
        method: "post",
        url: `https://offers.com.fig-leaf.net/api/v1/new_order`,
        headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
        data: {
          country: localStorage.getItem("country"),
          phone_code: localStorage.getItem("countryPhoneId"),
          city: localStorage.getItem("city"),
          first_name: localStorage.getItem("firstName"),
          last_name: localStorage.getItem("lastName"),
          email: localStorage.getItem("email"),
          mobile: localStorage.getItem("mobile"),
          street_address: localStorage.getItem("streetAddress"),
          address_type: localStorage.getItem("AddressType"),
          payment_type: paymentType && paymentType,
          card_number: cardNumber && cardNumber,
          card_holder: nameOnCard && nameOnCard,
          card_expiryMonth: cardExpiryMonth && cardExpiryMonth,
          card_expiryYear: expiryYear && expiryYear,
          card_cvv: cvv && cvv,
          needs: localStorage.getItem("orderNode"),
        },
      }).then((res) => {
        if (res.data.success === true) {
          localStorage.setItem("orderCode",res.data.data.order_number)
          alertState(false);
          SuccessAlert(true);
          AlertMsg(res.data.message);
        } else {
          DangerAlert(true);
          AlertMsg(res.data.message);
        }
      });
    }
  };
  return (
    <div className="order_summery mt-4">
      <div className="order_summery_container">
   
        <h1>{currentLocal.payment.orderSummary}</h1>
        <div className="total d-flex justify-content-between mt-2">
          <p>{currentLocal.payment.total}</p>
          <p className="total_price">
            {localStorage.getItem("finalPrice")} SAR
          </p>
        </div>
        <div className="order_name  mt-2">
          <p className="mb-0">{currentLocal.payment.name}</p>
          <p className="name ">{localStorage.getItem("firstName")}</p>
        </div>
        <div className="order_delivery_address  mt-2">
          <p className="mb-0">{currentLocal.payment.deliveryAddress}</p>
          <p className="deliveryAddress ">
            {localStorage.getItem("streetAddress")}{" "}
          </p>
        </div>
        <div className="order_mobileNumber  mt-2">
          <p className="mb-0">{currentLocal.payment.mobileNumber}</p>
          <p className="mobileNumber ">
            +{localStorage.getItem("countryPhoneId")}
            {localStorage.getItem("mobile")}{" "}
          </p>
        </div>
        <div className="order_email  mt-2">
          <p className="mb-0">{currentLocal.conactus.mailInfotitle}</p>
          <p className="email ">{localStorage.getItem("email")}</p>
        </div>
        <div className="order_other_notes  mt-2">
          <p className="mb-0">{currentLocal.payment.otherNotes}</p>
          <p className="otherNotes mb-0">{localStorage.getItem("orderNode")}</p>
        </div>
      </div>
      <div className="button mt-4">
        <button onClick={sendOrder}>
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
