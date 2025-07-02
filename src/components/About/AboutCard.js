import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t, ready } = useTranslation();

  if (!ready) {
    return null;
  }

  const nameAndFrom = t("about.nameAndFrom") || ""; // "Elide Portocarrero, desarrollador de software desde Perú."

  // Extraer el nombre (Elide Portocarrero)
  const name = nameAndFrom.split(",")[0].trim();

  // Extraer la descripción y ubicación (desarrollador de software desde Perú.)
  const descriptionAndLocation = nameAndFrom.substring(name.length + 1).trim(); // Quita la coma y el espacio

  // Separar la descripción de la ubicación
  const parts = descriptionAndLocation.split("desde");
  const description = parts[0].trim();
  const location = parts.length > 1 ? parts[1].trim().replace(".", "") : "";

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola, soy <span className="purple">{name}</span>, {description} desde <span className="purple">{location}.</span>
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
