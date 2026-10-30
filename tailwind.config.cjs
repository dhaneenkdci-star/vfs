// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0a0f2c",
        royal: "#1e3a8a",
        accent: "#3b82f6"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
