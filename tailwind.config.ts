import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        akara: {
          brown: '#C46A3B',
          orange: '#E87722',
          cream: '#FFF8F0',
          dark: '#3B2A1E',
        },
        neutral: {
          950: '#1A1A1A',
          600: '#6B6B6B',
          200: '#E5E5E5',
          100: '#F3F4F6',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'pulse-whatsapp': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.03)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
        'pulse-whatsapp': 'pulse-whatsapp 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;