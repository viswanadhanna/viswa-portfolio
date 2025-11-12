import React, { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "framer-motion";
import { fadeInUp, scaleIn, staggerContainer, springHover, shouldReduceMotion } from "../animations/presets";
import Skeleton from "./Skeleton";

export default function Resume() {
  const [loaded, setLoaded] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const rm = useMemo(() => shouldReduceMotion(), []);

  const onDownload = (e) => {
    if (rm) return; // no micro interaction on reduced motion
    e.preventDefault();
    if (downloading) return;
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      // trigger actual download
      const a = document.createElement("a");
      a.href = "/Resume.pdf";
      a.download = "Resume.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    }, 1200);
  };

  // Fallback: if the iframe onLoad doesn't fire (blocked PDF or slow load),
  // reveal the frame after a short delay so the section doesn't appear blank.
  useEffect(() => {
    const t = setTimeout(() => {
      if (!loaded) setLoaded(true);
    }, 4500);
    return () => clearTimeout(t);
  }, [loaded]);

  return (
    <Motion.section
      className="section resume-section"
      variants={staggerContainer(0.08)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
    >
      <Motion.div className="section-header" variants={fadeInUp()}>
        <h2 className="text-3xl font-semibold text-text-main drop-shadow-glow-cyan sm:text-4xl">Resume</h2>
        <p className="mt-2 text-text-muted/90">Quick summary below and full resume preview with download option.</p>
      </Motion.div>

      {/* Two-column layout on large screens */}
      <div className="mx-auto max-w-[1150px] space-y-6">
        {/* 1) SUMMARY CARD */}
        <Motion.div
          className="resume-summary-card border border-white/10 bg-night-soft/70 rounded-2xl p-6 shadow-glow-cyan/30"
          variants={fadeInUp(0.06)}
        >
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-text-main">Viswanadh V Anna</h3>
            <p className="text-sm text-text-muted">B.Tech Artificial Intelligence | AI & Full-Stack Developer</p>
          </div>

          <div className="grid gap-5">
            <div>
              <h4 className="mb-2 text-neon-cyan">Education</h4>
              <ul className="space-y-1 text-sm leading-relaxed text-text-muted/90">
                <li>
                  <span className="font-semibold text-text-main">Amrita Vishwa Vidyapeetham, Coimbatore</span> — B.Tech
                  in Artificial Intelligence (2022–2026), GPA 7.43/10.
                </li>
                <li>
                  <span className="font-semibold text-text-main">Narayana Junior College, Tirupati</span> — Higher
                  Secondary, 95.7%.
                </li>
                <li>
                  <span className="font-semibold text-text-main">Narayana E.M. High School, Tirupati</span> — Secondary
                  Education, 95.8%.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-neon-cyan">Projects & Experience</h4>
              <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-text-muted/90">
                <li>Cardiovascular disease detection from PCG using CNN+LSTM and SVM.</li>
                <li>Multi-speaker speech separation with SuperFormer & SpaRSep using spatial cues.</li>
                <li>RealEstate-360 – AI-enabled real estate platform using React, Node and AWS Textract.</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 text-neon-cyan">Key Skills</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Machine Learning", "Deep Learning", "React.js", "Node.js", "AWS"].map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-neon-cyan/30 bg-night-soft/70 px-3 py-1 text-xs font-medium text-neon-cyan/90 shadow-glow-cyan/30"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Motion.div>

        {/* 2) FULL PDF PREVIEW */}
        <Motion.div className="resume-viewer flex justify-center" variants={scaleIn}>
          {!loaded && (
            <div className="space-y-3">
              <Skeleton className="h-[20px] w-1/3 border border-white/10" />
              <Skeleton className="h-[900px] w-full max-w-[1100px] mx-auto border border-white/10" rounded="rounded-[14px]" />
            </div>
          )}
          <iframe
            src="/Resume.pdf"
            title="Viswanadh V Anna Resume"
            className={`${loaded ? "block" : "hidden"} w-full max-w-[1100px] h-[900px] mx-auto rounded-[14px] border border-white/10`}
            loading="lazy"
            onLoad={() => setLoaded(true)}
          />
        </Motion.div>
      </div>

      {/* 3) DOWNLOAD BUTTON AT BOTTOM */}
      <Motion.a
        className={`neon-button group ${downloading ? "opacity-80 cursor-wait" : ""}`}
        href="/Resume.pdf"
        download
        onClick={onDownload}
        whileHover={springHover}
        whileTap={{ scale: 0.96 }}
      >
        {downloading ? (
          <>
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-neon-cyan" />
            Preparing...
          </>
        ) : (
          <>
            <span className="relative z-10">Download Full Resume</span>
            <span className="pointer-events-none absolute inset-0 -z-0 translate-y-full bg-white/20 transition duration-300 group-active:translate-y-0" />
          </>
        )}
      </Motion.a>
    </Motion.section>
  );
}
