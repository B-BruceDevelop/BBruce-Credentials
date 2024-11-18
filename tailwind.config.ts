import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        greyA0: "#A0A0A0",
        nutrisport: "#F8F7EF",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontSize: {
        xs: "calc(4px + 0.6vw)", // ~15px
        sm: "calc(6px + 0.9vw)", // ~23px
        base: "calc(6px + 1.2vw)", // ~29px
        lg: "calc(8px + 1.5vw)", // ~37px
        xl: "calc(8px + 1.8vw)", // ~42px
        "2xl": "calc(8px + 2.1vw)", // ~47px
        "3xl": "calc(8px + 2.4vw)", // ~52px
        "4xl": "calc(10px + 2.7vw)", // ~61px
        "5xl": "calc(10px + 3.0vw)", // ~67px
        "6xl": "calc(10px + 3.3vw)", // ~73px
        "7xl": "calc(12px + 3.6vw)", // ~81px
        "8xl": "calc(12px + 3.9vw)", // ~86px
      },
      animation: {
        spinSlow: "spin 3s linear infinite",
        ownFade: "fadeInScale 0.5s ease-in-out",
        marquee: "marqueeReverse 40s linear infinite",
        marqueeSlow: "marquee 50s linear infinite",
        accordionDown: "accordionDown 0.2s ease-out",
        accordionUp: "accordionUp 0.2s ease-out",
      },
      keyframes: {
        fadeInScale: {
          "0%": {
            opacity: "0",
            transform: "scale(2)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        marquee: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-100%)",
          },
        },
        marqueeReverse: {
          "100%": {
            transform: "translateX(0)",
          },
          "0%": {
            transform: "translateX(-100%)",
          },
        },
        accordionDown: {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        accordionUp: {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
