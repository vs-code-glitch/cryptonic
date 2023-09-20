/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        primary: "var(--primary-bg-color)",
        secondary: "var(--secondary-bg-color)",
        button: "var(--bg-button-color)",
      },
      textColor: {
        accent: "var(--text-accent-color)",
        primary: "var(--text-primary-color)",
        secondary: "var(--text-secondary-color)",
        btnText: "var(--bg-secondary-color)",
      },
      borderColor: {
        primary: "var(--bg-primary-color)",
        secondary: "var(--bg-secondary-color)",
        input: "var(--bg-input-color)",
        accent: "var(--text-accent-color)",
      },
    },
  },
  plugins: [],
};
