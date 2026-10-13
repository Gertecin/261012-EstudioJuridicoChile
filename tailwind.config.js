/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        petroleo: '#1E293B',
        pizarra: '#475569',
        dorado: '#C5A880',
        'dorado-hover': '#B5966C',
        'blanco-roto': '#F8FAFC',
        grafito: '#0F172A',
        borde: '#E2E8F0'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        'site': '1180px'
      }
    }
  },
  plugins: []
}
