import React from "react";
import { useSelector } from "react-redux";
import "./BestSeller.css";
import Product from "../../Common/Poduct/Product";
function BestSeller({ besSeller }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <section className="best_seller pr pl">
      <h2>{currentLocal.bestSeller.bestSeller}</h2>
      <p className="best_seller_pragrapg">{currentLocal.bestSeller.disc}</p>
      <div className="product_container">
        {besSeller.items !== undefined &&
          besSeller.items.map((productDetails, index) => {
            const url = "https://offers.com.fig-leaf.net";
            return (
              <div key={index}>
                {index % 2 === 0 ? (
                  <div className="0">
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
                  </div>
                ) : (
                  <div className="product_ood" key={index}>
                    <Product
                      img={url + productDetails.image}
                      title={
                        currentLocal.language === "English"
                          ? productDetails.en_name
                          : productDetails.en_name
                      }
                      rating={productDetails.rate}
                      price={productDetails.price}
                      id={productDetails.id}
                      is_favorite={productDetails.is_favorite}
                    />
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
}

export default BestSeller;
