"use client";

import { Header } from "@/components/header/Header";
import { useEffect, useState } from "react";
import { sans_serif, serif, mono } from "./utils/fonts";

export default function Home() {
	const font = localStorage.getItem("font");
	const [activeFont, setActiveFont] = useState(font);

	useEffect(() => {
		if (font) {
			return;
		} else {
			localStorage.setItem("font", "mono");
			setActiveFont(font);
		}
	}, [font]);

	return (
		<main className={`app-wrapper font-${font}`}>
			<Header setActiveFont={setActiveFont} activeFont={activeFont} />
		</main>
	);
}
