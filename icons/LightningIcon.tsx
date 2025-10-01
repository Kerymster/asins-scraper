import React from "react";

interface LightningIconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  strokeWidth?: number;
  fill?: string;
  stroke?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
  xl: "w-8 h-8",
};

export default function LightningIcon({
  className = "",
  size = "md",
  strokeWidth = 2,
  fill = "none",
  stroke = "currentColor",
}: LightningIconProps) {
  const sizeClass = sizeClasses[size];

  return (
    <svg
      className={`${sizeClass} ${className}`}
      fill={fill}
      stroke={stroke}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}
