/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        fustat: ['Fustat', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        brand: { DEFAULT: '#0084FF', hover: '#0074E0', active: '#0066CC' },
        ink: '#000000',
        'ink-soft': '#171717',
        muted: '#6B7280',
        aura: { sky: '#60B1FF', electric: '#319AFF' },
        accent: {
          emerald: '#10B981',
          'emerald-dark': '#059669',
          purple: '#9333EA',
          'purple-dark': '#7E22CE',
          rose: '#F43F5E',
          amber: '#FACC15',
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: '#0084FF',
          foreground: '#FFFFFF'
        },
        secondary: {
          DEFAULT: '#F3F4F6',
          foreground: '#171717'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: '#0084FF',
      },
      boxShadow: {
        'glass-inset': 'inset 0 2.5px 4px 0 rgba(255,255,255,0.8)',
        'brand-btn': 'inset 0 4px 4px 0 rgba(255,255,255,.35), 0 10px 25px -5px rgba(0,132,255,.25)',
        'card-blue': '0 12px 32px -4px rgba(0,132,255,.12)',
        'card-emerald': '0 12px 32px -4px rgba(16,185,129,.12)',
        'card-purple': '0 12px 32px -4px rgba(147,51,234,.12)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0) translateX(0)' },
          '50%': { transform: 'translateY(-8px) translateX(2px)' }
        },
        marqueeLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        marqueeRight: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' }
        },
        spinGlow: {
          '0%': { transform: 'translate(-50%,-50%) rotate(0deg)' },
          '100%': { transform: 'translate(-50%,-50%) rotate(360deg)' }
        },
        auroraDrift: {
          '0%': { transform: 'translate(0,0) scale(1)' },
          '50%': { transform: 'translate(20px,30px) scale(1.05)' },
          '100%': { transform: 'translate(-15px,15px) scale(.95)' }
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        floatSlow: 'floatY 5s ease-in-out infinite',
        floatSlower: 'floatY 5.5s ease-in-out infinite',
        marqueeLeft: 'marqueeLeft 40s linear infinite',
        marqueeRight: 'marqueeRight 40s linear infinite',
        spinGlow: 'spinGlow 4s linear infinite',
        auroraDrift: 'auroraDrift 20s ease infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};