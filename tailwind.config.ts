import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './sections/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'maria-gradient': 'linear-gradient(to right, #dfb78c, #f0e7d1, #e6e3e5)',
      },
    },
  },
  plugins: [],
}

export default config
