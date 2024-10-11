/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},

			fontFamily: {
				Nunito: ["Nunito", "sans-serif"],
				NunitoSans: ["Nunito Sans", "sans-serif"],
				Raleway: ["Raleway", "sans-serif"],
				WorkSans: ["Work Sans", "sans-serif"],
				PTSans: ["PT Sans", "sans-serif"],
				Hind: ["Hind", "sans-serif"],
			},
		},
	},
	plugins: [],
};
