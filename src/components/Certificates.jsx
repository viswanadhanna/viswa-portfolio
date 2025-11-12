import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer, revealClip, springHover } from "../animations/presets";

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
    <Motion.section
      className="px-6 py-20 md:px-16 bg-night"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
    >
      <Motion.div className="mx-auto max-w-5xl" variants={fadeInUp()}>
        <h2 className="text-3xl font-semibold text-text-main drop-shadow-glow-cyan sm:text-4xl">Certificates</h2>
        <p className="mt-2 text-base text-text-muted/90">
          Organized by technology and other professional recognitions.
        </p>
      </Motion.div>

      <div className="mx-auto mt-6 flex max-w-3xl gap-3">
        <Motion.button
          className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
            tab === "tech"
              ? "border-neon-cyan/80 bg-neon-cyan/15 text-neon-cyan shadow-glow-cyan"
              : "border-white/10 bg-night/50 text-text-muted hover:border-neon-cyan/40 hover:text-neon-cyan"
          }`}
          onClick={() => setTab("tech")}
          whileHover={springHover}
          whileTap={{ scale: 0.96 }}
        >
          Tech
        </Motion.button>
        <Motion.button
          className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
            tab === "other"
              ? "border-neon-cyan/80 bg-neon-cyan/15 text-neon-cyan shadow-glow-cyan"
              : "border-white/10 bg-night/50 text-text-muted hover:border-neon-cyan/40 hover:text-neon-cyan"
          }`}
          onClick={() => setTab("other")}
          whileHover={springHover}
          whileTap={{ scale: 0.96 }}
        >
          Others
        </Motion.button>
      </div>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((c) => (
          <Motion.article
            key={c.title}
            className="rounded-2xl border border-white/10 bg-night-soft/70 p-5 shadow-glow-cyan/30"
            variants={revealClip}
          >
            <h3 className="text-lg font-semibold text-text-main">{c.title}</h3>
            <p className="cert-issuer text-text-muted">{c.issuer}</p>
            <p className="cert-year text-text-muted">{c.year}</p>
            <Motion.button
              className="mt-2 inline-flex rounded-full bg-gradient-to-r from-neon-cyan to-neon-green px-4 py-2 text-sm font-semibold text-night shadow-glow-strong"
              whileHover={springHover}
              whileTap={{ scale: 0.96 }}
            >
              View
            </Motion.button>
          </Motion.article>
        ))}
      </div>
    </Motion.section>
  );
}
