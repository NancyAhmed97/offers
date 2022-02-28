import React from "react";
import FaceBook from "../../../../../../Resources/Assets/img/LightFacebook";
import Twitter from "../../../../../../Resources/Assets/img/Lighttwitter";
import { useSelector } from "react-redux";
import LightLinkidin from "../../../../../../Resources/Assets/img/LightLinkidin";
import "./Category.css";
import { Col, Container, Row } from "react-bootstrap";
import { useHistory } from "react-router-dom";
function Category({ blog, fields }) {
  const { currentLocal } = useSelector((state) => state.currentLocal);
  const history = useHistory();
  return (
    <div className="category">
      <Container fluid className="m-0 p-0">
        <Row className="m-0 p-0">
          <Col md={8}>
            <div className="filteration_by_category">
              <Container fluid className="m-0 p-0">
                <Row className="p-0 m=0">
                  {fields &&
                    fields.map((field) => {
                      return (
                        <Col md={2} className="p-0">
                          <div
                            className="filteration_by_category_container"
                            onClick={() => {
                              history.push(`/blogs/:${field.id}`);
                            }}
                          >
                            {currentLocal.language === "English"
                              ? field.en_name
                              : field.ar_name} 
                          </div>
                        </Col>
                      );
                    })}
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={4}>
            <div className="share_blog">
              <ul>
                <li className="d-inline-block mx-3">
                  <p>{currentLocal.blogDetails.Sharepost}</p>
                </li>
                <li className="d-inline-block">
                  <a
                    href={blog.facebook_share_url}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FaceBook />
                  </a>
                </li>
                <li className="d-inline-block mx-2">
                  <a
                    href={blog.twitte_share_url}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <Twitter />
                  </a>
                </li>
                <li className="d-inline-block mx-2">
                  <a
                    href={blog.linkedin_share_url}
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <LightLinkidin />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Category;
