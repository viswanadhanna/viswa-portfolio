import React from "react";
import { motion as Motion } from "framer-motion";
import { routeTransition } from "../animations/presets";

export default function RouteTransition({ children, className = "" }) {
  return (
    <Motion.main
      className={`relative isolate min-h-screen ${className}`}
      variants={routeTransition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {children}
    </Motion.main>
  );
}

