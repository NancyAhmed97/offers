import React from 'react';
import Footer from "../Common/Footer/Footer";
import Navbar from "../Common/Navbar/Navba";
import "./Aboutus.css"
import { useSelector } from "react-redux";
import AboutInfo from './Container/AboutInfo/AboutInfo';
import Mission from './Container/Mission/Mission';
function Aboutus() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
  return <section className='aboutus'>
      <Navbar />
      <div className='about_title text-center mt-5'>
  <h1 className='m-0 p-0'>{currentLocal.footer.aboutus}</h1>
  <p>{currentLocal.aboutus.pragraph}</p>
</div>
<AboutInfo />
<Mission />
      <Footer />
  </section>;
}

export default Aboutus;
