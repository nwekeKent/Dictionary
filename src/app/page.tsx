"use client";

import { ContentArea } from "@/components/header/content-area/ContentArea";
import { Header } from "@/components/header/Header";
import SearchInput from "@/components/SearchInput";
import { useEffect, useState } from "react";

export default function Home() {
	const [activeFont, setActiveFont] = useState("mono");

	useEffect(() => {
		const font = localStorage.getItem("font");
		if (font) {
			setActiveFont(font);
		} else {
			localStorage.setItem("font", "mono");
			setActiveFont(font);
		}
	}, [activeFont]);

	return (
		<main className={`app-wrapper font-${activeFont}`}>
			<Header setActiveFont={setActiveFont} activeFont={activeFont} />
			<SearchInput />
			<ContentArea />
		</main>
	);
}
