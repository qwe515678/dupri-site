const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        khan: "Khan",
        mitrMed: "Mitr-medium",
        mitrReg: "Mitr-regular",
        mitrsSemi: "Mitr-semi",
        plaster: "Plaster",
      },
    },
    linearBorderGradients: {
      directions: {
        // defaults to these values
        t: "to top",
        tr: "to top right",
        r: "to right",
        br: "to bottom right",
        b: "to bottom",
        bl: "to bottom left",
        l: "to left",
        tl: "to top left",
      },
      colors: {
        // defaults to {}
        red: "#f00",
        "red-purple": ["#4693d4", "#d18eed"],
        "red-blue": ["#f00", "#00f"],
        "blue-green": ["#1dff00", "#00cbff"],
        "red-green-blue": ["#f00", "#0f0", "#00f"],
        "black-white-with-stops": ["#000", "#000 45%", "#fff 55%", "#fff"],
      },
      background: {
        "gray-50": "#202020",
        "gray-900": "#252525",
        "black":"#000"
      },
      borders: {
        // defaults to these values (optional)
        1: "1px",
        2: "2px",
        4: "4px",
      },
    },
    screens: {
      xs: { max: "465px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
  },
  colors: {
    'text': '#fef9ec',
    'background': '#0f0f0f',
    'primary': '#1dff00',
    'secondary': '#fa00ff',
    'accent': '#00cbff',
   },
  plugins: [
    require("tailwindcss-border-gradient-radius"),
    nextui({
      themes:{
        dark:{
          colors:{
            primary:"#1dff00",
            secondary:'#fa00ff',
            accent:'#00cbff'
          }
        }
      }
    })
      
  ],
  darkMode: "class",
};
