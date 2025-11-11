import React from "react";
import { FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <section className="about-section">
      <div className="section-header">
        <h2>About Me</h2>
        <p>
          I’m Viswanadh V Anna, a B.Tech Artificial Intelligence student passionate
          about building intelligent systems and full-stack applications that blend
          data, design and real-world impact. I enjoy exploring AI, deep learning,
          and modern web technologies to create meaningful digital experiences.
        </p>
      </div>

      {/* Education section under About */}
      <div className="about-edu">
        <h3 className="edu-title">
          <FaGraduationCap style={{ marginRight: "8px", color: "#27b0ff" }} />
          Education
        </h3>

        <div className="edu-card">
          <h4>B.Tech – Artificial Intelligence</h4>
          <p>
            <strong>Amrita Vishwa Vidyapeetham, Coimbatore</strong>
          </p>
          <p>2022 – 2026 | Current GPA: 7.43 / 10</p>
        </div>

        <div className="edu-card">
          <h4>Higher Secondary Education (12th Grade)</h4>
          <p>
            <strong>Narayana Junior College</strong> – Tirupati, Andhra Pradesh
          </p>
          <p>Percentage: 95.7% | Completed in 2022</p>
        </div>

        <div className="edu-card">
          <h4>Secondary Education (10th Grade)</h4>
          <p>
            <strong>Narayana E.M. High School</strong> – Tirupati, Andhra Pradesh
          </p>
          <p>Percentage: 95.8% | Completed in 2020</p>
        </div>
      </div>
    </section>
  );
}
