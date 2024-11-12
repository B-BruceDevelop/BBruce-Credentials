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
        'xs': 'calc(4px + 0.6vw)', // 16.52px en 1920px
        'sm': 'calc(6px + 0.9vw)', // 23.19px en 1920px
        'base': 'calc(6px + 1.2vw)', // 29.86px en 1920px
        'lg': 'calc(8px + 1.5vw)', // 36.53px en 1920px
        'xl': 'calc(8px + 1.8vw)', // 43.20px en 1920px
        '2xl': 'calc(8px + 2.1vw)', // 49.87px en 1920px
        '3xl': 'calc(8px + 2.4vw)', // 56.54px en 1920px
        '4xl': 'calc(10px + 2.7vw)', // 63.21px en 1920px
        '5xl': 'calc(10px + 3.0vw)', // 69.88px en 1920px
        '6xl': 'calc(10px + 3.3vw)', // 76.55px en 1920px
        '7xl': 'calc(12px + 3.6vw)', // 83.22px en 1920px
        '8xl': 'calc(12px + 3.9vw)', // 89.89px en 1920px
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
