import React, { useEffect } from "react";
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import ProductDesc from "./Components/ProductDesc/ProductDesc";
import RelatedProducts from "./Components/Relatedproducts/RelatedProducts";
import ProductCardDetails from "./Components/ProductCardDetails/ProductCardDetails";
import { useLocation } from "react-router-dom";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";
function ProductCart(activeState) {
  const location = useLocation();
  const searchInPath = location.pathname.indexOf(":");
  const id = location.pathname.slice(searchInPath + 1);
  const [product, setProduct] = useState({});
  const [related, setRelated] = useState([]);
  const [reviews, setReviews] = useState("");
  var { auth } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/product/${id}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setLoading(true);
        setProduct(res.data.data.product);
        setRelated(res.data.data.related_products);
        setReviews(res.data.data.reviews);
      }
    });
  }, [id, auth.authorization.access_token]);
  return (
    <section>
            {loading ? (
        <>
          {" "}
      <Navbar />
      <ProductCardDetails
        product={product}
        reviews={reviews}
        activeState={activeState}
      />
      <ProductDesc reviews={reviews} />
      <RelatedProducts related={related} />
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

export default ProductCart;
