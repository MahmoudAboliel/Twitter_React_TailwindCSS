/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      
      container: {
        center: true,
      },
      colors: {
        "primary": "#03A9F4",
        "primary-hover": "#039ce1",
        "bgl": "#f9f9f9",    // back ground light
        "bgd": "#15202B",    // back ground dark
        "bgs": "#e5e7eb",    // back ground secondary
        "bgds": "#162D40",   // back ground dark secondary
        "tpl": "#222",       // text primary light
        "tsl": "#5f5d5d",    // text secondary light
        "tpd": "#FFF",       // text primary dark
        "tsd": "#9e9e9e",    // text secodary dark
        "bc": "#64748b",     // border color
        "hl": "#d3d5d9",     // hover light
        "hd": "#111d29",     // hover dark
        "hds": "#17334b",    // hover dark secondary 
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
    },
  },
  plugins: [],
}