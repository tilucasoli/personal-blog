const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./_includes/**/*.html", "./_layouts/**/*.html", "./blog/*.html", "./_posts/*.html", "./*.html"],
  darkMode: false,
  theme: {
    extend: {
      height: {
        '1': '2px',
      },
      fontFamily: {
        manrope: ["Manrope", ...defaultTheme.fontFamily.sans],
        syne: ["Syne", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "30": "30px",
        "18": "18px",
      },
    },
    screens: {
      sm: "640px",
      md: "700px",
      lg: "700px",
      xl: "700px",
    },
  },
  variants: {
    extend: {
      grayscale: ["hover", "focus"],
      margin: ["last"],
    },
    container: [],
  },
  plugins: [require("@tailwindcss/typography")],
};
