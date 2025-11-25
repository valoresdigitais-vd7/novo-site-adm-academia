/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff0044', // vermelho forte - tom de urgência (Black Friday)
          light: '#ff3366',   // vermelho claro para hover e destaque
          dark: '#cc0036',    // vermelho escuro para fundos e gradientes
        },
        secondary: {
          DEFAULT: '#ffd700', // amarelo ouro - contraste e destaque promocional
          light: '#ffeb7a',   // amarelo claro para elementos de luz
          dark: '#b38f00',    // dourado escuro - elegância e valor premium
        },
        neutral: {
          100: '#f8fafc', // slate-50 - Fundo geral
          200: '#f1f5f9', // slate-100 - Fundo de seções alternadas
          300: '#e2e8f0', // slate-200 - Bordas suaves
          400: '#cbd5e1', // slate-300 - Bordas
          500: '#94a3b8', // slate-400 - Texto desabilitado
          600: '#64748b', // slate-500 - Texto secundário
          700: '#475569', // slate-600 - Texto
          800: '#1a1a1a', // fundo escuro - seção black friday e footer
          900: '#0d0d0d', // preto total - hero e CTAs intensos
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}