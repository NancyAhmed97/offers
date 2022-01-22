import React from 'react';
import FaceBook from "../../../../../../Resources/Assets/img/LightFacebook";
import Twitter from "../../../../../../Resources/Assets/img/Lighttwitter";
import { useSelector } from "react-redux";
import LightLinkidin from '../../../../../../Resources/Assets/img/LightLinkidin';
import  "./Category.css"
function Category() {
    const { currentLocal } = useSelector((state) => state.currentLocal);
  return <div className='category'>
<div className="filteration_by_category">
<div className='view_post'>View post</div>
<div className='life_style'>lifestyle</div>
<div className='conference'>conference</div>
<div className='plastic_surgery'>plastic surgery</div>
</div>
<div className='share_blog'>
<ul>
              <li className="d-inline-block mx-3">
                <p>{currentLocal.blogDetails.Sharepost}</p>
              </li>
              <li className="d-inline-block">
                <a href="/" target={"_blank"} rel="noreferrer">
                <FaceBook />
                </a>
              </li>
              <li className="d-inline-block mx-2">
                <a href="/" target={"_blank"} rel="noreferrer">
<Twitter />
                </a>
              </li>
              <li className="d-inline-block mx-2">
                <a href="/" target={"_blank"} rel="noreferrer">
<LightLinkidin />
                </a>
              </li>
            </ul>
</div>
  </div>;
}

export default Category;
