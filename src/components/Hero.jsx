import React from "react";
import profile from "../assets/profile.jpg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaBrain,
  FaEnvelopeOpen,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* LEFT: PROFILE IMAGE */}
      <div className="hero-left">
        <div className="hero-photo-ring">
          <img
            src={profile}
            alt="Viswanadh V Anna"
            className="hero-photo"
          />
        </div>
      </div>

      {/* RIGHT: INTRO TEXT */}
      <div className="hero-right">
        {/* animated tagline */}
        <p className="hero-tagline">
          <span className="tagline-part part-1">AI Enthusiast</span>
          <span className="tagline-separator"> · </span>
          <span className="tagline-part part-2">Cloud Developer</span>
          <span className="tagline-separator"> · </span>
          <span className="tagline-part part-3">Full-Stack Innovator</span>
        </p>

        <h1 className="hero-title">
          Hi, I’m <span>Viswanadh V Anna</span>
        </h1>

        {/* chips under name */}
        <div className="hero-chips">
          <span className="hero-chip">AI Enthusiast</span>
          <span className="hero-chip">Machine Learning Engineer</span>
          <span className="hero-chip">Computer Vision Researcher</span>
          <span className="hero-chip">Deep Learning Expert</span>
        </div>

        {/* Location / Expertise / Contact row */}
        <div className="hero-info-row">
          <div className="hero-info-pill">
            <FaMapMarkerAlt className="hero-info-icon" />
            <div>
              <p className="hero-info-label">Location</p>
              <p className="hero-info-value">Coimbatore, India</p>
            </div>
          </div>

          <div className="hero-info-pill">
            <FaBrain className="hero-info-icon" />
            <div>
              <p className="hero-info-label">Expertise</p>
              <p className="hero-info-value">AI, ML, Full-Stack</p>
            </div>
          </div>

          <div className="hero-info-pill">
            <FaEnvelopeOpen className="hero-info-icon" />
            <div>
              <p className="hero-info-label">Contact</p>
              <p className="hero-info-value">viswaanna6@gmail.com</p>
            </div>
          </div>
        </div>

        {/* CONNECT SECTION */}
        <div className="hero-connect">
          <p className="hero-connect-label">Connect</p>
          <div className="hero-socials">
            <a
              className="hero-social"
              href="https://github.com/viswanadhanna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="hero-social"
              href="https://linkedin.com/in/viswanadh-v-anna-8a9433318"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              className="hero-social"
              href="mailto:viswaanna6@gmail.com"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              className="hero-social"
              href="https://instagram.com/viswanadhanna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
