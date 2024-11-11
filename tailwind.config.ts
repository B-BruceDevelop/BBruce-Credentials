import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontSize: {
      'xs': 'calc(4px + 0.6vw)', // 15.52px en 1920px
        'sm': 'calc(6px + 0.9vw)', // 23.28px en 1920px
        'base': 'calc(6px + 1.2vw)', // 29.04px en 1920px
        'lg': 'calc(8px + 1.5vw)', // 36.80px en 1920px
        'xl': 'calc(8px + 1.8vw)', // 42.56px en 1920px
        '2xl': 'calc(10px + 2.1vw)', // 49.32px en 1920px
        '3xl': 'calc(10px + 2.4vw)', // 55.08px en 1920px
        '4xl': 'calc(12px + 2.7vw)', // 62.84px en 1920px
        '5xl': 'calc(12px + 3.0vw)', // 68.60px en 1920px
        '6xl': 'calc(14px + 3.3vw)', // 75.36px en 1920px
        '7xl': 'calc(14px + 3.6vw)', // 81.12px en 1920px
        '8xl': 'calc(16px + 3.9vw)', // 87.88px en 1920px
      },
      
      animation: {
        spinSlow: "spin 3s linear infinite",
        ownFade: "fadeInScale 0.5s ease-in-out",

        // animations for titles infinte carrousel
        marquee: 'marquee 40s linear infinite',
        marqueeSlow: 'marquee 50s linear infinite',
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(2)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    
    },
  },
  plugins: [],
} satisfies Config;
