import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: 
    {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0.80) 21.11%, rgba(0, 0, 0, 0.00) 100%)',
        'custom-gradient2': 'linear-gradient(0deg, #000 -12.9%, rgba(0, 0, 0, 0) 100%)',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        white: "var(--white, #FFF)", //custom white color
        purewhite:"#FFFFFF",
        teal: "#34E0A1", // teal color
        tealgradient:"#18372C",
        green:'#122F26',
        lightgreen:"#060A0B",
        grey:"#BCCACA",
        lightblack:"#0E1412",
        'foundation-grey-darker': '#222', 
      },
      gap: {
        '28.6': '28.6rem', // Custom gap utility
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "0.3rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
