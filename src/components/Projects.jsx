import React from "react";
import heartsound from "../assets/heartsound.png";
import speechsep from "../assets/speechsep.png";
import realestate360 from "../assets/realestate360.png";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    title: "Detection of Cardiovascular Diseases",
    description:
      "Deep learning pipeline combining CNN+LSTM and SVM to detect cardiovascular diseases from heart sound signals. Uses signal preprocessing and feature extraction from PCG data.",
    image: heartsound,
    tags: ["CNN", "LSTM", "SVM", "Signal Processing"],
    github: "#",
    live: "#",
  },
  {
    title: "Multi-Speaker Speech Separation",
    description:
      "Developed an advanced speech separation model using SuperFormer and SpaRSep with spatial and acoustic features such as DOA, ITD, and ILD for clear multi-speaker analysis.",
    image: speechsep,
    tags: ["SuperFormer", "SpaRSep", "Acoustic AI"],
    github: "#",
    live: "#",
  },
  {
    title: "RealEstate-360: Smart Property Listing Platform",
    description:
      "Full-stack AI-integrated real estate platform built with React, Node, and AWS. Uses Textract OCR, QR-code scanning, and price prediction models for intelligent property management.",
    image: realestate360,
    tags: ["React", "AWS", "Textract", "Price Prediction"],
    github: "#",
    live: "#",
  },
];


export default function Projects() {
  return (
    <section className="projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        A collection of my major works — blending research, AI innovation, and modern UI design.
      </p>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={proj.image} alt={proj.title} />
            </div>

            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>

              <div className="project-tags">
                {proj.tags.map((tag, i) => (
                  <span key={i}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn-icon">
                  <FaCode /> Code
                </a>
                <a href={proj.live} target="_blank" rel="noopener noreferrer" className="btn-icon">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
