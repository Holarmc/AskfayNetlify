/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{html,jsx,tsx,js}"],
  theme: {
    // colors: {
    //   pink: "#CF0095",
    //   pink200: "#AB136F",
    //   lightpink: "#FFCBF0",
    //   black01: "#121212",
    //   black60: "#12121299",
    //   black40: "#12121266",
    //   gray: "#FAFAFA",
    //   gray900: "#111827",
    //   light: "#FFF",
    //   "slate-400": "#94A3B8",
    //   "slate-900": "#0F172A",
    //   "slate-200": "#E2E8F0",
    //   transparent: "transparent",
    // },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        pink: {
          100: "#FFCBF0",
          200: "#CF0095",
          300: "#AB136F",
        },
        black: {
          100: "#121212",
          400: "#12121266",
          600: "#12121299",
        },
        gray: {
          100: "#FAFAFA",
          900: "#111827",
        },
        light: "#FFF",
      },
    },
  },
  plugins: [],
};
