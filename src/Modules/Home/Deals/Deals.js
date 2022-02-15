import React from "react";
import {  Container, Row } from "react-bootstrap";
// import DealsOfTheWeek from "./Components/DealsOfTheWeek/DealsOfTheWeek";
import PopularItems from "./Components/PopularItems/PopularItems";

function Deals({popular}) {
  return (
    <div className="deals pl pr mt-5 pt-3">
      <Container className="m-0 p-0" fluid>
        <Row className="m-0 p-0">
          <PopularItems popular={popular} />
        </Row>
      </Container>
    </div>
  );
}

export default Deals;
