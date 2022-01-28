import React, { useState } from 'react';
import { useSelector } from "react-redux";
import "./ProductDesc.css"
function ProductDesc() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
    const [activeState, setActiveState] = useState("desc");
  return <div className={currentLocal.language==="English"?'product_desc pr pl':"product_desc ar_product_desc  pr pl"}>
<div className='product_desc_categoury'>
    <p id="desc" onClick={(e)=>{setActiveState(e.target.id)}} className={activeState==="desc"&&"active"}>{currentLocal.productDetails.Description}</p>
    <p id="reviwes" onClick={(e)=>{setActiveState(e.target.id)}} className={activeState==="reviwes"&&"active"}>{currentLocal.productDetails.Reviews}(450)</p>
</div>
{activeState==="desc"&&
<div className='product_desc_container'>
<p className='descPragraph'>{currentLocal.productDetails.descPragraph}</p>
<p>{currentLocal.productDetails.KeyFeatures}</p>
<ul className='m-0 p-0'>
    <li>slim body with metal cover</li>
    <li>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)</li>
    <li>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
    <li>NVIDIA GeForce MX350 2GB GDDR5 graphics card</li>
    <li>backlit keyboard, touchpad with gesture support</li>
</ul>
</div>
}
{activeState==="reviwes"&&
<div className='product_reviwes_container'>hi product_reviwes</div>
}
  </div>;
}

export default ProductDesc;
