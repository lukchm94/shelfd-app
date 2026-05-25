module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../packages/**/src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  safelist: [
    { pattern: /^bg-/ },
    { pattern: /^text-/ },
    { pattern: /^grid-/ },
    { pattern: /^gap-/ },
    { pattern: /^sm:/ },
  ],
  plugins: [],
};
