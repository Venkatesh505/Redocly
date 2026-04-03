// serviceIcons.ts
import React from "react";

/* ================= ICON TYPE ================= */

export interface IconProps {
  size?: number;
  color?: string;
}

/* ================= ICONS ================= */

export const BrainIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#7C3AED",
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="22" fill={color} />
    <path
      d="M18 24C18 20 21 18 24 18C27 18 30 20 30 24C30 28 27 30 24 30C21 30 18 28 18 24Z"
      fill="white"
    />
  </svg>
);

export const ShieldIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#0EA5E9",
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill={color} />
    <path
      d="M24 12L34 16V24C34 30 29 34 24 36C19 34 14 30 14 24V16L24 12Z"
      fill="white"
    />
  </svg>
);

export const DatabaseIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#10B981",
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <ellipse cx="24" cy="14" rx="16" ry="6" fill={color} />
    <path d="M8 14V30C8 34 15 38 24 38C33 38 40 34 40 30V14" fill="#059669" />
  </svg>
);

export const CloudIcon: React.FC<IconProps> = ({
  size = 40,
  color = "#3B82F6",
}) => (
  <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
    <rect width="48" height="48" rx="12" fill={color} />
    <path
      d="M16 28C14 28 12 26 12 24C12 22 14 20 16 20C17 16 20 14 24 14C29 14 32 18 32 22C34 22 36 24 36 26C36 28 34 30 32 30H16Z"
      fill="white"
    />
  </svg>
);
