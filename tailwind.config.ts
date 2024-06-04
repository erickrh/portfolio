import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'background-beige': '#F0F0E8',
        'custom-black': '#181818',
        'grayish-yellow': '#f0f0e8',
      },
    },
  },
  plugins: [],
};
export default config;
