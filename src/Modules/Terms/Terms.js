import React from 'react';
import Footer from '../Common/Footer/Footer';
import Navbar from '../Common/Navbar/Navba';
import { useSelector } from "react-redux";
import "./Terms.css"
function Terms() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return <section className='terms'>
    <Navbar />
    <div className='terms_Container pr pl'>
<div className='terms_title text-center'>
  <h1>{currentLocal.footer.terms}</h1>
</div>
<div className='terms_content mt-5'>
<h5>{currentLocal.terms.welcomeTitle}</h5>
<p className='m-0 p-0'>{currentLocal.terms.welcomeOne}</p>
<p className='m-0 p-0'>{currentLocal.terms.weclomeTwo}</p>
<p className='m-0 p-0'>{currentLocal.terms.weclomeThree}</p>
<p className='m-0 p-0'>{currentLocal.terms.welcomefour}</p>
<p className='m-0 p-0'>{currentLocal.terms.welcomefive}</p>
<h5>{currentLocal.terms.termsOfUs}</h5>
<p className='m-0 p-0'>{currentLocal.terms.firsttermsPragraph}
<br />
{currentLocal.terms.secondTermsPragraph}
<br />
{currentLocal.terms.fourthTermsParagraph}
<br />
{currentLocal.terms.fifthTermsPragraph}
<br />
{currentLocal.terms.sixthTermsPragraph}
</p>

<h5>{currentLocal.terms.securityTitle}</h5>
<p className='supTitle'>{currentLocal.terms.supTitle}</p>
<ul >
  <li className='mb-3'>{currentLocal.terms.listOne}</li>
  <li className='mb-3'>{currentLocal.terms.listtwo}</li>
  <li className='mb-3'>{currentLocal.terms.listthree}</li>
  <li className='mb-3'>{currentLocal.terms.listfour}</li>
  <li className='mb-3'>{currentLocal.terms.listfive}
  <br />
   {currentLocal.terms.secondListFive}

    </li>
</ul>
<h5>{currentLocal.terms.communicationTitle}</h5>
<p className='m-0 p-0'>{currentLocal.terms.firstcommunicationPragraph}</p>
<p className='m-0 p-0'>{currentLocal.terms.secondcommunicationPragraph}</p>

</div>
    </div>

<Footer />
  </section>;
}

export default Terms;
