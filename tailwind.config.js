export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        yellow: { brand: '#F5C300', light: '#FFD700' },
        dark: { base: '#0A0A0A', card: '#111111', border: '#1E1E1E' }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  },
  plugins: []
}
