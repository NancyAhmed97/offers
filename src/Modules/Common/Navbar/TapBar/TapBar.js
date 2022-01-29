import React from "react";
import FaceBook from "../../../../Resources/Assets/img/FaceBook"
import Instgram from "../../../../Resources/Assets/img/Instgram";
import Snapchat from "../../../../Resources/Assets/img/Snapchat";
import Twiiter from "../../../../Resources/Assets/img/Twiiter";
import Youtube from "../../../../Resources/Assets/img/Youtube";
import support from "../../../../Resources/Assets/img/support (1).svg";
import order from "../../../../Resources/Assets/img/icons8_order_history_48px_1.svg";
import saudi_arabia from "../../../../Resources/Assets/img/icons8_saudi_arabia_80px.svg";
import { Dropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { changeLocal } from "../../../../Redux/Localization";

import "./TapBar.css";
function TapBar() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const dispatch = useDispatch();

  return (
    <div className={currentLocal.language==="English"?"top_bar pr pl":"top_bar pr pl ar_top_bar"}>
      <div className="top_bar_container">
        <div className="top_bar_left mt-1">
          <ul className="social_media">
            <li className="d-inline-block">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
<FaceBook />
         </a>
            </li>
            <li className="d-inline-block mx-3">
              <a href="https://twitter.com/" target="_blank" rel="noreferrer">
<Twiiter />
              </a>
            </li>
            <li className="d-inline-block">
              <a
                href="hhttps://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
              >
<Instgram />
              </a>
            </li>
            <li className="d-inline-block mx-3">
              <a
                href="https://www.snapchat.com/l/en-gb/download/"
                target="_blank"
                rel="noreferrer"
              >
<Snapchat />
              </a>
            </li>{" "}
            <li className="d-inline-block">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
<Youtube />
              </a>
            </li>
          </ul>
        </div>
        <div className="top_bar_center">
          <p className="d-inline-block mx-3">24/7 customer service</p>
          <img src={support} alt="support" />
        </div>
        <div className="top_bar_right">
        <div className="langouage">
              <Dropdown>
                <Dropdown.Toggle
                  variant="transparent"
                  className="text-white"
                  style={{display:"flex",alignItems:"center",marginTop:"5px"}}
                  id="English"
                >
                  <div>
                  {currentLocal.language === "اللغه العربيه"
                      ?<>
                      <img src={saudi_arabia} alt="saudi_arabia" className="ml-3" />
                      <span className="mx-3">اللغه العربيه</span>
                      </>
                      : "English"}                  </div>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={(e) => {
                      dispatch(
                        changeLocal(
                          currentLocal.language === "English" ? "ar" : "en"
                        )
                      );
                    }}
                    id="Arabic"
                  >
                    {currentLocal.language === "English"
                      ?<>
                      <img src={saudi_arabia} alt="saudi_arabia" className="ml-3" />
                      <span className="mx-3">اللغه العربيه</span>
                      </>
                      : "English"}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
       <div className="order">
       <p className="text-white d-inline-block mx-3">{currentLocal.footer.track} </p>
          <img src={order} alt="order" />
       </div>
        </div>
      </div>
    </div>
  );
}

export default TapBar;
