import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        white: "var(--white, #FFF)", // Custom white color
        purewhite: "#FFFFFF",
        teal: "#34E0A1", // Teal color
        tealgradient: "#18372C",
        green: '#122F26',
        lightgreen: "#060A0B",
        grey: "#BCCACA",
        'white-transparent': 'rgba(255, 255, 255, 0.05)', // Custom color
        lightblack: "#0E1412",
        greenhover: "rgba(97, 255, 158, 0.86)",
        'foundation-grey-darker': '#222', 
      },
      gap: {
        '28.6': '28.6rem', // Custom gap utility
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        screens: {
          DEFAULT: "2080px", // Max-width 2080px
        },
      },
      fontSize: {
        xsm: ['clamp(0.62rem, calc(0.58rem + 0.30vw), 0.92rem)', '1.4'],
        ssm: ['clamp(0.90rem, calc(0.82rem + 0.29vw), 1.10rem)', '1.4'],
        sm: ['clamp(0.95rem, calc(0.62rem + 0.29vw), 1.20rem)', '1.4'],
        base: ['clamp(0.70rem, calc(0.88rem + 0.19vw), 1.20rem)', '1.4'],
        lg: ['clamp(1.00rem, calc(0.88rem + 0.39vw), 1.28rem)', '1.4'],
        xl: ['clamp(1.42rem, calc(1.06rem + 0.80vw), 2.34rem)', '1.4'],
        '2xl': ['clamp(1.60rem, calc(1.08rem + 0.59vw), 2.93rem)', '1.2'],
        '3xl': ['clamp(1.80rem, calc(1.08rem + 1.63vw), 3.66rem)', '1.1'],
        '3.5xl': ['clamp(1.90rem, calc(1.15rem + 2.68vw), 3.80rem)', '1.1'],
        '4xl': ['clamp(2.00rem, calc(1.03rem + 2.98vw), 4.958rem)', '1.1'],
        '5xl': ['clamp(2.28rem, calc(0.94rem + 4.71vw), 5.72rem)', '1'],
        '6xl': ['clamp(2.57rem, calc(0.78rem + 7.95vw), 7.15rem)', '1'],
      },
      screens: {
        '2xl':'1536px',
        xl: '1440px',
        lg: '1024px',
        md: '980px',
        sm: '767px',
        xs: '425px',
      },
    },
  },
  plugins: [],
};

export default config;
