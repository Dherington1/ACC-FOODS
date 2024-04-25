import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#16a34a', 
        'custom-burgundy' : '#FE5733', 
        'custom-white' : '#ffffff',
        'custom-black' : '#000000',
        'custom-purple' : '#342E48',
      },
      boxShadow: {
        'custom-dark': '0 10px 15px -3px rgba(0, 0, 0, 0.9), 0 4px 6px -4px rgba(0, 0, 0, 0.9)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("daisyui"), 
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: ['winter'],
  },
};
export default config;
