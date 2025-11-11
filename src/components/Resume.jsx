import React from "react";

export default function Resume() {
  return (
    <section className="section resume-section">
      <div className="section-header">
        <h2>Resume</h2>
        <p>Quick summary below and full resume preview with download option.</p>
      </div>

      {/* 1) SUMMARY CARD */}
      <div className="resume-summary-card">
        <h3 className="resume-name">Viswanadh V Anna</h3>
        <p className="resume-role">
          B.Tech Artificial Intelligence | AI & Full-Stack Developer
        </p>

        <div className="resume-block">
          <h4>Education</h4>
          <p>
            <strong>Amrita Vishwa Vidyapeetham, Coimbatore</strong> – B.Tech in
            Artificial Intelligence (2022–2026), GPA 7.43/10.
          </p>
          <p>
            <strong>Narayana Junior College, Tirupati</strong> – Higher
            Secondary, 95.7%.
          </p>
          <p>
            <strong>Narayana E.M. High School, Tirupati</strong> – Secondary
            Education, 95.8%.
          </p>
        </div>

        <div className="resume-block">
          <h4>Projects & Experience</h4>
          <ul>
            <li>
              Detection of cardiovascular diseases from heart sound analysis
              using CNN+LSTM and SVM.
            </li>
            <li>
              Multi-Speaker speech separation using SuperFormer & SpaRSep with
              spatial and acoustic features.
            </li>
            <li>
              RealEstate-360 – AI-enabled real estate platform using React,
              Node and AWS Textract.
            </li>
          </ul>
        </div>

        <div className="resume-block">
          <h4>Key Skills</h4>
          <div className="resume-tags">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Deep Learning</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>AWS</span>
          </div>
        </div>
      </div>

      {/* 2) FULL PDF PREVIEW */}
      <div className="resume-viewer">
        <iframe
          src="/Resume.pdf"
          title="Viswanadh V Anna Resume"
          className="resume-frame"
        />
      </div>

      {/* 3) DOWNLOAD BUTTON AT BOTTOM */}
      <a className="btn-primary resume-download" href="/Resume.pdf" download>
        Download Full Resume
      </a>
    </section>
  );
}
