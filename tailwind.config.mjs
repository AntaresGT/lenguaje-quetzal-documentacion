/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        quetzal: {
          'verde-primario': '#2d8a73',
          'verde-secundario': '#359c85',
          'rojo': '#c53030',
          'azul-marino': '#1a365d',
          'blanco': '#ffffff',
        },
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
      },
      animation: {
        'volar': 'volar 3s ease-in-out infinite',
        'latido': 'latido 2s ease-in-out infinite',
      },
      keyframes: {
        volar: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-10px) rotate(2deg)' },
          '50%': { transform: 'translateY(-5px) rotate(0deg)' },
          '75%': { transform: 'translateY(-15px) rotate(-2deg)' },
        },
        latido: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
