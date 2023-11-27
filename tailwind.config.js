/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
        Arima: ['IBM Plex Sans', 'sans-serif'],
      },
      boxShadow: {
        'headerBoxShadow': '0px 4px 10px 0px rgba(0, 0, 0, 0.07)',
        'btnSlider': '0px 4px 20px 0px rgba(212, 166, 0, 0.19)'
      },
      colors: {
        'color-nav': "#e87f16",
        'gradient-1': '#FFB469',
        'gradient-2': '#E57709',
        "secondary-text": "rgba(0, 0, 0, 0.64)",
        'gradient-slider-1': '#50C577',
        'gradient-slier-2': '#2DBEFC',
      },

      keyframes: {
        sliderIn: {
          '0%,': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      animation: {
        sliderIn: 'sliderIn 3s ease-in-out',
      }
    },
  },
  plugins: [],
}

