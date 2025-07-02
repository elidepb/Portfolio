import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { useTranslation } from "react-i18next";
import genericProjectImage from "../../Assets/Projects/generic.png"; // Placeholder image

function Projects() {
  const { t, ready } = useTranslation();

  const userProjects = [
    {
      title: "Audio Transcription (Python)",
      description: t("projects.descriptions.audioTranscription", {defaultValue: "An AI-powered tool to convert speech from audio files into text with high accuracy using advanced models."}),
      ghLink: "https://github.com/elidepb/Audio-transcription-with-python",
      imgPath: genericProjectImage,
    },
    {
      title: "Flutter Chess App",
      description: t("projects.descriptions.flutterChess", {defaultValue: "A classic game of chess reimagined as a sleek and responsive mobile application built with Flutter framework."}),
      ghLink: "https://github.com/elidepb/AJEDREX",
      imgPath: genericProjectImage,
    },
    {
      title: "MCMC Methods (Python/R)",
      description: t("projects.descriptions.mcmc", {defaultValue: "Implementation of MCMC algorithms for Bayesian inference, demonstrating complex statistical modeling techniques."}),
      ghLink: "https://github.com/elidepb/Markov-Chain-Monte-Carlo-Method-MCMC-using-Python-and-R",
      imgPath: genericProjectImage,
    },
    {
      title: "Multi-Language Translator",
      description: t("projects.descriptions.translator", {defaultValue: "A versatile Python tool for translating text and documents between multiple languages seamlessly and efficiently."}),
      ghLink: "https://github.com/elidepb/-Multi-Language-Translator-File-Processor",
      imgPath: genericProjectImage,
    },
    {
      title: "Monster Rolodex (React)",
      description: t("projects.descriptions.monsterRolodex", {defaultValue: "A fun and interactive React application displaying a filterable list of 'monsters' fetched from an API."}),
      ghLink: "https://github.com/elidepb/MONSTER-ROLODEX-REACT",
      imgPath: genericProjectImage,
    },
     {
      title: "GLB Model Generator",
      description: t("projects.descriptions.glbGenerator", {defaultValue: "A Python script to convert OBJ 3D models and their textures into the efficient GLB file format for web use."}),
      ghLink: "https://github.com/elidepb/GLB_GENERATOR",
      imgPath: genericProjectImage,
    },
  ];


  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {ready ? t("projects.title").split(" ")[0] : ""} {ready ? t("projects.title").split(" ")[1] : ""} {ready && t("projects.title").split(" ").length > 2 && <strong className="purple">{t("projects.title").split(" ")[2]}</strong>} {ready ? t("projects.title").split(" ").slice(3).join(" ") : ""}
        </h1>
        <p style={{ color: "white" }}>
          {t("projects.subtitle")}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {userProjects.map((project, index) => (
            <Col md={4} className="project-card" key={index}>
              <ProjectCard
                imgPath={project.imgPath || genericProjectImage}
                isBlog={false}
                title={project.title}
                description={project.description}
                ghLink={project.ghLink}
                demoLink={project.demoLink}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
