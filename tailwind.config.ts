import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#4f46e5',
          2: '#7c3aed',
          3: '#db2777'
        }
      },
      boxShadow: {
        card: '0 15px 30px rgba(0,0,0,.25)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}