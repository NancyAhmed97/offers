import React from "react";
import { useSelector } from "react-redux";
import "./BlogDetailsInfo.css";
function BlogDetailsInfo({ blog }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  // const url = "https://offers.com.fig-leaf.net";
  function createMarkup(data) {
    return { __html: data };
  }
  return (
    <div className="blog_details_info">
      <p className="time px-1">{blog.created_at}</p>
      <h2 className="mb-3">
        {currentLocal.language === "English" ? blog.en_title : blog.ar_title}
      </h2>
      <div className="blogDetailImg mb-4">
        <img src={blog.image} alt="blogDetailImg" />
      </div>
      <div className="blog-details-conten mb-4">
        <p
          dangerouslySetInnerHTML={createMarkup(
            currentLocal.language === "English" ? blog.en_description :  blog.ar_description
          )}
        >
        </p>
      </div>
    </div>
  );
}

export default BlogDetailsInfo;
