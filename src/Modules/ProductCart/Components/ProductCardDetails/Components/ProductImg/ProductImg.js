import React, { useState } from 'react';
import productImg from "../../../../../../Resources/Assets/img/productImg.png"
import smallProductImg from "../../../../../../Resources/Assets/img/smallProductImg.png"
import smallBook from "../../../../../../Resources/Assets/img/smallBook.png"
import "./ProductImg.css"
function ProductImg() {
    const [srcState, setSrcState] = useState("");
    const imgs=[
        {
            id:"1",
            img:productImg
        },
        {
            id:"2",
            img:smallProductImg
        },
        {
            id:"3",
            img:smallProductImg
        },
        {
            id:"4",
            img:smallBook
        },
    
    ]
    console.log(srcState);
  return <div className='product_img'>
<div className='product_img_container'>
    {imgs.map((imgsrc,index)=>{
console.log(index);
if(index===0){
return(
<div className='product_img_large_container w-100 mb-4'>
    <img src={imgsrc.img} alt="productImg"  className='productImg w-100'/>
</div>
)
}
})}

{/* <div className='product_img_small_container d-flex'>
    <div>
<img onClick={(e)=>{
    setSrcState(e.target.src)
}} src={smallBook} alt="smallProductImg" className='smallProductImg' />
    </div>
    <div><img src={smallProductImg} alt="smallProductImg" className='smallProductImg' />
</div>
    <div><img src={smallProductImg} alt="smallProductImg" className='smallProductImg' />
</div>
</div> */}
</div>
       </div>;
}

export default ProductImg;
