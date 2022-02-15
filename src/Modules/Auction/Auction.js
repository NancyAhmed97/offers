import React from 'react'
import "./Auction.css"
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import { Col, Container, Row } from 'react-bootstrap';
function Auction() {
  return (
    <section>
        <Navbar />
        <Container>
            <Row>
                <Col md={6}>image</Col>
                <Col md={6}>auction detions</Col>
            </Row>
        </Container>
        <Footer />
    </section>
  )
}

export default Auction