import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return null; // Or a loading spinner
  }

  const home2Title = t("home2.title") || "";
  const home2Introduction = t("home2.introduction") || "";
  const home2Body = t("home2.body") || "";
  const home2ConnectCta = t("home2.connect_cta") || "";


  const titleParts = home2Title.split(" INTRODUCE ");
  const titlePart1 = titleParts[0];
  const introduceWord = titleParts.length > 1 ? titleParts[1].split(" ")[0] : "";
  const titlePart2 = titleParts.length > 1 ? titleParts[1].split(" ").slice(1).join(" ") : "";

  const bodyParts = home2Body.split(/C\+\+, Javascript and Python\.|Web Technologies and Products|Deep Learning and Natural Launguage Processing\.|Node\.js|Modern Javascript Library and Frameworks|React\.js and Next\.js/);
  const connectCtaParts = home2ConnectCta.split("connect");


  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {titlePart1} {introduceWord && <><span className="purple">{introduceWord}</span> {titlePart2}</>}
            </h1>
            <p className="home-about-body">
              {home2Introduction}
              <br />
              <br />
              {bodyParts[0]}
              <i>
                <b className="purple"> C++, Javascript and Python. </b>
              </i>
              {bodyParts[1]}
              <i>
                <b className="purple">Web Technologies and Products </b>
              </i>
              {bodyParts[2]}
              <i>
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              {bodyParts[3]}
              <b className="purple">Node.js</b>
              {bodyParts[4]}
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              {bodyParts[5]}
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              {bodyParts[6]}
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("home2.connect")}</h1>
            <p>
              {connectCtaParts[0]} {connectCtaParts.length > 1 && <><span className="purple">connect</span>{connectCtaParts[1]}</>}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/elidepb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elide-eduardo-portocarrero-burga-95275530b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
