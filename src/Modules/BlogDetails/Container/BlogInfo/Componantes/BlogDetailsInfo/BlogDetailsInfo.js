import React from 'react';
import blogDetailImg from "../../../../../../Resources/Assets/img/blogDetailImg.png"
import "./BlogDetailsInfo.css"
function BlogDetailsInfo() {
  return <div className='blog_details_info'>
      
<p className="time">
   5 September, 2022
        {/* {postBlog.created_at} */}
      </p>
      <h2 className='mb-3'>
      Add product name here in this space and edit it here in same Content
        {/* {currentLocal.language === "English"? postBlog.en_title
          : postBlog.ar_title} */}
      </h2>
      <div className='blogDetailImg mb-4'>
          <img src={blogDetailImg} alt="blogDetailImg" />
      </div>
      <div className='blog-details-conten mb-4'>
          <p>It’s normal to feel anxiety, worry and grief any time you’re diagnosed with a medical condition – and that’s certainly true if you test positive for COVID-19, or are presumed to be positive. If your symptoms aren’t severe and you can recover at home, this will involve home isolation until it’s safe for you to be near others without potentially spreading the infection.

Isolation protects others from getting sick – but for the person who is sick, it might seem like one more thing on top of an already stressful situation. “Stress negatively affects your body, so while you rest up and work on recovering physically, it’s important to keep your mental health in check, too,” says psychiatrist Amit Anand, MD.

Here are some ways to keep anxiety and sadness from creeping in while you recover from COVID-19:

Focus on what you can know and control
You may not know how you got infected, or how long it will take to recover. Instead of focusing your energy on regret or what ifs, double down on what you can do. Your job now is to take care of yourself, get well and avoid spreading the infection to anyone else.

Engage your support network
Ask loved ones to check in on you regularly via phone, email or video chat. Talk to them about how you’re feeling. If you’re worried about taking care of children, pets or household duties while you’re sick, identify family members, friends or members of your community who aren’t part of a

</p>
      </div>
  </div>;
}

export default BlogDetailsInfo;
