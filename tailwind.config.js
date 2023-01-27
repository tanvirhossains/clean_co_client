/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],

  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    my: {
      primary: "#176F6B",
      secondary: "#FFC000",
      accent: "#FFEDD5",
      neutral: "#F3F4F6",
      "base-100": "#ffffff",
      info: "#98A8DD",
      success: "#1BBB70",
      warning: "#DF7E07",
      error: "#FA5C5C",
    },
    extend: {},
  }
}