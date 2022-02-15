import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import "./FilerBar.css";
import { useSelector } from "react-redux";
function FilerBar({ filterItem }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  function valuetext(value) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="filer_bar">
      <p className="filter">{currentLocal.shopByCategory.filterBy}</p>
      <p className="show">{currentLocal.shopByCategory.showAllCategories}</p>
      {filterItem &&
        filterItem.map((item) => {
          console.log(item);
          return (
            <>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>
                    {currentLocal.language === "English"
                      ? item.en_name
                      : item.ar_name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {item.sub_categories &&
                    item.sub_categories.map((subItem) => {
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
                </AccordionDetails>
              </Accordion>
            </>
          );
        })}
      <p className="price_range">{currentLocal.shopByCategory.PriceRange}</p>
      <Box sx={{ width: 300 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
        />
      </Box>
      <div className="reset mt-4 d-flex justify-content-end">
        <p>{currentLocal.shopByCategory.ResetFilter}</p>
      </div>
    </div>
  );
}

export default FilerBar;
