/** @type {import('tailwindcss').Config} */
module.exports = {
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
      colors: {
        'primary1': 'hsl(263, 55%, 52%)',
        'primary2': 'hsl(217, 19%, 35%)',
        'primary3': 'hsl(219, 29%, 14%)',
        'primary4': 'hsl(0, 0%, 100%)',
        'neutral1': 'hsl(0, 0%, 81%)',
        'neutral2': 'hsl(210, 46%, 95%)'
      },

      height: {
        'custom-testimonials':'572px',
        'custom-testimonial':'282px',
        'custom-testimonial-small':'261px',
      },
      width: {
        'custom-testimonials':'1110px',
        'custom-testimonial':'540px',
        'custom-testimonial-small':'256px',
      },
      gap:{
        'custom':'30px'
      },
    },
  },
  plugins: [],
}
