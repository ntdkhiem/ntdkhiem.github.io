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
            },
            animation: {
                "ping-slow": "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite",
                "bounce-horiz": "bounce-horiz 1s infinite",
                "linear": "scroll-horiz 30s linear infinite",
            },
            keyframes: {
                "bounce-horiz": {
                    "0%, 100%": {
                        "transform": "translateX(-5%)",
                        "animation-timing-function":
                            "cubic-bezier(0.8, 0, 1, 1)",
                    },
                    "50%": {
                        "transform": "translateX(0)",
                        "animation-timing-function":
                            "cubic-bezier(0, 0, 0.2, 1)",
                    },
                },
                "scroll-horiz": {
                    "0%": {
                        "transform": "translateX(0%)",
                    },
                    "100%": {
                        "transform": "translateX(-100%)",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
