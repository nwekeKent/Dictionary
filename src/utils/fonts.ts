import { Lora, Inter, Inconsolata } from "next/font/google";

export const sans = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sans",
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
