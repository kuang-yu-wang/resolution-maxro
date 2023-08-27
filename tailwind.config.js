/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: "transparent",
      blue: {
        DEFAULT: "#2881A6",
        100: "#2eb9f2",
        200: "#2881A6",
        600: "#152e99",
        700: "#001678",
        800: "#03264c",
      },
      yellow: {
        DEFAULT: "#f2be22",
        100: "#f2be22",
        200: "#f4d26c",
      },
      red: {
        DEFAULT: "#f2163d",
        100: "#f2163d",
        600: "#a60f2b",
      },
      green: {
        DEFAULT: "#3af25c",
        100: "#3af25c",
        600: "#6bbf7b",
      },
      gray: {
        DEFAULT: "#fffdf7",
        100: "#ffffff",
        200: "#fffdf7",
        300: "#f5f4f0",
        400: "#f2ecda",
        500: "#ddd5ca",
        600: "#bfbaac",
        700: "#333333",
        800: "#363430",
      },
    },
  },
  plugins: [],
}
