/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "#d9d9d9",
      },
      colors: {
        primary: {
          DEFAULT: "#1C848F",
          50: "#E6F8FA",
          100: "#CEF2F5",
          200: "#9FE5EC",
          300: "#70D8E3",
          400: "#41CBDA",
          500: "#25AFBE",
          600: "#1C848F",
          700: "#15656D",
          800: "#0F454B",
          900: "#082629",
          950: "#051618",
        },
      },
    },
  },
  plugins: [],
}
