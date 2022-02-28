import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryProduct from "./Components/CategoryProduct/CategoryProduct";
import FilerBar from "./Components/FilerBar/FilerBar";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import axios from "axios";
import { useSelector } from "react-redux";
function CategoyFilteration() {
  const [filterItem, setFilterItem] = useState([]);
  const [id, setId] = useState("");
  const { currentLocal } = useSelector((state) => state.currentLocal);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/categories`,
      // headers: { Authorization: `Bearer ${auth.authorization.access_token}` },
    }).then((res) => {
      if (res.data.success === true) {
        setFilterItem(res.data.data);
      }
    });
  }, []);
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="categoy_filteration pl pr">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {filterItem &&
              filterItem.map((filterProduct, index) => {
                return (
                  <Tab
                    label={
                      currentLocal.language === "English"
                        ?filterProduct.en_name
                        :filterProduct.ar_name
                    }
                    {...a11yProps(index)}
                    onClick={(e)=>{
                      setId(e.target.id)
                    }}
                    id={index}
                  />
                );
              })}
           
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

        </TabPanel>
        <TabPanel value={value} index={1}>
        </TabPanel>
        <TabPanel value={value} index={2}>
        </TabPanel>
      </Box>
      <Container fluid classNameName="p-0 m-0">
            <Row classNameName="p-0 m-0">
              <Col className="p-0" md={2}>
                <FilerBar filterItem={filterItem} id={id} />
              </Col>
              <Col className="p-0" md={10}>
                <CategoryProduct />
              </Col>
            </Row>
          </Container>{" "}
      {/* <Container fluid classNameName='p-0 m-0'>
          <Row classNameName='p-0 m-0'>
              <Col className='p-0' md={2}>
                  <FilerBar filterItem={filterItem} />
              </Col>
              <Col className='p-0' md={10}>
                  <CategoryProduct  />
              </Col>
          </Row>
      </Container> */}
    </div>
  );
}

export default CategoyFilteration;
