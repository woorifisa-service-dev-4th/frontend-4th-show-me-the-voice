/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
        serif: ['Noto Serif KR', 'serif'],
      },
      colors: {
        main_color: 'rgb(0, 103, 172)',
        sub_color: 'rgb(32, 96, 244)',
        button_color: 'rgb(0, 120, 185)',
      },
    },
  },
  plugins: [],
};
