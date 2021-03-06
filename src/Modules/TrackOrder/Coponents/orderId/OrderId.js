import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import rightArrow from "../../../../Resources/Assets/img/Icon feather-arrow-left.svg";
import leftArrow from "../../../../Resources/Assets/img/leftArrow.svg";
import { useHistory } from "react-router-dom";
import "./OrderId.css";
function TrackOrderBox() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  // const history = useHistory();
  const [orderId, setOrderId] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [alert, setAlert] = useState(false);
  const [dangerAlert, setDangerAlert] = useState(false);
  var { auth } = useSelector((state) => state);
  const History = useHistory();
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
      axios({
        method: "post",
        url: `https://offers.com.fig-leaf.net/api/v1/search_for_order`,
        headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
        data: {
          order_number: orderId,
        },
      })
        .then((res) => {
          if (res.data.success === true) {
            History.push(`/trackorderproducts/:${res.data.data.id}`);
          }
        })
        .catch((err) => {
          setAlertMsg(err.response.data.message);
          setDangerAlert(true);
        });
      // history.push("/trackorderproducts");
      // window.scrollTo(0, 0);
    }
  };
  return (
    <div
      className={
        currentLocal.language === "English" ? "OrderId" : "ar_OrderId OrderId"
      }
    >
      <h1>{currentLocal.track.trackTitle}</h1>
      <div className="OrderId_container">
        <div className="errorMsg">
          {dangerAlert && <Alert variant={"danger "}>{alertMsg}</Alert>}
          {alert && (
            <Alert
              className={currentLocal.language === "??????????????" && "text-right"}
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
