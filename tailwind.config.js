/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#020617',  // Deepest background
          900: '#0F172B',  // Primary dark
          800: '#1e293b',  // Card background dark
          700: '#334155',  // Borders dark
          600: '#475569',
        },
        slate: {
          50: '#F8FAFC',   // Lightest background
          100: '#F1F5F9',  // Card background light
          200: '#E2E8F0',  // Borders light
          600: '#475569',  // Secondary text
          900: '#0F172B',  // Primary text
        },
        primary: {
          DEFAULT: '#3B82F6', // Tech Blue
          dark: '#60A5FA',
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.15)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}
