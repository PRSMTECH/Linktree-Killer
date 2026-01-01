import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // PRSMTECH Brand Colors
        prsmtech: {
          primary: '#6366f1',
          secondary: '#8b5cf6',
          accent: '#a855f7',
          dark: '#1e1b4b',
          light: '#e0e7ff',
        },
        // Social Platform Colors
        twitch: '#9146FF',
        youtube: '#FF0000',
        tiktok: '#000000',
        instagram: '#E4405F',
        twitter: '#000000',
        threads: '#000000',
        reddit: '#FF4500',
      },
      animation: {
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
}

export default config
