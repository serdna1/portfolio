/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['var(--font-dancing-script)'],
        'roboto-mono': ['var(--font-roboto-mono)'],
      },
    },
  },
}
