import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mainFont: ['mainFont', 'sans-serif'],
        secondaryFont: ['sans-serif']
      },
      colors: {
        yellow: '#FFDE59',
        white: '#FFFFFF',
        black: '#000000',
        transBlack: 'rgba(0,0,0,0.9)',
        transBlackV: 'rgb(0,0,0, 0.96)',
        transGrey: 'rgba(20,20,20,0.6)',
        transYellow: 'rgba(255, 222, 89, 0.95)',
        transYellowVN: 'rgba(255, 222, 89, 0.5)',
        transWhiteVN: 'rgba(255,255,255,0.5)'
      },
      keyframes: {
        grow: {
          '0%, 100%': { transform: 'scale(1.05)'},
          '50%' : { transform: 'scale(1)' }
        }
      },
      animation: {
        grow: 'grow 3s ease-in-out infinite'
      },
      screens: {
        '2xl': {'max': '1535px'},
        'xl': {'min': '1279px'},
        'lg': {'max': '1023px'},
        'lgo': {'min': '1023px'},
        'md': {'max': '767px'},
        'sm': {'max': '639px'},
      }
    },
  },
  plugins: [require("daisyui")],
}
export default config
