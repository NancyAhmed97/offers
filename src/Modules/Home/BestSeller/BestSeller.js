import React from "react";
import { useSelector } from "react-redux";
import productImg from "../../../Resources/Assets/img/poscomercializacion-350x500.png";
import secondproductImg from "../../../Resources/Assets/img/img_pic_1605860884_0.png";
import "./BestSeller.css";
import Product from "../../Common/Poduct/Product";
import { Link } from "react-router-dom";
function BestSeller() {
  const product = [
    {
      id:1,
      img: productImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      id:1,
      img: secondproductImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      id:1,
      img: productImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      id:1,
      img: productImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
    {
      id:1,
      img: productImg,
      title: "Add product name here in this space and edit it",
      rating: 4,
      price: "SAR 3,099.00",
    },
  ];
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <section className="best_seller pr pl">
      <h2>{currentLocal.bestSeller.bestSeller}</h2>
      <p className="best_seller_pragrapg">{currentLocal.bestSeller.disc}</p>
      <div className="product_container">
        {product.map((productDetails, index) => {
          return (
            <>
              {index % 2 === 0 ? (
                <div className="product_even">
                                                <Link 
           to={`/blogDetails/:${productDetails.id}`} 
          >
                <Product
                 img={productDetails.img}
                title={productDetails.title}
                rating={productDetails.rating}
                price={productDetails.price}
                />
                </Link>
                </div>
              ) : (
            
                <div className="product_ood">
                                   <Link 
           to={`/blogDetails/:${productDetails.id}`} 
          >
                         <Product 
                   img={productDetails.img}
                   title={productDetails.title}
                   rating={productDetails.rating}
                   price={productDetails.price}
              />
              </Link>
                </div>
              )}
     
            </>
          );
        })}
      </div>
    </section>
  );
}

export default BestSeller;
