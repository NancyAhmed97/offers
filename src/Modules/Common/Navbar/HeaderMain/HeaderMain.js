import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../Resources/Assets/img/Logo.png";
import cart from "../../../../Resources/Assets/img/Icon feather-shopping-cart.svg";
import heart from "../../../../Resources/Assets/img/Icon feather-heart.svg";
import searchIcon from "../../../../Resources/Assets/img/Icon feather-search.svg";
import "./HeaderMain.css";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
function HeaderMain() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    // <div className={currentLocal.language==="English"?'contact_form pr pl':"ar_contact_form contact_form pr pl"}>

    <div
      className={
        currentLocal.language === "English"
          ? "header_main pr pl"
          : "header_main ar_header_main pr pl"
      }
    >
      <Container fluid className="m-0 p-0">
        '
        <Row className="p-0 m-0">
          <Col md={2} className="m-0 p-0">
            <div className="header_main_logo">
              <Link to="/">
                <img src={logo} alt="footer_logo" />
              </Link>{" "}
            </div>
          </Col>
          <Col md={7} className="m-0 p-0">
            <div className="search position-relative">
              <form>
                <input
                  type="search"
                  placeholder={currentLocal.home.search}
                  className="w-100"
                />
                <button type="submit" className="search_icon">
                  <img src={searchIcon} alt="searchIcon" />
                </button>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="transparent"
                    className="text-white"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "5px",
                    }}
                    // id="English"
                  >
                    <div>
                      {currentLocal.home.category}
                      {/* {currentLocal.language === "اللغه العربيه"
                      ?<>
                      <img src={saudi_arabia} alt="saudi_arabia" className="ml-3" />
                      <span className="mx-3">اللغه العربيه</span>
                      </>
                      : "English"}                 */}
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                    // onClick={(e) => {
                    //   dispatch(
                    //     changeLocal(
                    //       currentLocal.language === "English" ? "ar" : "en"
                    //     )
                    //   );
                    // }}
                    // id="Arabic"
                    >
                      Electrons
                      {/* {currentLocal.language === "English"
                      ?<>
                      <img src={saudi_arabia} alt="saudi_arabia" className="ml-3" />
                      <span className="mx-3">اللغه العربيه</span>
                      </>
                      : "English"} */}
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </form>
            </div>
          </Col>
          <Col md={3} className="m-0 p-0">
            <div className="w-100 d-flex mt-3">
              <ul className="list_inline d-flex m-0 p-0">
                <Link to="/cart">
                  <li className="shopping d-flex mx-3">
                    <p className="count_items mx-2 mt-3">0</p>
                    <img src={cart} alt="cart" />
                  </li>
                </Link>
                <Link to="/wishlist">
                <li className="wish_list d-flex">
                  <p className="count_items mx-2 mt-3">0</p>
                  <img src={heart} alt="heart" />
                </li>
                </Link>
              </ul>
              <div className="header_auth text-white">
                <Link to="/signup">{currentLocal.home.login}</Link>/
                <Link to="/signup">{currentLocal.home.signup} </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeaderMain;
