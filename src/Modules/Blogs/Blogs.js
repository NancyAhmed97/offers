import React from "react";
import Footer from "../Common/Footer/Footer";
import Navba from "../Common/Navbar/Navba";
import { useSelector } from "react-redux";
import "./Blogs.css";
import BlogsContainer from "./Components/BlogsContainer/BlogsContainer";
function Blogs() {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  return (
    <section className="blogs">
      <Navba />
      <div className="contact_title text-center">
        <h1>{currentLocal.blog.blog}</h1>
        <p>{currentLocal.conactus.pragraph}</p>
      </div>
      <BlogsContainer />
      <Footer />
    </section>
  );
}

export default Blogs;
