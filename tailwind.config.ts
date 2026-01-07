import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        surface: 'var(--color-surface)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-tertiary': 'var(--color-text-tertiary)',
      },
      fontFamily: {
        mono: 'var(--font-mono)',
      },
      spacing: {
        '128': 'var(--spacing-128)',
      },
      maxWidth: {
        '8xl': 'var(--max-width-8xl)',
      },
      animation: {
        'fade-in': 'var(--animate-fade-in)',
        'slide-up': 'var(--animate-slide-up)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
