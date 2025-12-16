/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            sans: ['Roboto Mono', 'monospace'],
        },

        extend: {
            frontSize: { huge: ['80rem', { lineHeight: '1' }] },
            colors: '#123456',
            screen: '100dvh',
        },
    },
    plugins: [],
}
