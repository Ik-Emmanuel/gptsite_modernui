import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'gradientBar': "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)",
      },
      background:{
        'gradientBar': "linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%)"
      },
      fontFamily: {
        'Manrope': "var(--font-family)",
      },
      colors: {
        customText: "var(--color-text)",
        colorBg:     "var(--color-bg)",
        colorFooter: "var(--color-footer)",
        colorBlog:"var(--color-blog)",
        colorText:  "var(--color-text)",
        colorSubText:"var(--color-subtext)",
      },
    },
  },
  plugins: [],
};
export default config;
