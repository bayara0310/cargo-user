/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '6rem',
    },
    fontSize: {
      xxs: '0.5rem',
      xs: '0.6rem',
      sm: '0.8rem',
      ms: '0.9rem',
      lg: '1rem',
      lx: '1.15rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      'Nunito':'Nunito'
    },
    screens: {
      'xs': '100px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1380px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    backgroundImage: {
      'uilchilgee': "url('/img/uilchilgee.png')",
      'cargobg': "url('/background/bg.jfif')",
      'eart': "url('/background/eart.jpg')",
      'earth': "url('/background/earth.jpg')",
      'earth1': "url('/background/earth1.jpg')",
    },
    extend: {},

  },
  plugins: [],
}