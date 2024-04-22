import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      borderRadius: {
        DEFAULT: "var(--border-radius)",
        sm: "var(--border-radius-sm)",
        md: "var(--border-radius-md)",
        lg: "var(--border-radius-lg)",
        xl: "var(--border-radius-xl)",
        full: "9999px",
      },

      colors: {
        background: {
          DEFAULT: "hsl(var(--background))",
          muted: "hsl(var(--background-muted))",
          accent: "hsl(var(--color-accent))",
        },

        foreground: {
          DEFAULT: "hsl(var(--color-text))",
          light: "hsl(var(--color-text-light))",
          lighter: "hsl(var(--color-text-lighter))",
          muted: "hsl(var(--color-text-muted))",
          "muted-light": "hsl(var(--color-text-muted-light))",
          "muted-dark": "hsl(var(--color-text-muted-dark))",
          "muted-darker": "hsl(var(--color-text-muted-darker))",
        },

        border: {
          DEFAULT: "hsl(var(--color-border))",
          light: "hsl(var(--color-border-light))",
          lighter: "hsl(var(--color-border-lighter))",
          hover: "hsl(var(--color-border-hover))",
          "light-hover": "hsl(var(--color-border-light-hover))",
        },

        black: {
          DEFAULT: "hsl(var(--color-black))",
          50: "hsl(var(--color-black-50))",
          100: "hsl(var(--color-black-100))",
          200: "hsl(var(--color-black-200))",
          300: "hsl(var(--color-black-300))",
          400: "hsl(var(--color-black-400))",
          500: "hsl(var(--color-black-500))",
          600: "hsl(var(--color-black-600))",
          700: "hsl(var(--color-black-700))",
          800: "hsl(var(--color-black-800))",
          900: "hsl(var(--color-black-900))",
        },

        dark: {
          DEFAULT: "hsl(var(--color-dark))",
          hover: "hsl(var(--color-dark-hover))",
          50: "hsl(var(--color-dark-50))",
          100: "hsl(var(--color-dark-100))",
          200: "hsl(var(--color-dark-200))",
          300: "hsl(var(--color-dark-300))",
          400: "hsl(var(--color-dark-400))",
          500: "hsl(var(--color-dark-500))",
          600: "hsl(var(--color-dark-600))",
          650: "hsl(var(--color-dark-650))",
          700: "hsl(var(--color-dark-700))",
          750: "hsl(var(--color-dark-750))",
          800: "hsl(var(--color-dark-800))",
          850: "hsl(var(--color-dark-850))",
          900: "hsl(var(--color-dark-900))",
          950: "hsl(var(--color-dark-950))",
        },

        // gray: {
        //   DEFAULT: "hsl(var(--color-gray))",
        //   hover: "hsl(var(--color-gray-hover))",
        //   50: "hsl(var(--color-gray-50))",
        //   100: "hsl(var(--color-gray-100))",
        //   200: "hsl(var(--color-gray-200))",
        //   300: "hsl(var(--color-gray-300))",
        //   400: "hsl(var(--color-gray-400))",
        //   500: "hsl(var(--color-gray-500))",
        //   600: "hsl(var(--color-gray-600))",
        //   700: "hsl(var(--color-gray-700))",
        //   800: "hsl(var(--color-gray-800))",
        //   900: "hsl(var(--color-gray-900))",
        // },

        red: {
          50: "hsl(var(--color-red-50))",
          100: "hsl(var(--color-red-100))",
          200: "hsl(var(--color-red-200))",
          300: "hsl(var(--color-red-300))",
          400: "hsl(var(--color-red-400))",
          500: "hsl(var(--color-red-500))",
          600: "hsl(var(--color-red-600))",
          700: "hsl(var(--color-red-700))",
          800: "hsl(var(--color-red-800))",
          900: "hsl(var(--color-red-900))",
          DEFAULT: "hsl(var(--color-red))",
        },

        green: {
          50: "hsl(var(--color-green-50))",
          100: "hsl(var(--color-green-100))",
          200: "hsl(var(--color-green-200))",
          300: "hsl(var(--color-green-300))",
          400: "hsl(var(--color-green-400))",
          500: "hsl(var(--color-green-500))",
          600: "hsl(var(--color-green-600))",
          700: "hsl(var(--color-green-700))",
          800: "hsl(var(--color-green-800))",
          900: "hsl(var(--color-green-900))",
          DEFAULT: "hsl(var(--color-green))",
        },

        yellow: {
          50: "hsl(var(--color-yellow-50))",
          100: "hsl(var(--color-yellow-100))",
          200: "hsl(var(--color-yellow-200))",
          300: "hsl(var(--color-yellow-300))",
          400: "hsl(var(--color-yellow-400))",
          500: "hsl(var(--color-yellow-500))",
          600: "hsl(var(--color-yellow-600))",
          700: "hsl(var(--color-yellow-700))",
          800: "hsl(var(--color-yellow-800))",
          900: "hsl(var(--color-yellow-900))",
          DEFAULT: "hsl(var(--color-yellow))",
        },
      },
    },
  },
  plugins: [],
};
export default config;

// import type { Config } from "tailwindcss"

// const config = {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
// 	],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config

// export default config
