import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import Product from "../Common/Poduct/Product";
import "./WishList.css";
import { Col, Container, Row } from "react-bootstrap";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
function WishList() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  var { auth } = useSelector((state) => state);
  const [favorites, setFavrites] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/favorites`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setFavrites(res.data.data.items);
        setLoading(true);
      }
    });
  }, [auth]);

  return (
    <section className="wish_list ">
           {loading ? (
        <>
          
      <Navbar />
      <div className="wish_list_container pl pr mt-4 mb-5">
        <h1>
          {currentLocal.wishList.MYFAVORITES}
          <span>({favorites !== undefined && favorites.length})</span>
        </h1>
        <Container fluid className="m-0 p-0">
          <Row className="w-100 ">
            {favorites !== undefined &&
              favorites.map((productDetails , index) => {
                const url = "https://offers.com.fig-leaf.net";

                return (
                  <Col md={3}className="mb-5" key={index}>
                    <Product
                      img={url + productDetails.image}
                      title={
                        currentLocal.language === "English"
                          ? productDetails.en_name
                          : productDetails.ar_name
                      }                      rating={productDetails.rate}
                      price={productDetails.price}
                      id={productDetails.id}
                      is_favorite={productDetails.is_favorite}

                    />
                    {/* <div className="button">
                      <button className="w-100" onClick={addToCart}>
                        {currentLocal.productDetails.addToCart}
                      </button>
                    </div> */}
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
      <Footer />
      </>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </section>
  );
}

export default WishList;
