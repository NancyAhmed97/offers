import React, { useEffect, useState } from "react";
import "./HeaderOfCategory.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { LocalDining } from "@mui/icons-material";
import { Backdrop, CircularProgress } from "@mui/material";
function HeaderOfCategory() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const categoryPath = window.location.href.lastIndexOf(":");
  const categoryId = window.location.href.slice(categoryPath + 1);
  const [currentCategory, setCurrentCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const url = "https://offers.com.fig-leaf.net";
  useEffect(() => {
    axios({
      method: "get",
      url: "https://offers.com.fig-leaf.net/api/v1/categories",
      // headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setCurrentCategory(res.data.data[categoryId - 1]);
        setLoading(true);
      }
    });
  }, []);
  return (
    <div className="header_of_category pt-5  pl pr">
      {loading ? (
        <>
          <div className="header_title text-center mb-5">
            <h2>
              {currentLocal.language === "English"
                ? currentCategory && currentCategory.en_name
                : currentCategory && currentCategory.ar_name}
            </h2>
            <p>{currentLocal.home.hotSalesPragaph}</p>
          </div>
          <img
            src={currentCategory && url + currentCategory.image}
            alt="electoronics"
            className="header_img w-100"
          />
        </>
      ) : (
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  );
}

export default HeaderOfCategory;
