import React from "react";

export default function Skeleton({
  className = "",
  rounded = "rounded-xl",
}) {
  return (
    <div className={`relative overflow-hidden bg-white/5 ${rounded} ${className}`}>
      <div
        className="pointer-events-none absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{
          animation: "skeleton-shimmer 1.6s infinite",
        }}
        aria-hidden="true"
      />
      <style>{`
        @keyframes skeleton-shimmer {
          0% { transform: translateX(0%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}


