/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", " serif"],
    },
    extend: {
      colors: {
        "Desaturated-Dark-Cyan": " hsl(180, 29%, 50%)",
        "Light-Grayish-Cyan-Background": "hsl(180, 52%, 96%)",
        "Light-Grayish-Cyan-FilterTablets": "hsl(180, 31%, 95%)",
        "Dark-Grayish-Cyan": " hsl(180, 8%, 52%)",
        "Very-Dark-Grayish-Cyan": "hsl(180, 14%, 20%)",
      },
    },
  },
  plugins: [],
};
