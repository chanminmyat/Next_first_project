import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bg_img: "url('../public/assets/img/hero/pos-illustration-header.png')",
      },
      colors: {
        "light-blue": "#29ACE3",
        "dark-blue": "#2b376e",
      },
    },
  },
  plugins: [],
};
export default config;
