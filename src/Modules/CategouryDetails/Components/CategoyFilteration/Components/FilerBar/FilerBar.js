import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./FilerBar.css";
import { useSelector } from "react-redux";
function FilerBar({ subProduct, selected }) {
  const [value, setValue] = React.useState([20, 37]);
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const [subProductArr, setSubProductArr] = useState([]);
  useEffect(() => {
    setSubProductArr(subProduct);
  }, [subProduct]);

  function valuetext(value) {
    return `${value}°C`;
  }
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="filer_bar">
      <p className="filter">{currentLocal.shopByCategory.filterBy}</p>
      <p className="show">{currentLocal.shopByCategory.showAllCategories}</p>
      <p className="mb-0 categoury_name px-1"> {selected}</p>
      {subProductArr &&
        subProductArr.map((item) => {
          return <p className="mb-0 sub_categoury_name px-3">{item.en_name}</p>;
        })}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            {/* {currentLocal.language === "English" ? clickedItem.en_name : clickedItem.ar_name} */}
          </Typography>
        </AccordionSummary>
        {/* {subProductArr &&
            subProductArr.map((item) => {
              console.log(item.en_name);
              return (
                <>
                  <p>{item.en_name}</p>
                </>
              );
            })} */}
        {/* 
          {clickedItem.sub_categories &&
            clickedItem.sub_categories.map((subItem) => {
              return (
                <Typography>
                  <ul className="p-0">
                    <li className="list-unstyled">
                      {" "}
                      {currentLocal.language === "English"
                        ? subItem.en_name
                        : subItem.ar_name}
                    </li>
                  </ul>
                </Typography>
              );
            })}
        </AccordionDetails> */}
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
      <div className="reset mt-4 d-flex justify-content-end">
        {/* <p>{currentLocal.shopByCategory.ResetFilter}</p> */}
      </div>
    </div>
  );
}

export default FilerBar;
