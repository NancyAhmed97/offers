import React from 'react';
import BlogDetailsInfo from './Componantes/BlogDetailsInfo/BlogDetailsInfo';
import Category from './Componantes/Category/Category';
import RelatedBlog from './Componantes/RelatedBlog/RelatedBlog';
// import BlogInfoContainer from './Componantes/BlogInfoContainer/BlogInfoContainer';

function BlogInfo() {
  return <div className='blog_info'>
    <BlogDetailsInfo />
<Category />
<RelatedBlog />



  </div>;
}

export default BlogInfo;
