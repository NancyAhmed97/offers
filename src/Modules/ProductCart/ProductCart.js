import React from 'react';
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import ProductDesc from './Components/ProductDesc/ProductDesc';
import RelatedProducts from './Components/Relatedproducts/RelatedProducts';
import ProductCardDetails from './Components/ProductCardDetails/ProductCardDetails';
function ProductCart() {
  return <section>
<Navbar />
<ProductCardDetails />
<ProductDesc />
<RelatedProducts />
<Footer />
  </section>;
}

export default ProductCart;
