import React from "react";
import { useSelector } from "react-redux";
import "./BestPicks.css";
import { Col, Container, Row } from "react-bootstrap";
import Product from "../../Common/Poduct/Product";
function BestPicks({ bestPicks }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <section className="best_picks pr pl">
      <h2>{currentLocal.home.bestPicks}</h2>
      <p className="best_picks_pragrapg">{currentLocal.bestSeller.disc}</p>
      <div className="product_container">
        <Container fluid>
          <Row>
            {bestPicks.items !== undefined &&
              bestPicks.items.slice(0, 3).map((productDetails, index) => {
                const url = "https://offers.com.fig-leaf.net";
                return (
                  <Col md={4} key={index}>
                    {/* <Link
                      to={`/blogDetails/:${productDetails.id}`}
                      onClick={() => {
                        window.scrollTo(0, 0);
                      }}
                    > */}
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
                     
                    {/* </Link> */}
                  </Col>
                );
              })}
          </Row>
        </Container>
        <div className="product_details_container">
          {bestPicks.items !== undefined &&
            bestPicks.items.slice(3).map((productDetails, index) => {
              return (
                // <Link
                //   to={`/blogDetails/:${productDetails.id}`}
                //   onClick={() => {
                //     window.scrollTo(0, 0);
                //   }}
                //   key={index}
                // >
                  <Product
                    img={productDetails.img}
                    title={productDetails.title}
                    rating={productDetails.rating}
                    price={productDetails.price}
                    id={productDetails.id}
                    is_favorite={productDetails.is_favorite}

                  />
                // </Link>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default BestPicks;
