import React from "react";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiTensorflow, SiOpencv, SiC, SiCplusplus } from "react-icons/si";
import "../index.css";

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <p className="skills-subtitle">
        My technical expertise blended with creativity — explore my core competencies below.
      </p>

      {/* Floating Skills Icons Section */}
      <div className="floating-icons">
        <div className="icon-bubble"><FaHtml5 /></div>
        <div className="icon-bubble"><FaCss3Alt /></div>
        <div className="icon-bubble"><SiJavascript /></div>
        <div className="icon-bubble"><FaReact /></div>
        <div className="icon-bubble"><SiMongodb /></div>
        <div className="icon-bubble"><FaDatabase /></div>
        <div className="icon-bubble"><FaPython /></div>
        <div className="icon-bubble"><FaJava /></div>
        <div className="icon-bubble"><SiTensorflow /></div>
        <div className="icon-bubble"><SiOpencv /></div>
        <div className="icon-bubble"><SiC /></div>
        <div className="icon-bubble"><SiCplusplus /></div>
        <div className="icon-bubble"><FaGitAlt /></div>
      </div>

      {/* Categorized Skills Section */}
      <div className="skills-grid">
        <div className="skills-card">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
            <li>Java</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Web Technologies</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Databases & Tools</h3>
          <ul>
            <li>MySQL</li>
            <li>MongoDB</li>
            <li>Git</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Frameworks & Libraries</h3>
          <ul>
            <li>TensorFlow</li>
            <li>OpenCV</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Core Concepts</h3>
          <ul>
            <li>Data Structures & Algorithms</li>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>YOLO Object Detection</li>
            <li>Explainable AI (XAI)</li>
          </ul>
        </div>

        <div className="skills-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Teamwork</li>
            <li>Problem Solving</li>
            <li>Creativity</li>
            <li>Adaptability</li>
            <li>Communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
}