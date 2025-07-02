import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return null;
  }

  const nameAndFrom = t("about.nameAndFrom") || "";

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <span className="purple">{nameAndFrom}</span>
            <br />
            {t("about.studies")}
            <br />
            <br />
            {t("about.activities")}
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("about.activity1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.activity2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about.activity3")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {t("about.quote")}{" "}
          </p>
          <footer className="blockquote-footer">Elide</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
