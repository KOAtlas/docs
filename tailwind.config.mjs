/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "ko-brown":  "#3d2b1f",
        "ko-dark":   "#1c1008",
        "ko-amber":  "#b87333",
        "ko-muted":  "#8a7060",
        "ko-warm":   "#5a5a6e",
        "cream-50":  "#faf8f3",
        "cream-100": "#f4f0e6",
        "cream-200": "#e8e0cc",
        "cream-300": "#d6c9a8",
      },
      fontSize: {
        xxs: ["0.625rem", { lineHeight: "1rem" }],
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
        sans: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
