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
  const { t, ready, i18n } = useTranslation();

  if (!ready) {
    return null;
  }

  const home2Title = t("home2.title") || "";
  const home2Introduction = t("home2.introduction") || "";
  const home2Body = t("home2.body") || "";
  const home2ConnectCta = t("home2.connect_cta") || "";

  const renderFormattedBody = () => {
    const isEnglish = i18n.language === 'en';
    
    if (isEnglish) {
      return (
        <>
          I am fluent in classics like{" "}
          <i><b className="purple">C++, Javascript and Python.</b></i>
          {" "}My field of Interest's are building new{" "}
          <i><b className="purple">Web Technologies and Products</b></i>
          {" "}and also in areas related to{" "}
          <i><b className="purple">Deep Learning and Natural Language Processing.</b></i>
          <br /><br />
          I also apply my passion for developing products with{" "}
          <b className="purple">Node.js</b> and{" "}
          <i><b className="purple">Modern Javascript Library and Frameworks</b></i>
          {" "}like{" "}
          <i><b className="purple">React.js and Next.js</b></i>
        </>
      );
    } else {
      return (
        <>
          Hablo con fluidez clásicos como{" "}
          <i><b className="purple">C++, Javascript y Python.</b></i>
          {" "}Mis campos de interés son la creación de nuevas{" "}
          <i><b className="purple">tecnologías y productos web</b></i>
          {", "}y también áreas relacionadas con el{" "}
          <i><b className="purple">aprendizaje profundo y el procesamiento del lenguaje natural.</b></i>
          <br /><br />
          También aplico mi pasión por desarrollar productos con{" "}
          <b className="purple">Node.js</b> y{" "}
          <i><b className="purple">bibliotecas y marcos de JavaScript modernos</b></i>
          {" "}como{" "}
          <i><b className="purple">React.js y Next.js</b></i>
        </>
      );
    }
  };

  const renderConnectCta = () => {
    const isEnglish = i18n.language === 'en';
    
    if (isEnglish) {
      return (
        <>
          Feel free to <span className="purple">connect</span> with me
        </>
      );
    } else {
      return (
        <>
          No dudes en <span className="purple">conectarte</span> conmigo
        </>
      );
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {home2Title}
            </h1>
            <p className="home-about-body">
              {home2Introduction}
              <br />
              <br />
              {renderFormattedBody()}
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
              {renderConnectCta()}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/elidepb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elide-eduardo-portocarrero-burga-95275530b"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
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