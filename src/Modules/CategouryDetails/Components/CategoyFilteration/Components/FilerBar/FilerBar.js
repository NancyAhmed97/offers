import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import AccordionDetails from "@mui/material/AccordionDetails";
import "./FilerBar.css";
import { useSelector } from "react-redux";
import axios from "axios";
function FilerBar({ selected, id ,filterArray }) {
  const [value, setValue] = React.useState([20, 37]);
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [subProduct, setSubProduct] = useState([]);
  var { auth } = useSelector((state) => state);
  const subCategoryId = localStorage.getItem("subCateguryId");
  const sortById = localStorage.getItem("sortBy");
  const minPriceId = localStorage.getItem("min_price");
  const maxPriceId = localStorage.getItem("max_price");
  console.log(sortById);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/sub_categories/${
        id ? id : 1
      }`,
      headers: {
        Authorization: `Bearer ${auth.authorization.access_token}`,
      },
    }).then((res) => {
      setSubProduct(res.data.data);
    });
  }, [auth.authorization.access_token, id]);
  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("min_price", newValue[0]);
    localStorage.setItem("max_price", newValue[1]);
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/products?category_id=${localStorage.getItem(
        "id"
      )}&sub_category_id=${subCategoryId ? subCategoryId : ""}&min_price=${
        newValue[0]
      }&max_price=${newValue[1]}&sort_by=${sortById ? sortById : ""}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      filterArray(res.data.data);
    });
  };
  const filterSubCategoury = (e) => {
    localStorage.setItem("subCateguryId", e.target.id);
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/products?category_id=${localStorage.getItem(
        "id"
      )}&sub_category_id=${e.target.id}&min_price=${
        minPriceId?minPriceId:""
      }&max_price=${maxPriceId?maxPriceId:""}&sort_by=${sortById? sortById:""}`,
      headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      localStorage.setItem("silterArray", res.data.data);
    });
  };
  return (
    <div className="filer_bar">
      <p className="filter">{currentLocal.shopByCategory.filterBy}</p>
      <p className="show">{currentLocal.shopByCategory.showAllCategories}</p>
      <div className="category">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography> {selected}</Typography>
          </AccordionSummary>
          {subProduct.length !== 0 &&
            subProduct.map((item, index) => {
              return (
                <AccordionDetails>
                  <Typography
                    onClick={filterSubCategoury}
                    style={{ cursor: "pointer" }}
                    id={item.id}
                    key={index}
                  >
                    {currentLocal.langouage === "English"
                      ? item.en_name
                      : item.ar_name}
                  </Typography>
                </AccordionDetails>
              );
            })}
        </Accordion>
      </div>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography></Typography>
        </AccordionSummary>
      </Accordion>
      <p className="price_range">{currentLocal.shopByCategory.PriceRange}</p>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
        <p className="mb-0 d-flex justify-content-between">
          <div className="intial_price">{value[0]}</div>
          <div className="final_price">{value[1]}</div>
        </p>
      </Box>
    </div>
  );
}

export default FilerBar;
