import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./PopularItems.css";
import Product from "../../../../Common/Poduct/Product";
function PopularItems({ popular }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  console.log(popular);
  return (
    <div className="popular_items">
      <div className="title d-flex justify-content-between">
        <div>
          <h2>{currentLocal.home.popularItems}</h2>
        </div>
      </div>
      <div className="fulter_by_categoury">
        <Container fluid className="m-0 p-0">
          <Row className="m-0 p-0">
            <div className="d-flex justify-content-between">
              {popular.items !== undefined &&
                popular.items.slice(0, 5).map((productDetails, index) => {
                  const url = "https://offers.com.fig-leaf.net";
                  return (
                    <Product
                      img={url + productDetails.image}
                      title={
                        currentLocal.language === "English"
                          ? productDetails.en_name
                          : productDetails.ar_name
                      }
                      rating={productDetails.rate}
                      price={productDetails.price}
                      id={productDetails.id}
                      is_favorite={productDetails.is_favorite}
                    />
                  );
                })}
            </div>
            <div className="d-flex justify-content-between mt-4">
              {" "}
              {popular.items !== undefined &&
                popular.items.slice(5).map((productDetails, index) => {
                  const url = "https://offers.com.fig-leaf.net";
                  return (
                    <Product
                      img={url + productDetails.image}
                      title={
                        currentLocal.language === "English"
                          ? productDetails.en_name
                          : productDetails.ar_name
                      }
                      rating={productDetails.rate}
                      price={productDetails.price}
                      id={productDetails.id}
                      is_favorite={productDetails.is_favorite}
                    />
                  );
                })}
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default PopularItems;
