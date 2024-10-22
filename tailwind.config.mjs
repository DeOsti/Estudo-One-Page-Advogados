/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#CC0000",
                secondary: "#111111",
            },
            fontFamily: {
                cinzel: "Cinzel Variable, serif",
                poppins: "Poppins, Segoe UI, Tahoma, sans-serif",
            },
            keyframes: {
                "appear-b": {
                    "0%": {
                        opacity: 0,
                        transform: "translateY(100%)",
                    },
                    "100%": {
                        opacity: 1,
                        transform: "translateY(0%)",
                    },
                },
            },
            animation: {
                "appear-b": "appear-b 1s ease-in-out",
            },
        },
    },
    plugins: [],
};
