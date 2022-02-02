import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import toysImg from "../../../../../Resources/Assets/img/52856.png";
import electronics from "../../../../../Resources/Assets/img/smallCamer.png";
import communications from "../../../../../Resources/Assets/img/smallMobile.png";
import schoolSupplies from "../../../../../Resources/Assets/img/smallBook.png";
import { useSelector } from "react-redux";
import "./PopularItems.css";
import { Link } from "react-router-dom";
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
      id: 1,
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 2,
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 3,
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 4,
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 5,
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 6,
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 7,
    },
    {
      img: electronics,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 8,
    },
  ];
  const productToys = [
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 9,
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 10,
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 11,
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 12,
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 13,
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 14,
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 15,
    },
    {
      img: toysImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 16,
    },
  ];
  const productcommunications = [
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 17,
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 18,
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 19,
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 20,
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 21,
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 22,
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 23,
    },
    {
      img: communications,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 24,
    },
  ];
  const productschoolSupplies = [
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 25,
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 26,
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 27,
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 28,
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 29,
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 30,
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 31,
    },
    {
      img: schoolSupplies,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
      id: 32,
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
                className={categoryState === "electronics" && "active"}
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
                      <Link
                        to={`/blogDetails/:${productDetails.id}`}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <Product
                          img={productDetails.img}
                          title={productDetails.title}
                          rating={productDetails.rating}
                          price={productDetails.price}
                        />
                      </Link>
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
                      <Link
                        to={`/blogDetails/:${productDetails.id}`}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <Product
                          img={productDetails.img}
                          title={productDetails.title}
                          rating={productDetails.rating}
                          price={productDetails.price}
                        />
                      </Link>
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
                      <Link
                        to={`/blogDetails/:${productDetails.id}`}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <Product
                          img={productDetails.img}
                          title={productDetails.title}
                          rating={productDetails.rating}
                          price={productDetails.price}
                        />
                      </Link>
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
                      <Link
                        to={`/blogDetails/:${productDetails.id}`}
                        onClick={() => {
                          window.scrollTo(0, 0);
                        }}
                      >
                        <Product
                          img={productDetails.img}
                          title={productDetails.title}
                          rating={productDetails.rating}
                          price={productDetails.price}
                        />
                      </Link>
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
