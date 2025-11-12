import React, { Suspense, lazy, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import Navbar from "./components/Navbar";
import RouteTransition from "./components/RouteTransition";
import { shouldReduceMotion } from "./animations/presets";

const Hero = lazy(() => import("./components/Hero"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Certificates = lazy(() => import("./components/Certificates"));
const Resume = lazy(() => import("./components/Resume"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));

const isLowEndDevice = () => {
  if (typeof navigator === "undefined") return false;
  const cores = navigator.hardwareConcurrency || 4;
  const memory = navigator.deviceMemory || 4;
  return cores <= 4 && memory <= 4;
};

function App() {
  const location = useLocation();
  const lenisRef = useRef(null);

  useEffect(() => {
    if (shouldReduceMotion() || isLowEndDevice()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    lenisRef.current = lenis;

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true, lock: true });
    } else {
      window.scrollTo({ top: 0, behavior: shouldReduceMotion() ? "auto" : "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="page-container">
        <AnimatePresence mode="wait">
          <Suspense
            fallback={
              <div className="flex min-h-[60vh] items-center justify-center text-sm text-text-muted">
                Preparing experience…
              </div>
            }
          >
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <RouteTransition>
                    <Hero />
                  </RouteTransition>
                }
              />
              <Route
                path="/projects"
                element={
                  <RouteTransition>
                    <Projects />
                  </RouteTransition>
                }
              />
              <Route
                path="/skills"
                element={
                  <RouteTransition>
                    <Skills />
                  </RouteTransition>
                }
              />
              <Route
                path="/certificates"
                element={
                  <RouteTransition>
                    <Certificates />
                  </RouteTransition>
                }
              />
              <Route
                path="/resume"
                element={
                  <RouteTransition>
                    <Resume />
                  </RouteTransition>
                }
              />
              <Route
                path="/about"
                element={
                  <RouteTransition>
                    <About />
                  </RouteTransition>
                }
              />
              <Route
                path="/contact"
                element={
                  <RouteTransition>
                    <Contact />
                  </RouteTransition>
                }
              />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
