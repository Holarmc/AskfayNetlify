/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{html,jsx,tsx,js}"],
  theme: {
    colors: {
      pink: "#CF0095",
      lightpink: "#FFCBF0",
      black01: "#121212",
      black60: "#12121299",
      black40: "#12121266",
      gray: "#FAFAFA",
      gray900: "#111827",
      light: "#FFF",
      "slate-400": "#94A3B8",
      "slate-900": "#0F172A",
      "slate-200": "#E2E8F0",
      transparent: "transparent",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {},
      backgroundPosition: {
        "leftx-topy": "0.625rem 0.75rem",
      },
    },
  },
  plugins: [],
};
