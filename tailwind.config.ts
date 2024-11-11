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
        'xs': 'calc(10px + 0.4vw)', // 18px en 1920px
        'sm': 'calc(12px + 0.6vw)', // 24px en 1920px
        'base': 'calc(14px + 0.8vw)', // 28px en 1920px
        'lg': 'calc(16px + 1.0vw)', // 34px en 1920px
        'xl': 'calc(18px + 1.2vw)', // 40px en 1920px
        '2xl': 'calc(20px + 1.4vw)', // 46px en 1920px
        '3xl': 'calc(22px + 1.6vw)', // 52px en 1920px
        '4xl': 'calc(24px + 1.8vw)', // 58px en 1920px
        '5xl': 'calc(26px + 2.0vw)', // 64px en 1920px
        '6xl': 'calc(28px + 2.2vw)', // 70px en 1920px
        '7xl': 'calc(30px + 2.4vw)', // 76px en 1920px
        '8xl': 'calc(32px + 2.6vw)', // 82px en 1920px
      },
      
      animation: {
        spinSlow: "spin 3s linear infinite",
        ownFade: "fadeInScale 0.5s ease-in-out",
      },
      keyframes: {
        fadeInScale: {
          "0%": { opacity: "0", transform: "scale(2)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
