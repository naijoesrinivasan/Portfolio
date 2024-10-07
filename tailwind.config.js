/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                themeDarkGrey: "#121212",
                themeCharcoal: "#1a1a1a",
                themeLightGrey: "#f5f5f5",
                themeNeonGreen: "#39ff14",
                themeSpringGreen: "#00ff7f",
                themeCrimRed: "#DC143C",
                themeFirebrick: "#B22222",
                themeRubyRed: "#9B111E",
                themeDarkRed: "#8B0000",
                themeIndianRed: "#CD5C5C",
                themeHeadWhite: "#f5f5f5",
                themeTextWhite: "#e0e0e0"
            },
            fontFamily: {
                eudoxus: ["Eudoxus-Sans", "sans-serif"]
            },
        },
        fontFamily: {
            roboto: "Roboto",
            protestGuerrilla: "Protest Guerrilla",
            robotoMono: "Roboto Mono",
            inter: "Inter",
            arvo: "Arvo"
        }
    },
    plugins: [
        function({ addUtilities }) {
            addUtilities({
                '.bg-clip-text': {
                    'background-clip': 'text',
                    '-webkit-background-clip': 'text',
                },
                '.text-fill-transparent': {
                    '-webkit-text-fill-color': 'transparent',
                },
            });
        }
    ],
}