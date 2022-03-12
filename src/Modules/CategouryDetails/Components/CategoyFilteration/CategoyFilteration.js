import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryProduct from "./Components/CategoryProduct/CategoryProduct";
import FilerBar from "./Components/FilerBar/FilerBar";
import axios from "axios";
import { useSelector } from "react-redux";
import "./CategoyFilteration.css";
function CategoyFilteration() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [filterItem, setFilterItem] = useState([]);
  const [selected, setSelectes] = useState("");
  const [id, setId] = useState("");
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/categories`,
      // headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setSelectes(
          currentLocal.language === "English"
            ? res.data.data[0].en_name
            : res.data.data[0].ar_name
        );
        setFilterItem(res.data.data);
        setId(res.data.data[0].id);
      }
    });
  }, [currentLocal.language]);
  const getSubCategoury = (tabs, itemId) => {
    setId(itemId);
    setSelectes(tabs);
  };
  localStorage.setItem("id", id);
  return (
    <div className="categoy_filteration pl pr">
      <div className="head_categoury d-flex">
        {filterItem &&
          filterItem.map((item) => {
            const name =
              currentLocal.language === "English" ? item.en_name : item.ar_name;
            const active = selected === name ? "active" : "";
            return (
              <div
                className={"head_categoury_item " + active}
                onClick={() =>
                  getSubCategoury(
                    currentLocal.language === "English"
                      ? item.en_name
                      : item.ar_name,
                    item.id
                  )
                }
                id={item.id}
              >
                {currentLocal.language === "English"
                  ? item.en_name
                  : item.ar_name}
              </div>
            );
          })}
      </div>
      <Container fluid classNameName="p-0 m-0">
        <Row classNameName="p-0 m-0">
          <Col className="p-0" md={2}>
            <FilerBar id={id} selected={selected} />
          </Col>
          <Col className="p-0" md={10}>
            <CategoryProduct />
          </Col>
        </Row>{" "}
        -
      </Container>{" "}
    </div>
  );
}

export default CategoyFilteration;
