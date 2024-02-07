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
      light: "#FFF",
      transparent: "transparent",
      gray900: "#111827",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      // backgroundImage: {
      //   spinner:
      //     "ulr('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23000' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M20 4v5h-.582m0 0a8.001 8.001 0 00-15.356 2m15.356-2H15M4 20v-5h.581m0 0a8.003 8.003 0 0015.357-2M4.581 15H9' /%3E%3C/svg%3E')",
      //   search:
      //     "url('data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='%23999' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' /%3E%3C/svg%3E')",
      // },
      backgroundPosition: {
        "leftx-topy": "0.625rem 0.75rem",
      },
    },
  },
  plugins: [],
};
