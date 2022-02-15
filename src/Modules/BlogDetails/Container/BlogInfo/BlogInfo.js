import React from "react";
import BlogDetailsInfo from "./Componantes/BlogDetailsInfo/BlogDetailsInfo";
import Category from "./Componantes/Category/Category";
import RelatedBlog from "./Componantes/RelatedBlog/RelatedBlog";
// import BlogInfoContainer from './Componantes/BlogInfoContainer/BlogInfoContainer';
function BlogInfo({ blog, fields, related }) {
  return (
    <div className="blog_info">
      <BlogDetailsInfo blog={blog} />
      <Category blog={blog} fields={fields} />
      <RelatedBlog related={related} />
    </div>
  );
}

export default BlogInfo;
