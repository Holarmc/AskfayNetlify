/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{html,jsx,tsx,js}"],
  theme: {
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
