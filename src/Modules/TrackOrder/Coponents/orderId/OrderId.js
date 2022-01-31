import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../../../Resources/Assets/img/leftArrow.svg";
import "./OrderId.css";
function TrackOrderBox() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const history = useHistory();
  const [orderId, setOrderId] = useState("");
  const [alert, setAlert] = useState(false);
  const saveData = (e) => {
    if (e.target.id === "orderId") {
      setOrderId(e.target.value);
      setAlert(false);
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!orderId) {
      setAlert(true);
    } else {
      history.push("/trackorderproducts");
      window.scrollTo(0, 0);
    }
  };
  console.log(orderId);
  return (
    <div
      className={
        currentLocal.language === "English" ? "OrderId" : "ar_OrderId OrderId"
      }
    >
      <h1>{currentLocal.track.trackTitle}</h1>
      <div className="OrderId_container">
        <div className="errorMsg">
          {alert && (
            <Alert
              className={currentLocal.language === "العربيه" && "text-right"}
              variant={"danger"}
            >
              *{currentLocal.auth.alert}
            </Alert>
          )}
        </div>
        <p>{currentLocal.track.trackPragraph}</p>
        <form onSubmit={sendData}>
          <label>{currentLocal.track.orderId} </label>
          <input
            className="dark_input w-100"
            type="text"
            id="orderId"
            onChange={saveData}
            value={orderId}
          />
          <div className="button mt-5 ">
            <button type="submit">
              {currentLocal.language === "English" ? (
                <>
                  {currentLocal.footer.track}
                  <img src={rightArrow} alt="rightArrow" />
                </>
              ) : (
                <>
                  {currentLocal.footer.track}
                  <img src={leftArrow} alt="leftArrow" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TrackOrderBox;
