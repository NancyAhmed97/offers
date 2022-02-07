import React from "react";
import "./TrackOrderTable.css";
import productImg from "../../../../../../Resources/Assets/img/Appleheadphones.png";
import { useSelector } from "react-redux";
function TrackOrderTable() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const product = [
    {
      id: "0",
      img: productImg,
      name: "Add product name here in this space and edit it",
      color: "red",
      price: "340 SAR",
      count: "1",
    },
    {
      id: "1",
      img: productImg,
      name: "Add product name here in this space and edit it",
      color: "green",
      price: "340 SAR",
      count: "1",
    },
    {
      id: "2",
      img: productImg,
      name: "Add product name here in this space and edit it",
      color: "yellow",
      price: "340 SAR",
      count: "1",
    },
  ];

  return (
    <div className={currentLocal.language==="English"?"track_order_table":"track_order_table ar_track_order_table"}>
      <table>
        <tr className="border-bottom">
          <th className="Ordernumber">{currentLocal.track.Ordernumber}#33215221121</th>
          <th className="deliveryAddress">{currentLocal.track.deliveryAddress}</th>
          <th className="trackpragraph">{currentLocal.track.trackpragraph}</th>
        </tr>
        {product.map((productItem) => {
          return (
            <tr>
              <td>
                <div className="Product d-flex ">
                  <div className="product_img">
                    <img src={productImg} alt="productImg" />
                  </div>
                  <div className="product_img_details">
                    <p className="product_img_name">{productItem.name}</p>
                    <span className="color">{currentLocal.cart.Color}:</span>
                    <div
                      className="product_color d-inline-block"
                      style={{ backgroundColor: productItem.color }}
                    ></div>
                    <div className="product_color d-inline-block">
                      {productItem.color}
                    </div>
                  </div>
                </div>
              </td>
              <td className="count">x{productItem.count}</td>
              <td className="price">{productItem.price}</td>
            </tr>
          );
        })}
        {/* <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
  <tr>
    <td>Ernst Handel</td>
    <td>Roland Mendel</td>
    <td>Austria</td>
  </tr> */}
      </table>
    </div>
  );
}

export default TrackOrderTable;
