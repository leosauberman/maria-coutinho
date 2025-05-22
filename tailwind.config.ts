import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'maria-gradient': 'linear-gradient(to right, #dfb78c, #f0e7d1, #e6e3e5)',
      },
      borderRadius: {
        'blob': '63% 37% 54% 46% / 55% 48% 52% 45%'
      }
    },
  },
  plugins: [],
}

export default config
