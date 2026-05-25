module.exports = {
  content: [
    './apps/web/app/**/*.{js,ts,jsx,tsx}',
    './apps/web/src/**/*.{js,ts,jsx,tsx}',
    './packages/**/src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  safelist: [
    { pattern: /^bg-/ },
    { pattern: /^text-/ },
    { pattern: /^grid-/ },
    { pattern: /^gap-/ }
  ],
  plugins: []
}
