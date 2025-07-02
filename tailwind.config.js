module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#91C8E4",
        secondary: "#749BC2",
        lightBg: "#F4F3EE",
        lightText: "#463F3A",
        lightAccent: "#E0AFA0",
        darkBg: "#1B263B",
        darkText: "#E0E1DD",
        darkAccent: "#778DA9",
      },
      borderRadius: {
        none: "0px",
        sm: "4px",
        DEFAULT: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        '2xl': "24px",
        '3xl': "32px",
        full: "9999px",
        button: "8px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pacifico: ["Pacifico", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
