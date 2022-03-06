import React from 'react';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Navbar/Navba';
import HeaderOfCategory from './Components/HeaderOfCategory/HeaderOfCategory';
import CategoyFilteration from "./Components/CategoyFilteration/CategoyFilteration"
function CategouryDetails() {

  return <section>
      <Navbar />
      <HeaderOfCategory />
      <CategoyFilteration />
      <Footer />
  </section>;
}

export default CategouryDetails;
