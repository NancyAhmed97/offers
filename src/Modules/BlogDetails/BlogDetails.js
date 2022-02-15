import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../Modules/Common/Footer/Footer";
import Navbar from "../../Modules/Common/Navbar/Navba";
import BlogInfo from "./Container/BlogInfo/BlogInfo";
import MostViewed from "./Container/MostViewed/MostViewed";
import { useLocation } from "react-router-dom";
import axios from "axios";
function BlogDetails() {
  const location = useLocation();
  const [blog, setBlog] = useState("");
  const [fields, setFields] = useState("");
  const [related, setrelated] = useState("");
  const [mostViewed, setMostViewed] = useState("");
  const searchInPath = location.pathname.indexOf(":");
  const id = location.pathname.slice(searchInPath + 1);
  useEffect(() => {
    axios({
      method: "get",
      url: `https://offers.com.fig-leaf.net/api/v1/blog/${id}`,
    }).then((res) => {
      if (res.data.success === true) {
       setMostViewed(res.data.data.most_viewed_blogs);
        setBlog(res.data.data.blog);
        setFields(res.data.data.fields);
        setrelated(res.data.data.related_blog);
      }
    });
  }, [id]);
  return (
    <div className="blog_details">
      <Navbar />
      <Container fluid className="m-0 pr pl mt-5">
        <Row className="m-0 p-0">
          <Col md={9} className="p-0 m-0">
            <BlogInfo blog={blog} fields={fields} related={related} />
          </Col>
          <Col md={3} className="p-0 m-0">
            <MostViewed mostViewed={mostViewed} />
          </Col>{" "}
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default BlogDetails;
