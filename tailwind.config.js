/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                themeDarkGrey: "#0D0D0D",
                themeNeonGreen: "#059669",
                themeHeadWhite: "#ffffff",
                themeTextWhite: "#c7c7c7"
            },
            fontFamily: {
                eudoxus: ["Eudoxus-Sans", "sans-serif"],
                roboto: "Roboto",
                protestGuerrilla: "Protest Guerrilla",
                robotoMono: "Roboto Mono",
                inter: "Inter",
                arvo: "Arvo"
            },
        },

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