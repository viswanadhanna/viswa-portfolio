import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { fadeIn, springHover, staggerContainer } from "../animations/presets";
import { shouldReduceMotion } from "../animations/presets";

const links = [
  { path: "/", label: "Home" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/certificates", label: "Certificates" },
  { path: "/resume", label: "Resume" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const close = () => setIsOpen(false);
    window.addEventListener("hashchange", close);
    window.addEventListener("resize", close);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("resize", close);
    };
  }, [isOpen]);

  const handleNavLinkClick = () => {
    if (!shouldReduceMotion()) {
      requestAnimationFrame(() => setIsOpen(false));
    } else {
      setIsOpen(false);
    }
  };

  return (
    <Motion.nav
      variants={fadeIn}
      initial="hidden"
      animate="show"
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-[var(--ease-out)] ${
        isScrolled || isOpen ? "backdrop-glass bg-night/70" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 md:px-8">
        <Motion.div
          className="flex cursor-pointer select-none flex-col leading-tight"
          whileHover={springHover}
        >
          <span className="text-sm uppercase tracking-[0.28em] text-neon-cyan/70">
            Portfolio
          </span>
          <span className="text-lg font-semibold text-neon-cyan drop-shadow-glow-cyan">
            AV Anna Viswanadh
          </span>
          <span className="text-xs text-text-muted">AI · ML Engineer</span>
        </Motion.div>

        <div className="hidden items-center gap-8 md:flex">
          <Motion.ul
            variants={staggerContainer(0.06)}
            initial="hidden"
            animate="show"
            className="flex items-center gap-6 text-sm font-medium text-text-muted"
          >
            {links.map(({ path, label }) => (
              <Motion.li key={path} variants={fadeIn}>
                <NavLink
                  to={path}
                  end={path === "/"}
                  className={({ isActive }) =>
                    `relative inline-flex items-center justify-center px-1 transition-all duration-300 ease-[var(--ease-out)] ${
                      isActive
                        ? "text-neon-cyan drop-shadow-glow-cyan"
                        : "hover:text-neon-cyan/80"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className="px-0.5">{label}</span>
                      <Motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-2 left-0 h-[2px] w-full overflow-hidden rounded-full bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
                        animate={{
                          opacity: isActive ? 1 : 0,
                          scaleX: isActive ? 1 : 0.2,
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />
                    </>
                  )}
                </NavLink>
              </Motion.li>
            ))}
          </Motion.ul>
          <Motion.a
            href="/resume"
            className="hidden rounded-full border border-neon-cyan/70 px-5 py-2 text-sm font-semibold text-text-main shadow-glow-cyan transition duration-300 hover:bg-neon-cyan/10 hover:text-neon-cyan md:inline-flex"
            whileHover={springHover}
            whileFocus={springHover}
          >
            View Resume
          </Motion.a>
        </div>

        <Motion.button
          type="button"
          whileTap={{ scale: 0.94 }}
          whileHover={springHover}
          className="relative flex h-11 w-11 items-center justify-center rounded-full border border-neon-cyan/40 bg-night-soft/70 text-neon-cyan shadow-glow-cyan md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
        >
          <span className="sr-only">Toggle navigation</span>
          <span
            className={`h-4 w-4 transition-transform duration-300 ease-[var(--ease-out)] ${
              isOpen ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            {isOpen ? "✕" : "☰"}
          </span>
        </Motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            id="mobile-nav"
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 24px)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0 round 24px)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0 round 24px)" }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="mx-6 mb-4 origin-top rounded-3xl border border-white/10 bg-night/95 p-6 shadow-glow-cyan md:hidden"
          >
            <Motion.ul
              variants={staggerContainer(0.08)}
              initial="hidden"
              animate="show"
              className="flex flex-col gap-4 text-base text-text-main"
            >
              {links.map(({ path, label }) => (
                <Motion.li key={path} variants={fadeIn}>
                  <NavLink
                    to={path}
                    end={path === "/"}
                    onClick={handleNavLinkClick}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-2xl border border-transparent px-4 py-3 transition duration-300 ease-[var(--ease-out)] ${
                        isActive
                          ? "border-neon-cyan/60 bg-neon-cyan/10 text-neon-cyan"
                          : "hover:border-neon-cyan/40 hover:bg-neon-cyan/5"
                      }`
                    }
                  >
                    <span>{label}</span>
                    <span className="text-xs text-text-muted/70">↗</span>
                  </NavLink>
                </Motion.li>
              ))}
            </Motion.ul>
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.nav>
  );
}
