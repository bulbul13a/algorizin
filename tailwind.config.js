module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter:"'Inter', sans-serif",
      },
      boxShadow: {
        menu: "0px 5px 0px 0px #D9DBE0"
      }
    },
    screens: {
      'mobile': '390px',
      'tablet': '800px',
      'desktop': '1440px',
    },
  },
  plugins: [],
}
