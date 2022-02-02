import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../../../Resources/Assets/img/leftArrow.svg";
import "./YourOrder.css";
function YourOrder() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const product = [
    {
      id: "0",
      name: "Add product name here in this space and edit it",
      count: "x1",
      price:"3,560 SAR"
    },
    {
      id: "1",
      name: "Add product name here in this space and edit it",
      count: "x1",
      price:"3,560 SAR"
    },
    {
      id: "2",
      name: "Add product name here in this space and edit it",
      count: "x1",
      price:"3,560 SAR"
    },
  ];
  return (
    <div className="your_order mt-4">
      <div className="your_order_container">
        <h1>{currentLocal.billing.yourOrder}</h1>
        <div className="product_count d-flex justify-content-between">
          <p>3 Products</p>
          <p>{currentLocal.billing.Subtotal}</p>
        </div>
          {product.map((productItem) => {
          console.log(productItem);
          return (
            <div
              key={productItem.id}
              className="products d-flex justify-content-between mt-2"
            >
              <div >
              <span>{productItem.name}</span>
              <span className="count">{productItem.count}</span>
              </div>
              <div className="product_price mt-4">{productItem.price}</div>
            </div>
          );
        })}
        <div className="product_Subtotal d-flex justify-content-between mt-2">
          <p>{currentLocal.billing.Subtotal}</p>
          <p>3,560SAR</p>
        </div>
  
        <div className="vat_container d-flex justify-content-between mt-2">
          <p>{currentLocal.billing.vat}</p>
          <p>150 SAR</p>
        </div>
        <div className="discount_container d-flex justify-content-between mt-1">
          <p>{currentLocal.billing.discount}</p>
          <p>-150 SAR</p>
        </div>
        <div className="total d-flex justify-content-between mt-2">
          <p>{currentLocal.payment.total}</p>
          <p>3,560SAR</p>
        </div>
        <div className="d-flex justify-content-center billingPragraph mt-4">
          <p>{currentLocal.billing.billingPragraph}</p>
        </div>
      </div>
      <div className="button mt-4">
        <Link to="/payment" className="text-decoration-none">
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
