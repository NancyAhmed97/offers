import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import toysImg from "../../../../../Resources/Assets/img/52856.png";
import electronics from "../../../../../Resources/Assets/img/smallCamer.png";
import communications from "../../../../../Resources/Assets/img/smallMobile.png";
import schoolSupplies from "../../../../../Resources/Assets/img/smallBook.png";
import { useSelector } from "react-redux";
import "./PopularItems.css";
import Product from "../../../../Common/Poduct/Product";
function PopularItems() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [categoryState, setCategoryState] = useState("electronics");
  const productElectronics = [
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
  ];
  const productToys = [
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
  ];
  const productcommunications = [
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
  ];
  const productschoolSupplies = [
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
  ];
  return (
    <div className="popular_items">
      <div className="title d-flex justify-content-between">
        <div>
          <h2>{currentLocal.home.popularItems}</h2>
        </div>
        <div>
          <ul className="p-0 m-0">
            <li
              className="d-inline-block mx-2"
              onClick={(e) => {
                setCategoryState(e.target.id);
              }}
            >
              <p
                id="electronics"
                className={
                  categoryState === "electronics" ||
                  (categoryState === "" && "active")
                }
              >
                {currentLocal.shopByCategory.electronics}
              </p>
            </li>
            <li
              className="d-inline-block mx-2"
              onClick={(e) => {
                setCategoryState(e.target.id);
              }}
            >
              <p id="toys" className={categoryState === "toys" && "active"}>
                {currentLocal.shopByCategory.toys}
              </p>
            </li>
            <li
              className="d-inline-block mx-2"
              onClick={(e) => {
                setCategoryState(e.target.id);
              }}
            >
              <p
                id="communications"
                className={categoryState === "communications" && "active"}
              >
                {currentLocal.shopByCategory.communications}
              </p>
            </li>
            <li
              className="d-inline-block  mx-2"
              onClick={(e) => {
                setCategoryState(e.target.id);
              }}
            >
              <p
                id="schoolSupplies"
                className={categoryState === "schoolSupplies" && "active"}
              >
                {currentLocal.shopByCategory.schoolSupplies}
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="fulter_by_categoury">
        <Container fluid className="m-0 p-0">
          <Row className="m-0 p-0">
            {categoryState === "electronics" && (
              <>
                {productElectronics.map((productDetails) => {
                  return (
                    <Col md={3}>
                      <Product
                        img={productDetails.img}
                        title={productDetails.title}
                        rating={productDetails.rating}
                        price={productDetails.price}
                      />
                    </Col>
                  );
                })}
              </>
            )}
            {categoryState === "toys" && (
              <>
                {productToys.map((productDetails) => {
                  return (
                    <Col md={3}>
                      <Product
                        img={productDetails.img}
                        title={productDetails.title}
                        rating={productDetails.rating}
                        price={productDetails.price}
                      />
                    </Col>
                  );
                })}
              </>
            )}
            {categoryState === "communications" && (
              <>
                {productcommunications.map((productDetails) => {
                  return (
                    <Col md={3}>
                      <Product
                        img={productDetails.img}
                        title={productDetails.title}
                        rating={productDetails.rating}
                        price={productDetails.price}
                      />
                    </Col>
                  );
                })}
              </>
            )}
            {categoryState === "schoolSupplies" && (
              <>
                {productschoolSupplies.map((productDetails) => {
                  return (
                    <Col md={3}>
                      <Product
                        img={productDetails.img}
                        title={productDetails.title}
                        rating={productDetails.rating}
                        price={productDetails.price}
                      />
                    </Col>
                  );
                })}
              </>
            )}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default PopularItems;
