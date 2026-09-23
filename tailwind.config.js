/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Design tokens — see docs/design.md.
        background: '#EEF3F7',
        surface: '#FFFFFF',
        ink: '#17202A',
        critical: '#B42318',
        'critical-tint': '#FDECEC',
        muted: '#52606D',
        hairline: '#D9E2EC',
        // Added in Phase 2: design.md specifies MONITORING as "amber/muted"
        // without a hex value. This muted ochre keeps it legible against the
        // beige/cream palette without reading as a generic bright amber.
        monitoring: '#9A6700',
        teal: '#087F8C',
        'teal-bright': '#087F8C',
        'teal-tint': '#E6F3F4',
        normal: '#176B45',
        'normal-tint': '#E8F5EE',
        unknown: '#475467',
        'unknown-tint': '#EEF0F4',
        fault: '#6941C6',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
