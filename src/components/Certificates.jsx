import React, { useState } from "react";

const techCerts = [
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "IBM SkillsBuild",
    year: "2024",
  },
  {
    title: "Artificial Intelligence Foundation",
    issuer: "Infosys Springboard",
    year: "2024",
  },
  {
    title: "AI Essentials (LinkedIn Learning)",
    issuer: "LinkedIn Learning",
    year: "2024",
  },
];

const otherCerts = [
  {
    title: "Campus Events & Volunteering",
    issuer: "Anokha Tech Fest, Amrita",
    year: "2024",
  },
];

export default function Certificates() {
  const [tab, setTab] = useState("tech");

  const data = tab === "tech" ? techCerts : otherCerts;

  return (
    <section className="section certificates-section">
      <div className="section-header">
        <h2>Certificates</h2>
        <p>Organized by technology and other professional recognitions.</p>
      </div>

      <div className="cert-tabs">
        <button
          className={tab === "tech" ? "cert-tab active" : "cert-tab"}
          onClick={() => setTab("tech")}
        >
          Tech
        </button>
        <button
          className={tab === "other" ? "cert-tab active" : "cert-tab"}
          onClick={() => setTab("other")}
        >
          Others
        </button>
      </div>

      <div className="cert-grid">
        {data.map((c) => (
          <article key={c.title} className="cert-card">
            <h3>{c.title}</h3>
            <p className="cert-issuer">{c.issuer}</p>
            <p className="cert-year">{c.year}</p>
            <button className="btn-primary cert-btn">View</button>
          </article>
        ))}
      </div>
    </section>
  );
}
