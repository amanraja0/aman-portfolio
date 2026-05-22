import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['index.html', 'src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bricolage Grotesque', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        border: 'oklch(var(--border))',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: { DEFAULT: 'oklch(var(--primary) / <alpha-value>)', foreground: 'oklch(var(--primary-foreground))' },
        muted: { DEFAULT: 'oklch(var(--muted) / <alpha-value>)', foreground: 'oklch(var(--muted-foreground) / <alpha-value>)' },
        accent: { DEFAULT: 'oklch(var(--accent) / <alpha-value>)', foreground: 'oklch(var(--accent-foreground))' },
        card: { DEFAULT: 'oklch(var(--card))', foreground: 'oklch(var(--card-foreground))' },
      },
      borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' },
      boxShadow: { glow: '0 0 40px oklch(0.72 0.155 200 / 0.20)' },
      keyframes: {
        'fade-up': { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        'fade-in': { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
      },
    },
  },
  plugins: [animate],
};
