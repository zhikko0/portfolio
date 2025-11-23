/** @type {import {"tailwindcss"}.config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'brand-softer': '#f1f1f1',
        'brand-subtle': '#d1d1d1',
        'fg-brand-strong': '#111111',
      }
    },
  },
  plugins: [],
}
