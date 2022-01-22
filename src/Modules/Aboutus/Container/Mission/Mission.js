import React from 'react';
import { useSelector } from "react-redux";
import "./Mission.css"
function Mission() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
  return <div className='mission pr pl'>
      <div className='mission_container text-center'>
<p>          {currentLocal.aboutus.missionPragraph}
</p>
           </div>

  </div>;
}

export default Mission;
