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
        inter: ['Inter', 'sans-serif'], 
      },
      boxShadow: {
        'custom-shadow': '0px 0px 27.993px 0px rgba(52, 224, 161, 0.18), 0px 0px 38.76px 0px rgba(52, 224, 161, 0.15), 0px 0px 53.115px 0px rgba(52, 224, 161, 0.14)',
        'custom-shadow-small': '0px 0px 4px 0px rgba(0, 0, 0, 0.25)', 
      },
      textColor: {
        'custom-text': '#18372C',
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
        'white-transparent': 'rgba(255, 255, 255, 0.05)', // Custom color
        lightblack:"#0E1412",
        greenhover:"rgba(97, 255, 158, 0.86)",
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
          xl: "2rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};

export default config;
