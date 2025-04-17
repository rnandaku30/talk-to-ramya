/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "rgb(15 23 42 / <alpha-value>)", // dark glass bg
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        wave: "wave 2s infinite",
        slowPulse: "slowPulse 10s ease-in-out infinite",
        twinkle: "twinkle 2s ease-in-out infinite",
        profilePulse: "pulse 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.3s ease-in-out",
        fadeUpStagger: 'fadeUp 0.6s ease-out both',
        fadeInForwards: "fadeIn 0.6s ease-out forwards",
        slideUp: "slideUp 0.3s ease-out",


      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" }
        },
        slowPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" }
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2" },
          "50%": { opacity: "0.9" },
        },
        profilePulse: {
          "0%, 100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.03)", opacity: 0.95 }
        },
        fadeIn: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        fadeInForwards: {
          "0%": { opacity: 0, transform: "scale(0.95)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(40px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },

    },
    safelist: [
      {
        pattern: /animate-delay-\[\d+ms\]/,
      },
    ]

  },
  plugins: [],
};
