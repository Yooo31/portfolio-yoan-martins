import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        dark: {
          "info": "#1c67f2",
          "success": "#1ab373",
          "warning": "#f98c1f",
          "error": "#e3524a",
        }
      },
      "valentine"
    ]
  }
}
export default config
