import React, { useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaExternalLinkAlt, FaCode } from "react-icons/fa";
import heartsound from "../assets/heartsound.png";
import speechsep from "../assets/speechsep.png";
import realestate360 from "../assets/realestate360.png";
import {
  fadeInUp,
  revealClip,
  springHover,
  staggerContainer,
} from "../animations/presets";
import useParallaxTilt from "../hooks/useParallaxTilt";

const projectData = [
  {
    title: "Detection of Cardiovascular Diseases",
    description:
      "Deep learning pipeline combining CNN + LSTM and SVM to detect cardiovascular diseases from heart sound signals. Includes adaptive denoising, spectral features, and clinical-grade evaluation metrics.",
    image: heartsound,
    tags: ["CNN", "LSTM", "Signal Processing", "Healthcare AI"],
    github: "#",
    live: "#",
    category: "AI",
  },
  {
    title: "Multi-Speaker Speech Separation",
    description:
      "Advanced speech separation with SuperFormer + SpaRSep using spatial cues (DOA, ITD, ILD) for crystal-clear analysis in complex acoustic environments.",
    image: speechsep,
    tags: ["Acoustic AI", "Transformers", "Audio DSP"],
    github: "#",
    live: "#",
    category: "Research",
  },
  {
    title: "RealEstate-360: Smart Property Platform",
    description:
      "Full-stack, AI-infused real-estate product with OCR ingestion, QR onboarding, and ML-driven price intelligence. Delivered as a SaaS-ready architecture.",
    image: realestate360,
    tags: ["React", "AWS", "Textract", "Product Design"],
    github: "#",
    live: "#",
    category: "Product",
  },
];

const filterOptions = ["All", "AI", "Research", "Product"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = useMemo(() => {
    if (activeFilter === "All") return projectData;
    return projectData.filter((proj) => proj.category === activeFilter);
  }, [activeFilter]);

  return (
    <Motion.section
      id="projects"
      className="relative rounded-3xl border border-white/5 bg-radial-card px-6 py-20 shadow-glow-cyan md:px-16"
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-20%" }}
    >
      <div className="mx-auto max-w-5xl text-center">
        <Motion.h2
          className="text-3xl font-semibold text-text-main drop-shadow-glow-cyan sm:text-4xl"
          variants={fadeInUp()}
        >
          Signature Projects
        </Motion.h2>
        <Motion.p
          className="mt-3 text-base text-text-muted/90 md:text-lg"
          variants={fadeInUp(0.06)}
        >
          Research-grade experimentation meeting production-level polish. Each build balances
          intelligence, human nuance, and performance.
        </Motion.p>
      </div>

      <Motion.div
        className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3"
        variants={staggerContainer(0.05)}
      >
        {filterOptions.map((filter) => {
          const active = activeFilter === filter;
          return (
            <Motion.button
              key={filter}
              type="button"
              whileHover={springHover}
              whileTap={{ scale: 0.94 }}
              className={`relative overflow-hidden rounded-full border px-5 py-2 text-sm font-semibold transition ${
                active
                  ? "border-neon-cyan/80 bg-neon-cyan/15 text-neon-cyan shadow-glow-cyan"
                  : "border-white/10 bg-night/50 text-text-muted hover:border-neon-cyan/40 hover:text-neon-cyan"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              <span className="relative z-10">{filter}</span>
              {active && (
                <Motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 z-0 bg-neon-cyan/10"
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                />
              )}
            </Motion.button>
          );
        })}
      </Motion.div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-8 lg:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </Motion.section>
  );
}

function ProjectCard({ project, index }) {
  const { title, description, image, tags, github, live } = project;
  const cardRef = useParallaxTilt({ maxTilt: 5.5, scale: 1.01, perspective: 1100 });

  return (
    <Motion.article
      ref={cardRef}
      variants={fadeInUp(index * 0.1)}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-night-soft/70 shadow-glow-cyan/30 transition"
      whileHover={{ boxShadow: "0 24px 60px rgba(12, 24, 40, 0.55)" }}
    >
      <Motion.div
        className="relative overflow-hidden rounded-t-3xl border-b border-white/5"
        variants={revealClip}
      >
        <Motion.img
          src={image}
          alt={title}
          loading="lazy"
          width={640}
          height={360}
          className="h-56 w-full object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-[var(--ease-out)] group-hover:opacity-60" />
      </Motion.div>

      <div className="flex flex-col gap-6 p-6">
        <Motion.div
          className="flex items-center justify-between gap-3"
          variants={fadeInUp(0.04)}
        >
          <h3 className="text-xl font-semibold text-text-main">{title}</h3>
          <span className="rounded-full border border-neon-cyan/30 px-3 py-1 text-xs uppercase tracking-wider text-neon-cyan/80">
            Featured
          </span>
        </Motion.div>

        <Motion.p
          className="text-sm leading-relaxed text-text-muted/90"
          variants={fadeInUp(0.08)}
        >
          {description}
        </Motion.p>

        <Motion.ul
          className="flex flex-wrap gap-2"
          variants={staggerContainer(0.03)}
        >
          {tags.map((tag) => (
            <Motion.li
              key={tag}
              variants={fadeInUp(0.05)}
              className="rounded-full border border-white/10 bg-night/60 px-3 py-1 text-xs uppercase tracking-wide text-text-muted"
            >
              {tag}
            </Motion.li>
          ))}
        </Motion.ul>

        <Motion.div
          className="flex flex-wrap items-center gap-3"
          variants={fadeInUp(0.12)}
        >
          <Motion.a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border border-neon-cyan/40 px-4 py-2 text-sm font-semibold text-neon-cyan transition hover:bg-neon-cyan/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan"
            whileHover={springHover}
            whileTap={{ scale: 0.94 }}
          >
            <FaCode aria-hidden="true" />
            View Code
          </Motion.a>

          <Motion.a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-green px-5 py-2 text-sm font-semibold text-night shadow-glow-strong transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan"
            whileHover={springHover}
            whileTap={{ scale: 0.94 }}
          >
            <FaExternalLinkAlt aria-hidden="true" />
            Live Preview
          </Motion.a>
        </Motion.div>
      </div>
    </Motion.article>
  );
}
