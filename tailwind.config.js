module.exports = {
  purge: [],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '968px',
      // => @media (min-width: 768px) { ... }

      'lg': '1224px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1480px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1736px',
      // => @media (min-width: 1536px) { ... }
    },
      extend: {
        boxShadow: {
          rainbow: '0 0 0 10px #ff0000,0 0 0 20px #ff7700,0 0 0 30px #FFDD00,0 0 0 40px #00FF00,0 0 0 50px #0000FF,0 0 0 60px #C77DF3,0 0 0 70px #8A2BE2',
        },
        fontFamily: {
          serif: ['Pacifico', 'sans-serif'],
          sans: ['Dosis', 'sans-serif'],
        },
        colors: {
          myred: {
            base: "#E53835",
            light: "#f5706e",
            dark: "#990200"

          },
          blue: {
            '100': '#72c1df',
            '200': '#5bb7d9',
            '300': '#43add4',
            '400': '#2ca2ce',
            '500': '#1498c9',
            '600': '#1289b5',
            '700': '#107aa1',
            '800': '#0e6a8d',
            '900': '#0c5b79'
          },
          gold: {
            light: '#ddbf5f',
            base: '#d4af37',
            dark: '#aa8c2c'
          }
        }
      },
    },
    variants: {},
    plugins: [],
  }
