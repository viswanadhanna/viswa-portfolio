import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer, slideInLeft, slideInRight } from "../animations/presets";
import { FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <Motion.section
      className="about-section"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
    >
      <Motion.div className="section-header" variants={fadeInUp()}>
        <h2 className="relative inline-block">
          About Me
          <Motion.span
            className="absolute -bottom-2 left-0 h-[2px] w-full origin-left rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            aria-hidden="true"
          />
        </h2>
        <p>
          I’m Viswanadh V Anna, a B.Tech Artificial Intelligence student passionate
          about building intelligent systems and full-stack applications that blend
          data, design and real-world impact. I enjoy exploring AI, deep learning,
          and modern web technologies to create meaningful digital experiences.
        </p>
      </Motion.div>

      {/* Education section under About */}
      <div className="about-edu relative">
        <h3 className="edu-title flex items-center gap-2 text-neon-cyan">
          <FaGraduationCap />
          Education
        </h3>

        <div className="absolute left-[10px] top-10 bottom-0 w-px bg-gradient-to-b from-neon-cyan/0 via-neon-cyan/40 to-transparent" aria-hidden="true" />

        <Motion.div className="edu-card relative border border-white/10 bg-night-soft/70 rounded-2xl p-5 shadow-glow-cyan/20 hover:shadow-glow-cyan transition" variants={slideInLeft(36, 0)}>
          <span className="absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-neon-cyan/20 via-neon-cyan to-neon-cyan/20" aria-hidden="true" />
          <span className="absolute -left-[11px] top-5 h-3 w-3 rounded-full bg-neon-cyan shadow-glow-cyan" aria-hidden="true" />
          <h4>B.Tech – Artificial Intelligence</h4>
          <p>
            <strong>Amrita Vishwa Vidyapeetham, Coimbatore</strong>
          </p>
          <p>2022 – 2026 | Current GPA: 7.43 / 10</p>
        </Motion.div>

        <Motion.div className="edu-card relative border border-white/10 bg-night-soft/70 rounded-2xl p-5 shadow-glow-cyan/20 hover:shadow-glow-cyan transition" variants={slideInRight(36, 0.04)}>
          <span className="absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-neon-cyan/20 via-neon-cyan to-neon-cyan/20" aria-hidden="true" />
          <span className="absolute -left-[11px] top-5 h-3 w-3 rounded-full bg-neon-cyan shadow-glow-cyan" aria-hidden="true" />
          <h4>Higher Secondary Education (12th Grade)</h4>
          <p>
            <strong>Narayana Junior College</strong> – Tirupati, Andhra Pradesh
          </p>
          <p>Percentage: 95.7% | Completed in 2022</p>
        </Motion.div>

        <Motion.div className="edu-card relative border border-white/10 bg-night-soft/70 rounded-2xl p-5 shadow-glow-cyan/20 hover:shadow-glow-cyan transition" variants={slideInLeft(36, 0.08)}>
          <span className="absolute left-0 right-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-neon-cyan/20 via-neon-cyan to-neon-cyan/20" aria-hidden="true" />
          <span className="absolute -left-[11px] top-5 h-3 w-3 rounded-full bg-neon-cyan shadow-glow-cyan" aria-hidden="true" />
          <h4>Secondary Education (10th Grade)</h4>
          <p>
            <strong>Narayana E.M. High School</strong> – Tirupati, Andhra Pradesh
          </p>
          <p>Percentage: 95.8% | Completed in 2020</p>
        </Motion.div>
      </div>
    </Motion.section>
  );
}
