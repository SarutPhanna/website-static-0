/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        phone: "200px",
        tablet: "640px",
        laptop: "1024px",
        desktop: "1280px",
      },
    },
    fontFamily: {
      formatFont: ["Noto Sans Thai, system-ui"],
      logoFont: ["Permanent Marker, system-ui"],
    },
  },
  plugins: [require("daisyui")],
};
