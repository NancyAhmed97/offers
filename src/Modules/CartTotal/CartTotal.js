import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import rightArrow from "../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../Resources/Assets/img/leftArrow.svg";
import "./CartTotal.css";
function CartTotal({ total }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  console.log(total);
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "cart_total mt-4 "
          : "cart_total ar_cart_total mt-4 "
      }
    >
      <div className="cart_total_conatiner">
        <h1>{currentLocal.cart.CartTotal}</h1>
        <div className="product_Subtotal d-flex justify-content-between mt-4">
          <p className="mb-0">{currentLocal.billing.Subtotal}</p>
          <p className="mb-0">{total.price} SAR</p>
        </div>
        <div className="vat_container d-flex justify-content-between mt-2">
          <p className="mb-0">{currentLocal.billing.tax}</p>
          <p className="mb-0">{total.tax_value} SAR</p>
        </div>
        {/* <div className="vat_node mt-3">
          <p className="mb-0">{currentLocal.cart.node}</p>
        </div> */}
        {/* <div className="change_address mt-2">
            <p className="mb-0">{currentLocal.cart.changeAddress}</p>
        </div>
        <div className="discount_container d-flex justify-content-between mt-3">
          <p className="mb-0">{currentLocal.billing.discount}</p>
          <p className="mb-0">-150 SAR</p>
        </div> */}
        <div className="total d-flex justify-content-between mt-3 pt-2">
          <p>{currentLocal.payment.total}</p>
          <p>{total.final_price_with_tax} SAR</p>
        </div>
      </div>
      <div className="button mt-4">
        <Link to="/billing" className="text-decoration-none">
          <button>
            {currentLocal.language === "English" ? (
              <>
                {currentLocal.cart.proceedToCheckout}
                <img src={rightArrow} alt="rightArrow" />
              </>
            ) : (
              <>
                {currentLocal.cart.proceedToCheckout}
                <img src={leftArrow} alt="leftArrow" />
              </>
            )}
          </button>
        </Link>
      </div>{" "}
    </div>
  );
}

export default CartTotal;
