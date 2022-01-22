import React from 'react';
import Footer from '../Common/Footer/Footer';
import { useSelector } from "react-redux";
import "./Privacy.css"
function Privacy() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return <section className='privacy' >
    <div className='privacy_Container pr pl'>
<div className='privacy_title text-center'>
  <h1>{currentLocal.footer.privacy}</h1>
  <p>{currentLocal.privacy.titlePragraph}</p>
</div>
<div className='privacy_content mt-5'>
<p className='mb-5'>{currentLocal.privacy.pragraph}</p>
<h5>{currentLocal.privacy.typeTitle}</h5>
<p className='mb-5'>{currentLocal.privacy.typePragraph}</p>
<h5>{currentLocal.privacy.sharing}</h5>
<p className='m-0 p-0'>{currentLocal.privacy.firstSharingPragraph}</p>
<p className='m-0 p-0'>{currentLocal.privacy.secondSharingPagraph}</p>
</div>
    </div>
      <Footer />
  </section >;
}

export default Privacy;
