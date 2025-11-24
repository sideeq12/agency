/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050505", // Ultra dark almost black
        secondary: "#121212", // Dark gray for cards
        accent: "#D4AF37", // Metallic Gold
        "accent-hover": "#B5952F",
        "text-light": "#E0E0E0",
        "text-dim": "#A0A0A0",
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')",
      }
    },
  },
  plugins: [],
}

