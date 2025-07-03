// tailwind.config.js
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // override primary color (blue-900)
        secondary: "#F59E0B", // override secondary color (amber-500)
        accent: "#10B981", // override accent color (emerald-500)
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1E40AF", // custom primary color
          secondary: "#F59E0B", // custom secondary color
          accent: "#10B981", // custom accent color
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#2094f3",
          success: "#009485",
          warning: "#FF9900",
          error: "#FF5724",
        },
      },
    ],
  },
};
