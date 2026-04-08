/**
 * Design System Colors
 */
export const COLORS = {
  primary: "#0D9488", // Teal - growth, technology, optimism
  secondary: "#1E293B", // Dark Navy - professional
  accent: "#F59E0B", // Amber - highlights
  lightBg: "#F0FDFA", // Light Teal background
  darkBg: "#0F172A", // Dark mode background
} as const;

export type ColorKey = keyof typeof COLORS;
