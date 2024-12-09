import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				primary: {
					purple: "#A445ED",
					red: "#FF5252",
				},
				black: {
					100: "#3A3A3A",
					200: "#2D2D2D",
					300: "#1F1F1F",
					400: "#050505",
				},
				neutral: {
					white: "#FFFFFF",
					"lighter-grey": "#F4F4F4",
					"faded-grey": "E9E9E9",
					grey: "#757575",
				},
			},
			fontSize: {
				"heading-xl": "64px",
				"heading-lg": "24px",
				"heading-sm": "20px",
				"body-lg": "18px",
				"body-sm": "14px",
			},
			boxShadow: {
				"custom-light": "0px 5px 30px 0px rgba(0, 0, 0, 0.10)",
				"custom-dark": "0px 5px 30px 0px #A445ED;",
			},
			fontFamily: {
				sans_serif: ["var(--font-sans_serif)"],
				serif: ["var(--font-serif)"],
				mono: ["var(--font-mono)"],
			},
		},
	},
	plugins: [],
} satisfies Config;
