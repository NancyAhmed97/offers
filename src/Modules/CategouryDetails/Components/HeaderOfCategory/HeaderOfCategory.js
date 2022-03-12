import React, { useEffect, useState } from "react";
import "./HeaderOfCategory.css";
import { useSelector } from "react-redux";
import axios from "axios";
function HeaderOfCategory() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const categoryPath = window.location.href.lastIndexOf(":");
  const categoryId = window.location.href.slice(categoryPath + 1);
  console.log(categoryId);
  const [currentCategory, setCurrentCategory] = useState("");
  const url = "https://offers.com.fig-leaf.net";
  useEffect(() => {
    axios({
      method: "get",
      url: "https://offers.com.fig-leaf.net/api/v1/categories",
      // headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        console.log(res.data.data[categoryId - 1]);
        setCurrentCategory(res.data.data[categoryId - 1]);
      }
    });
  }, []);
  return (
    <div className="header_of_category pt-5  pl pr">
      <div className="header_title text-center mb-5">
        <h2>
          {currentLocal.language === "English"
            ? currentCategory.en_name
            : currentCategory.ar_name}
        </h2>
        <p>{currentLocal.home.hotSalesPragaph}</p>
      </div>
      <img
        src={url + currentCategory.image}
        alt="electoronics"
        className="header_img w-100"
      />

      {/* {categoryId==="1"&&
      <>
      <div className='header_title text-center mb-5'>
          <h2>{currentLocal.shopByCategory.electronics}</h2>
          <p>{currentLocal.home.hotSalesPragaph}</p>
      </div>
      </>
      }
        {categoryId==="2"&&
      <>
      <div className='header_title text-center mb-5'>
          <h2>{currentLocal.shopByCategory.schoolSupplies}</h2>
          <p>{currentLocal.home.hotSalesPragaph}</p>
      </div>
      <img src={backSchoolConcept} alt="schoolSupplies" className='header_img w-100'/>
      </>
      }
        {categoryId==="3"&&
      <>
      <div className='header_title text-center mb-5'>
          <h2>{currentLocal.shopByCategory.communications}</h2>
          <p>{currentLocal.home.hotSalesPragaph}</p>
      </div>
      <img src={Commanication} alt="communications" className='header_img w-100'/>
      </>
      }
        {categoryId==="4"&&
      <>
      <div className='header_title text-center mb-5'>
          <h2>{currentLocal.shopByCategory.toys}</h2>
          <p>{currentLocal.home.hotSalesPragaph}</p>
      </div>
      <img src={ToysCategory} alt="communications" className='header_img w-100'/>
      </>
      } */}
    </div>
  );
}

export default HeaderOfCategory;
