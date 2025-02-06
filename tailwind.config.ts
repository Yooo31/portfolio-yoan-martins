import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {},
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#d1d1d1",
          secondary: "#1e1e1e",
          "base-100": "#1E1E1E",
          accent: "#ffffff",
          info: "#1c67f2",
          success: "#1ab373",
          warning: "#f98c1f",
          error: "#e3524a",
        },
        light: {
          primary: "#1e1e1e",
          secondary: "#d1d1d1",
          accent: "#000000",
          "base-100": "#ffffff",
          info: "#1c67f2",
          success: "#1ab373",
          warning: "#f98c1f",
          error: "#e3524a",
        },
      },
    ],
  },
};
export default config;
