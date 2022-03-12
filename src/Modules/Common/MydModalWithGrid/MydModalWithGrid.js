import React, { useState } from "react";
import {  Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import closeIcon from "../../../Resources/Assets/img/Group 8156.svg";
import "./MydModalWithGrid.css";
import axios from "axios";
function MydModalWithGrid(props) {
  var { auth } = useSelector((state) => state);
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [reviewNode, setReviewNode] = useState("")
  const [rating, setRating] = useState("")
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const saveData = (e) => {
    setReviewNode(e.target.value);
  };
  const sendData=()=>{
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/rate`,
      data:{
        comment:reviewNode,
        rate:rating

      },
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        console.log(res.data.data);
      }
    });
  }
  return (
    <div className="MydModalWithGrid">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="d-flex justify-content-end w-100 "
          >
            <img
              src={closeIcon}
              alt="closeIcon"
              onClick={props.onHide}
              style={{ cursor: "pointer" }}
            />{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4 className="m-0">{currentLocal.rating.feedback}</h4>
          <p className="border-bottom pb-3">
            {currentLocal.rating.feedbackParagraph}
          </p>
          <p>
            <form onSubmit={sendData}>
              <div className="d-flex justify-content-center">
                <span className="mt-2 mx-2">{currentLocal.rating.rating}</span>
                <ReactStars
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  activeColor="#ffd700"
                />
              </div>
              ,
              <textarea
                id="orderNode"
                name="orderNode"
                rows="5"
                cols="109"
                className="w-50 pt-2"
                onChange={saveData}
              ></textarea>{" "}
              <div className="button w-100 d-flex justify-content-center">
                <button className="mt-4" type="submit">{currentLocal.rating.rating}</button>
              </div>
            </form>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default MydModalWithGrid;
