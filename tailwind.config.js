/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#024e92',
                secondary: '#4fb846',
                background: '#e6f3ff',
            },
            height: {
                '100vh-h-12': 'calc(100vh - 4rem)',
            },
        },
    },
    plugins: [],
};

