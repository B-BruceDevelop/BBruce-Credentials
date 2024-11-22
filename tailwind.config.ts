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
        xs: "calc(2px + 0.68vw)", // ~15px en 1920px
        xs2: "calc(2px + 0.9vw)" , // 19.28px en 1920px
        sm: "calc(3px + 1.04vw)", // ~23px en 1920px
        base: "calc(4px + 1.30vw)", // ~29px en 1920px
        md: "calc(4px + 1.49vw)", // ~33px en 1920px
        lg: "calc(5px + 1.67vw)", // ~37px en 1920px
        xl: "calc(5px + 1.93vw)", // ~42px en 1920px
        "2xl": "calc(6px + 2.14vw)", // ~47px en 1920px
        "3xl": "calc(6px + 2.40vw)", // ~52px en 1920px
        "4xl": "calc(7px + 2.81vw)", // ~61px en 1920px
        "5xl": "calc(8px + 3.07vw)", // ~67px en 1920px
        "6xl": "calc(8px + 3.39vw)", // ~73px en 1920px
        "7xl": "calc(9px + 3.75vw)", // ~81px en 1920px
        "8xl": "calc(10px + 3.95vw)", // ~86px en 1920px
      },
      fontFamily: {
        bruceRegular: ["Bruce-Regular", "sans-serif"],
        bruceOutline: ["Bruce-Regular-Outline", "sans-serif"],
        favoritBold: ["Favorit-Bold", "sans-serif"],
        favoritBoldItalic: ["Favorit-Bold-Italic", "sans-serif"],
        favoritLightItalic: ["Favorit-Light-Italic", "sans-serif"],
        favoritRegularMono: ["Favorit-Regular-Mono", "monospace"],
        favoritRegularItalic: ["Favorit-Regular-Italic", "sans-serif"],
        favoritBoldLining: ["Favorit-Bold-Lining", "sans-serif"],
        favoritLightLining: ["Favorit-Light-Lining", "sans-serif"],
        favoritMediumLining: ["Favorit-Medium-Lining", "sans-serif"],
        favoritRegularLining: ["Favorit-Regular-Lining", "sans-serif"],
        favoritMediumItalic: ["Favorit-Medium-Italic", "sans-serif"],
        favoritMedium: ["Favorit-Medium", "sans-serif"],
        favoritLight: ["Favorit-Light", "sans-serif"],
        favoritRegular: ["Favorit-Regular", "sans-serif"],
      },
      animation: {
        spinSlow: "spin 3s linear infinite",
        ownFade: "fadeInScale 0.5s ease-in-out",
        fadeInSmall: "fadeOutScale 0.5s ease-in-out", // Nueva animación
        marquee: "marqueeReverse 40s linear infinite",
        marqueeSlow: "marquee 50s linear infinite",
        accordionDown: "accordionDown 0.2s ease-out",
        accordionUp: "accordionUp 0.2s ease-out",
        growFromTop: "growFromTop 0.5s ease-in-out forwards",
        shrinkToBottom: "shrinkToBottom 0.5s ease-in-out forwards",
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
        fadeOutScale: {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
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
        growFromTop: {
          "0%": { height: "0" },
          "100%": { height: "auto" },
        },
        shrinkToBottom: {
          "0%": { height: "auto" },
          "100%": { height: "0" },
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
