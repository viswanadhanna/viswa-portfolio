/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      colors: {
        night: "#05070b",
        "night-soft": "#0e141b",
        "night-card": "#141b24",
        "neon-cyan": "#27b0ff",
        "neon-cyan-soft": "rgba(39, 176, 255, 0.4)",
        "neon-green": "#00ffc8",
        "text-main": "#f5f7fb",
        "text-muted": "#8da0bd",
      },
      backgroundImage: {
        "radial-hero":
          "radial-gradient(circle at top left, #12253a 0%, #05070b 55%, #010209 100%)",
        "radial-card": "radial-gradient(circle at top, #101827 0%, #05070b 55%)",
        "radial-cyan":
          "radial-gradient(circle at 30% 0%, rgba(39, 176, 255, 0.8), rgba(5, 7, 11, 0.6))",
      },
      boxShadow: {
        "glow-cyan": "0 0 25px rgba(39, 176, 255, 0.35)",
        "glow-strong": "0 0 45px rgba(39, 176, 255, 0.6)",
        "glass":
          "0 18px 44px rgba(2, 9, 20, 0.45), inset 0 0 1px rgba(255, 255, 255, 0.08)",
      },
      dropShadow: {
        "glow-cyan": "0 0 12px rgba(39, 176, 255, 0.5)",
      },
      blur: {
        18: "18px",
      },
      transitionTimingFunction: {
        "ease-out-custom": "cubic-bezier(.16, 1, .3, 1)",
      },
      transitionDuration: {
        240: "240ms",
        420: "420ms",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 3.2s ease-in-out infinite",
        "float-y": "float-y 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
