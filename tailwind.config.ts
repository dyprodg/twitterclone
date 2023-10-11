import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        '1800': '1800px',
        '1600': '1600px',
        '1400': '1400px',
        '1050': '1050px',
        '950': '950px',
        '800': '800px',
      },
      width: {
        '1/5': '20%',
      },
      marginLeft: {
        '1/5': '20%',
      },
      
      colors:{
        primary: "rgb(29, 155, 240)",
      }
    },
  },
  plugins: [],
}
export default config

