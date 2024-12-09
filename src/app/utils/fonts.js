import { Lora, Inter, Inconsolata } from "next/font/google";

export const sans_serif = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sans_serif",
});

export const serif = Lora({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-serif",
});

export const mono = Inconsolata({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-mono",
});
