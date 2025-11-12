import React, { useMemo } from "react";
import { motion as Motion } from "framer-motion";
import {
  fadeIn,
  fadeInUp,
  scaleIn,
  staggerContainer,
  springHover,
  shouldReduceMotion,
} from "../animations/presets";
import useParallaxTilt from "../hooks/useParallaxTilt";
import profile from "../assets/profile.jpeg";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaBrain,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const heroChips = [
  "AI Enthusiast",
  "Machine Learning Engineer",
  "Computer Vision Researcher",
  "Deep Learning Expert",
];

const infoPills = [
  {
    icon: FaMapMarkerAlt,
    label: "Location",
    value: "Coimbatore, India",
  },
  {
    icon: FaBrain,
    label: "Expertise",
    value: "AI, ML, Full-Stack",
  },
  {
    icon: FaEnvelopeOpen,
    label: "Contact",
    value: "viswaanna6@gmail.com",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/viswanadhanna",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/viswanadh-v-anna-8a9433318",
    label: "LinkedIn",
  },
  {
    icon: FaEnvelope,
    href: "mailto:viswaanna6@gmail.com",
    label: "Email",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com/viswanadhanna",
    label: "Instagram",
  },
];

export default function Hero() {
  const navigate = useNavigate();
  const photoRef = useParallaxTilt({ maxTilt: 4.2, scale: 1.02 });
  const words = useMemo(
    () => "Crafting intelligent experiences for people and products".split(" "),
    []
  );
  const showParticles = useMemo(() => !shouldReduceMotion(), []);
  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, idx) => ({
        id: idx,
        top: Math.random() * 100,
        left: Math.random() * 100,
        duration: 4 + Math.random() * 2,
        delay: idx * 0.18,
      })),
    []
  );

  return (
    <Motion.section
      id="home"
      className="relative isolate flex min-h-[calc(100vh-120px)] flex-col justify-center overflow-hidden rounded-3xl border border-white/5 bg-night/60 px-6 py-16 shadow-glow-cyan md:px-16 lg:flex-row lg:items-center"
      variants={staggerContainer(0.1)}
      initial="hidden"
      animate="show"
    >
      {showParticles && (
        <div className="pointer-events-none absolute inset-0">
          {particles.map(({ id, top, left, duration, delay }) => (
            <Motion.span
              key={id}
              className="absolute h-1.5 w-1.5 rounded-full bg-neon-cyan/60 shadow-glow-cyan"
              style={{
                top: `${top}%`,
                left: `${left}%`,
              }}
              animate={{
                y: [0, -6, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      )}

      <Motion.div
        className="relative mx-auto mb-14 flex w-full max-w-sm justify-center lg:mb-0 lg:max-w-md lg:flex-1"
        variants={scaleIn}
      >
        <div
          ref={photoRef}
          className="relative flex h-64 w-64 items-center justify-center rounded-full neon-ring p-[3px] shadow-glow-strong sm:h-72 sm:w-72"
        >
          <div className="absolute inset-0 -z-10 animate-pulse-soft rounded-full bg-neon-cyan/20 blur-3xl" />
          <img
            src={profile}
            alt="Viswanadh V Anna"
            loading="lazy"
            className="h-full w-full rounded-full border border-neon-cyan/40 object-cover object-center"
          />
        </div>
      </Motion.div>

      <Motion.div className="relative z-10 flex flex-1 flex-col gap-6" variants={fadeIn}>
        <Motion.p
          className="flex flex-wrap items-center gap-2 text-sm uppercase tracking-[0.32em] text-neon-cyan/70"
          variants={staggerContainer(0.05)}
        >
          {["AI Enthusiast", "Cloud Builder", "Vision for Detail"].map((phrase, idx) => (
            <Motion.span
              key={phrase}
              variants={fadeInUp(idx * 0.04)}
              className="flex items-center gap-2"
            >
              {idx !== 0 && <span aria-hidden="true" className="text-neon-cyan/40">•</span>}
              {phrase}
            </Motion.span>
          ))}
        </Motion.p>

        <Motion.h1
          className="max-w-xl text-4xl font-semibold leading-tight text-text-main sm:text-5xl"
          variants={fadeInUp(0.08)}
        >
          Hi, I’m <span className="text-neon-cyan drop-shadow-glow-cyan">Viswanadh V Anna</span>
        </Motion.h1>

        <Motion.div
          className="flex max-w-2xl flex-wrap gap-2 text-base text-text-muted/80"
          variants={staggerContainer(0.02)}
        >
          {words.map((word, index) => (
            <Motion.span
              key={word + index}
              variants={fadeInUp(index * 0.02)}
              className="relative"
            >
              <span>{word}</span>{" "}
            </Motion.span>
          ))}
        </Motion.div>

        <Motion.div
          className="flex flex-wrap gap-3"
          variants={staggerContainer(0.05)}
          aria-label="Expertise tags"
        >
          {heroChips.map((chip, idx) => (
            <Motion.span
              key={chip}
              variants={fadeInUp(idx * 0.04)}
              className="rounded-full border border-neon-cyan/30 bg-night-soft/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-neon-cyan/90 shadow-glow-cyan/50"
            >
              {chip}
            </Motion.span>
          ))}
        </Motion.div>

        <Motion.div
          className="grid gap-4 sm:grid-cols-3"
          variants={staggerContainer(0.08)}
          role="list"
        >
          {infoPills.map(({ icon: Icon, label, value }, idx) => (
            <Motion.div
              key={label}
              variants={fadeInUp(idx * 0.05)}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-night-soft/50 px-4 py-3 text-sm text-text-muted shadow-glow-cyan/30"
              role="listitem"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-neon-cyan/10 text-neon-cyan backdrop-blur">
                <Icon aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-text-muted/70">
                  {label}
                </span>
                <span className="text-sm text-text-main">{value}</span>
              </span>
            </Motion.div>
          ))}
        </Motion.div>

        <Motion.div
          className="flex flex-wrap items-center gap-4"
          variants={staggerContainer(0.06)}
        >
          <Motion.button
            type="button"
            onClick={() => navigate("/projects")}
            className="neon-button group text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan"
            whileHover={springHover}
            whileTap={{ scale: 0.96 }}
          >
            <span className="relative z-10">Explore Projects</span>
            <span className="pointer-events-none absolute inset-0 -z-0 translate-y-full bg-white/20 transition duration-300 group-active:translate-y-0" />
          </Motion.button>
          <Motion.a
            href="/contact"
            className="rounded-full border border-neon-cyan/40 px-6 py-3 text-sm font-semibold text-neon-cyan shadow-glow-cyan transition hover:bg-neon-cyan/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan"
            whileHover={springHover}
            whileTap={{ scale: 0.96 }}
          >
            Let’s Collaborate
          </Motion.a>
        </Motion.div>

        <Motion.div
          className="mt-6 flex flex-col gap-3 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between"
          variants={fadeIn}
        >
          <div>
            <span className="text-xs uppercase tracking-[0.28em] text-neon-cyan/60">
              Connect
            </span>
            <Motion.div
              className="mt-3 flex gap-3"
              variants={staggerContainer(0.05)}
            >
              {socialLinks.map(({ icon: Icon, href, label }, idx) => (
                <Motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  variants={fadeInUp(idx * 0.03)}
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-neon-cyan/30 bg-night-soft/60 text-neon-cyan shadow-glow-cyan transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neon-cyan"
                  whileHover={springHover}
                  whileTap={{ scale: 0.92 }}
                >
                  <Icon className="text-lg transition group-hover:drop-shadow-glow-cyan" aria-hidden="true" />
                </Motion.a>
              ))}
            </Motion.div>
          </div>

          <Motion.div
            className="flex items-center gap-3 rounded-2xl border border-white/10 bg-night-soft/40 px-4 py-3 text-xs uppercase tracking-[0.28em] text-neon-cyan/70"
            variants={fadeInUp(0.16)}
          >
            <span className="h-1 w-12 rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
            Always designing for humans first
          </Motion.div>
        </Motion.div>
      </Motion.div>
    </Motion.section>
  );
}
