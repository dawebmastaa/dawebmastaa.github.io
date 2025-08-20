/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    "./node_modules/flowbite/**/*.js",
  ],
	theme: {
    extend: {
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
        ,'heliotrope': {
          '50': '#f8edfd',
          '100': '#efd6fb',
          '200': '#e2b1f7',
          '300': '#d78ef3',
          '400': '#ce6af0',
          '500': '#c746ed',
          '600': '#a931ca',
          '700': '#83249d',
          '800': '#5b166e',
          '900': '#340940',
          '950': '#200429',
        }
      }
    },
  },
	plugins: [
    require('flowbite/plugin')
  ],
}
