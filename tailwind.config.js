/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        "large":"83px",
        "medium":"57px",
        "medium-x":"50px",
        "small":"20px"
      },
      lineHeight:{
        "large":"84px",
        "medium":"58px",
        "small":"28px"
      }
    },
  },
  plugins: [],
}