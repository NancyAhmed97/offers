import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Navbar/Navba';
import LoginContainer from './Components/LoginContainer/LoginContainer';
import SignupContainer from './Components/SignupContainer/SignupContainer';

function SignUp() {
  return <section className='sign_up' style={{backgroundColor:"#F3F3F3"}}>
<Navbar />
<Container fluid className='m-0 p-0'>
    <Row className="p-0 m-0">
        <Col md="6">
            <LoginContainer />
        </Col>
        <Col md="6">
            <SignupContainer />
        </Col>
    </Row>
</Container>
<Footer />
  </section>;
}

export default SignUp;
