import React from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, staggerContainer, springHover } from "../animations/presets";
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
  const icons = [
    FaHtml5, FaCss3Alt, SiJavascript, FaReact, SiMongodb, FaDatabase,
    FaPython, FaJava, SiTensorflow, SiOpencv, SiC, SiCplusplus, FaGitAlt,
  ];

  // absolute positions for bubbles (top/left in %)
  const positions = [
    [12, 8], [10, 28], [18, 48], [8, 70], [26, 88],
    [46, 12], [38, 32], [48, 52], [40, 74],
    [68, 20], [62, 42], [64, 64], [70, 84],
  ];

  return (
    <Motion.section
      id="skills"
      className="relative mx-auto max-w-6xl text-center px-6 py-20 md:px-16"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
    >
      <Motion.h2 className="text-3xl font-semibold text-text-main drop-shadow-glow-cyan sm:text-4xl" variants={fadeInUp()}>
        My Skills
      </Motion.h2>
      <Motion.p className="mt-2 text-base text-text-muted/90" variants={fadeInUp(0.06)}>
        My technical expertise blended with creativity — explore my core competencies below.
      </Motion.p>

      {/* Floating Skills Icons Section */}
      <div
        className="relative mx-auto mt-10 h-[320px] w-full max-w-[950px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#162436] to-night shadow-glow-cyan"
      >
        {icons.map((Icon, i) => {
          const [top, left] = positions[i] || [Math.random() * 80, Math.random() * 80];
          return (
            <Motion.div
              key={i}
              className="absolute flex h-[78px] w-[78px] items-center justify-center rounded-full text-2xl text-neon-cyan border border-neon-cyan/60"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                background: "radial-gradient(circle at 30% 30%, #0d1a26, #000)",
              }}
              whileHover={springHover}
            >
              <span className="absolute -z-10 h-[90px] w-[90px] rounded-full blur-xl" style={{ boxShadow: "0 0 40px rgba(0, 245, 255, 0.35)" }} aria-hidden="true" />
              <span className="absolute -z-10 h-[110px] w-[110px] rounded-full blur-2xl" style={{ boxShadow: "0 0 55px rgba(0, 245, 255, 0.25)" }} aria-hidden="true" />
              <Icon />
            </Motion.div>
          );
        })}
      </div>

      {/* Categorized Skills Section */}
      <Motion.div
        className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        variants={staggerContainer(0.06)}
      >
        {[
          {
            title: "Programming Languages",
            items: ["Python", "C", "C++", "Java"],
          },
          {
            title: "Web Technologies",
            items: ["HTML", "CSS", "JavaScript", "React"],
          },
          {
            title: "Databases & Tools",
            items: ["MySQL", "MongoDB", "Git"],
          },
          {
            title: "Frameworks & Libraries",
            items: ["TensorFlow", "OpenCV"],
          },
          {
            title: "Core Concepts",
            items: [
              "Data Structures & Algorithms",
              "Machine Learning",
              "Deep Learning",
              "YOLO Object Detection",
              "Explainable AI (XAI)",
            ],
          },
          {
            title: "Soft Skills",
            items: ["Teamwork", "Problem Solving", "Creativity", "Adaptability", "Communication"],
          },
        ].map((card, idx) => (
          <Motion.div
            key={card.title}
            className="rounded-xl border border-white/10 bg-[#10141c] p-6 text-left shadow-[0_0_20px_rgba(0,255,255,0.05)] transition hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]"
            variants={fadeInUp(idx * 0.05)}
          >
            <h3 className="mb-3 text-lg font-semibold text-neon-cyan">{card.title}</h3>
            <ul className="list-none space-y-2 text-[0.95rem] text-[#d3d3d3]">
              {card.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Motion.div>
        ))}
      </Motion.div>
    </Motion.section>
  );
}