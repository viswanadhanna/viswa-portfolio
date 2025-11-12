import { useEffect, useRef } from "react";
import { shouldReduceMotion } from "../animations/presets";

type ParallaxOptions = {
  maxTilt?: number;
  perspective?: number;
  scale?: number;
};

const supportsFinePointer = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return false;
  }
  return window.matchMedia("(pointer: fine)").matches;
};

export default function useParallaxTilt<T extends HTMLElement>({
  maxTilt = 5,
  perspective = 900,
  scale = 1,
}: ParallaxOptions = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!supportsFinePointer() || shouldReduceMotion()) return;

    let frame = 0;
    const limit = Math.max(2, Math.min(maxTilt, 12));

    const updateTransform = (x: number, y: number) => {
      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = Math.min(Math.max(x - cx, -rect.width), rect.width);
      const dy = Math.min(Math.max(y - cy, -rect.height), rect.height);

      const tiltX = ((dy / rect.height) * limit).toFixed(2);
      const tiltY = ((dx / rect.width) * -limit).toFixed(2);

      node.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${scale})`;
    };

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => updateTransform(clientX, clientY));
    };

    const reset = () => {
      if (frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      }
      node.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
    };

    node.style.willChange = "transform";
    node.addEventListener("pointermove", handlePointerMove);
    node.addEventListener("pointerleave", reset);

    return () => {
      node.removeEventListener("pointermove", handlePointerMove);
      node.removeEventListener("pointerleave", reset);
      reset();
    };
  }, [maxTilt, perspective, scale]);

  return ref;
}

