/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
      },
      colors: {
        // DarkTech Gradient Theme Colors
        background: {
          primary: '#0B081E',
          secondary: '#161232',
          card: '#1A143C',
          input: '#100D2B',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#C8C0E6',
          onAccent: '#FFFFFF',
          placeholder: '#A098C0',
        },
        accent: {
          primary: '#7F56D9',
          secondary: '#3E63DD',
        },
        semantic: {
          success: '#12B76A',
          info: '#3E63DD',
          warning: '#F79009',
          cta: '#7F56D9',
        },
        border: {
          primary: '#4A4566',
          highlight: '#3E63DD',
        },
        // Legacy colors for compatibility
        primary: '#7F56D9',
        secondary: '#161232',
        destructive: '#EF4444',
        muted: '#161232',
        accent: '#3E63DD',
        popover: '#1A143C',
        card: '#1A143C',
      },
      backgroundImage: {
        'highlight-gradient': 'linear-gradient(90deg, #3E63DD 0%, #7F56D9 100%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '16px',
        'pill': '999px',
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'glow-highlight': '0 0 20px rgba(62, 99, 221, 0.4)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            filter: 'drop-shadow(0 0 8px rgba(127, 86, 217, 0.5))',
          },
          '50%': {
            opacity: '0.9',
            filter: 'drop-shadow(0 0 16px rgba(127, 86, 217, 0.8))',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px) translateX(0px)',
            opacity: '0.3',
          },
          '25%': {
            transform: 'translateY(-10px) translateX(5px)',
            opacity: '0.6',
          },
          '50%': {
            transform: 'translateY(-5px) translateX(-3px)',
            opacity: '0.4',
          },
          '75%': {
            transform: 'translateY(-15px) translateX(2px)',
            opacity: '0.7',
          },
        },
        'slide-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'slide-left-mobile': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'slide-left': 'slide-left 20s linear infinite',
        'slide-left-mobile': 'slide-left-mobile 15s linear infinite',
      },
    },
  },
  plugins: [],
}
