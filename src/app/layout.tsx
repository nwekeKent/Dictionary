import type { Metadata } from "next";
import { sans, serif, mono } from "@/utils/fonts";
import "./globals.css";
import { ModeProvider } from "@/providers/ModeProvider";

export const metadata: Metadata = {
	title: "Dictionary",
	description:
		"Discover the meanings, synonyms, and antonyms of words with our intuitive Dictionary App.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${sans.variable} ${serif.variable} ${mono.variable}`}
			suppressHydrationWarning
		>
			<body className="py-6 sm:py-14  px-6 sm:px-10 dark:bg-black-400 bg-neutral-white">
				<ModeProvider>{children}</ModeProvider>
			</body>
		</html>
	);
}
