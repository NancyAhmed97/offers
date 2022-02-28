import React, { useState } from "react";
import axios from "axios";
import { Col, Container, Row, Alert } from "react-bootstrap";
import { useSelector } from "react-redux";
import call from "../../../../Resources/Assets/img/Group 8148.svg";
import msgIcon from "../../../../Resources/Assets/img/Group 8149.svg";
import location from "../../../../Resources/Assets/img/Group 8150.svg";
// import axios from "axios";
import "./ContactUsForm.css";
function ContactUsForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [setuccessAlert, setSuccessAlert] = useState("");
  const [dangerAlert, setDangerAlert] = useState("");
  const [alertMsg, setAlertMsg] = useState("");
  const [alert, setAlert] = useState(false);

  const getData = (e) => {
    if (e.target.id === "name") {
      setName(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
    } else {
      setMsg(e.target.value);
      setDangerAlert(false);
      setSuccessAlert(false);
      setAlert(false);
      setAlertMsg("");
    }
  };
  const sendData = (e) => {
    e.preventDefault();
    if (!name || !msg || !email) {
      setAlert(true);
    } else {
      axios({
        method: "post",
        url: "https://offers.com.fig-leaf.net/api/v1/contact",
        data: {
          name: name,
          mobile: "01021053778",
          message: msg,
          email: email,
        },
      })
        .then((res) => {
          if (res.data.success === true) {
            setSuccessAlert(true);
            setAlertMsg(res.data.message);
            window.scrollTo(0, 0);
            setEmail("");
            setName("");
            setMsg("");
            // setTimeout(() => {
            //   setSuccessAlert(false);
            //   setAlertMsg("");
            // }, 3000);
          }
        })
        .catch((error) => {
          if (error.response) {
            setDangerAlert(true);
            setAlertMsg(error.response.data.message);
          }
        });
    }
  };
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <div
      className={
        currentLocal.language === "English"
          ? "contact_form pr pl"
          : "ar_contact_form contact_form pr pl"
      }
    >
      <Container fluid className="m-0 p-0">
        <Row className="p-0">
          <div className="contact_title text-center">
            <h1>{currentLocal.footer.contect}</h1>
            <p>{currentLocal.conactus.pragraph}</p>
          </div>
          <Col md={6} className="p-0">
            <div className="contact_info">
              <h5 className="m-0">{currentLocal.conactus.ContactInfo}</h5>
              <p className="pr-4">{currentLocal.conactus.ContactInfoMsg}</p>
              <ul className="p-0 contact_info_container">
                <li>
                  <ul className="p-0 mb-5 touchContainer">
                    <li className="d-inline-block">
                      <img src={call} alt="location" />
                    </li>
                    <li className="d-inline-block mx-2 ">
                      <h4 className="m-0 p-0">
                        {currentLocal.conactus.callHelping}
                      </h4>
                      <p> +68 6886 6888</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="p-0 mb-5 touchContainer">
                    <li className="d-inline-block">
                      <img src={msgIcon} alt="location" />
                    </li>
                    <li className="d-inline-block mx-4 ">
                      <h4 className="m-0 p-0">
                        {" "}
                        {currentLocal.conactus.mailInfotitle}
                      </h4>
                      <p> support@plazathemes.com</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="p-0 mb-5 touchContainer">
                    <li className="d-inline-block">
                      <img src={location} alt="location" />
                    </li>
                    <li className="d-inline-block mx-4 ">
                      <h4 className="m-0 p-0">
                        {" "}
                        {currentLocal.conactus.addresstitle}
                      </h4>
                      <p>168 King St, Melbourne VIC 5000, Australia</p>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={6} className="p-0">
            <form onSubmit={sendData}>
              <h5 className="m-0">{currentLocal.conactus.ContactForm}</h5>
              <p className="m-0 p-0">{currentLocal.conactus.mesAlert}</p>

              <Alert
                variant={setuccessAlert ? "success " : dangerAlert && "danger"}
              >
                {alertMsg}
              </Alert>
              {alert && (
                <Alert variant={"danger"} style={{ marginTop: "20px" }}>
                  {currentLocal.conactus.alert}
                  {/* {currentLocal.conactus.alert} */}
                </Alert>
              )}
              <input
                className="name w-100"
                id="name"
                type="text"
                onChange={getData}
                placeholder={currentLocal.conactus.name}
              />
              <input
                className="email w-100 input"
                id="email"
                type="email"
                onChange={getData}
                placeholder={currentLocal.conactus.email}
              />
              <textarea
                className="w-100 input"
                id="msg"
                rows="7"
                onChange={getData}
                placeholder={currentLocal.conactus.Message}
              ></textarea>
              <div className="button">
                <button type="submit">{currentLocal.conactus.submit}</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUsForm;
