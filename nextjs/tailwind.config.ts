import type { Config } from "tailwindcss";
import daisyui from "daisyui"; // Import plugin thay vì require()

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [daisyui],
};

export default config;
