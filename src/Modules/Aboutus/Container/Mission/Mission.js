import React from 'react';
import { useSelector } from "react-redux";
import "./Mission.css"
function Mission() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
  return <div className='mission pr pl'>
      <div className='mission_container text-center'>
      <div className='about_title'>
    <h1>      vision & mission 
</h1>
    <div className='about_title_question_answer'>
    <p className='about_title_question mb-2'>Our vision and mission </p>
    <p className='about_title_answer'>To be a leading global company</p>
    </div>
</div>
<div className='mission_pragraph'>


<p >          {currentLocal.aboutus.missionPragraph}
</p>
</div>
           </div>

  </div>;
}

export default Mission;
