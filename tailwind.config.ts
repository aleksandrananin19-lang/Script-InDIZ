import type { Config } from 'tailwindcss';
export default { content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'], theme: { extend: { fontFamily: { sans: ['var(--font-inter)', 'Arial', 'sans-serif'] }, colors: { avred: '#d71920' } } }, plugins: [] } satisfies Config;
