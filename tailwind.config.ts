import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';
import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    container: { center: true, padding: '2rem' },
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',

        primary: { DEFAULT: '#0B5FFF', light: '#66A3FF', dark: '#0045C3' }, // 500 300 700
        secondary: { DEFAULT: '#FF6B6B', light: '#FF9A9A', dark: '#C23A3A' },
        accent: { DEFAULT: '#14C9C9', light: '#5FE3E3', dark: '#0B8F8F' },
        highlight: { DEFAULT: '#FFD166', light: '#FFE29F', dark: '#E6B23B' },

        info: { DEFAULT: '#3ABFF8', light: '#86D9FA', dark: '#1191D0' },
        success: { DEFAULT: '#10B981', light: '#34D399', dark: '#059669' },
        warning: { DEFAULT: '#FBBF24', light: '#FCD868', dark: '#C98A12' },
        danger: { DEFAULT: '#EF4444', light: '#F87171', dark: '#B91C1C' },

        neutral: {
          ...colors.zinc,
        },
      },
      gridTemplateColumns: {
        // dynamic cols-X utility
        auto: 'repeat(var(--cols), minmax(0, 1fr))',
      },
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        mono: ['var(--font-mono)', ...defaultTheme.fontFamily.mono],
      },
      keyframes: {
        microScale: {
          '0%': { transform: 'scale(.95)' },
          '100%': { transform: 'scale(1.05)' },
        },
        microShake: {
          '0%,100%': { rotate: '-1.5deg' },
          '50%': { rotate: '1.5deg' },
        },
        fade: { '0%': { opacity: 1 }, '100%': { opacity: 0 } },
        shimmer: { to: { backgroundPosition: '-200% 0' } },
      },
      animation: {
        microScale: 'microScale .1s ease-in forwards',
        microShake: 'microShake .3s infinite',
        fade: 'fade .9s infinite alternate',
        shimmer: 'shimmer 2.5s ease-out infinite alternate',
      },
      boxShadow: { 'blue-inset': 'inset 0 2px 32px rgba(29,78,216,.5)' },
      textShadow: { DEFAULT: '0 1px 2px rgb(0 0 0 / .2)' },
    },
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    require('./plugins/animationDelay'),
  ],
} satisfies Config;
