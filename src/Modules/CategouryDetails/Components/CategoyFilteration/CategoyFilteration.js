import React, { useEffect, useState } from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import CategoryProduct from "./Components/CategoryProduct/CategoryProduct";
import FilerBar from "./Components/FilerBar/FilerBar";
import axios from "axios";
import { useSelector } from "react-redux";
function CategoyFilteration() {
  const [filterItem, setFilterItem] = useState([]);
  // const [id, setId] = useState("");
  const [subProduct, setSubProduct] = useState([]);
  const [productId, setProductId] = useState("");
  const { currentLocal } = useSelector((state) => state.currentLocal);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/categories`,
      // headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setFilterItem(res.data.data);
        res.data.data.forEach((filter) => {
          setProductId(filter.id);
          setSubProduct(filter.sub_categories);
        });
      }
    });
  }, []);

  return (
    <div className="categoy_filteration pl pr">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Nav variant="pills" className="flex-row mb-5 mt-4">
          {filterItem &&
            filterItem.map((filterProduct, index) => {
              console.log("filterProduct.id",filterProduct.id);
              return (
                <Nav.Item>
                  <Nav.Link eventKey={filterProduct.id}>
                    {currentLocal.language === "English"
                      ? filterProduct.en_name
                      : filterProduct.ar_name}
                  </Nav.Link>
                </Nav.Item>
              );
            })}
        </Nav>
        <Container fluid classNameName="p-0 m-0">
          <Row classNameName="p-0 m-0">
            <Col className="p-0" md={2}>
              <Tab.Content>
                {subProduct &&
                  subProduct.map((subProductItem, index) => {
                    console.log("productId",productId);
                    return (
                      <Tab.Pane eventKey={productId}>
                        {currentLocal.language === "English"
                          ? subProductItem.en_name
                          : subProductItem.ar_name}
                      </Tab.Pane>
                    );
                  })}{" "}
              </Tab.Content>
              <FilerBar filterItem={filterItem}  />
            </Col>
            <Col className="p-0" md={10}>
              <CategoryProduct />
            </Col>
          </Row>
        </Container>{" "}
      </Tab.Container>
      {/* <Container fluid classNameName='p-0 m-0'>
          <Row classNameName='p-0 m-0'>
              <Col className='p-0' md={2}>
                  <FilerBar filterItem={filterItem} />
              </Col>
              <Col className='p-0' md={10}>
                  <CategoryProduct  />
              </Col>
          </Row>
      </Container> */}
    </div>
  );
}

export default CategoyFilteration;
