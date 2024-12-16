/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-light': `4px 4px 10px
                         rgba(0, 0, 0, 0.1)`,
        'custom-dark': `6px 6px 15px
                        rgba(0, 0, 0, 0.3)`,
        'custom-color': `5px 5px 20px
                         rgba(34, 60, 80, 0.7)`,
      },
    },
  },
  plugins: [],
};
