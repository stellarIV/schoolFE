/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        Teal: "#2F6C6D",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        gray: "#B4B4B4"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%, 100%": { transform: "translateX(5%)" },
          "50%": { transform: "translateX(-120%)" }
        }
      }
    },
    screens: {
      
      xs: "480px",
      sm: "768px",
      lg: '1075px',
      md: "1060px",
      xm: '1358px',
      xl: '1440px'
    }
  },
  
  // theme: {
  //   extend: {},
  // },
  plugins: [],
}