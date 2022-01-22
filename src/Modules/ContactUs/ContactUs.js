import React from 'react';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Navbar/Navba';
import ContactUsForm from './Components/ContactUsForm/ContactUsForm';
import Map from './Components/Map/Map';
function ContactUs() {
  return <section>
    <Navbar />
  <ContactUsForm />
<Map />
    <Footer />
  </section>;
}

export default ContactUs;
