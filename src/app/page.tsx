"use client";

import SearchInput from "@/components/SearchInput";
import { EmptyContent } from "@/components/content-area/EmptyContent";
import { Error } from "@/components/content-area/Error";
import { ContentArea } from "@/components/content-area/ContentArea";
import { useDictionary } from "@/hooks/useDictionary";
import { Header } from "@/components/header/Header";
import { useEffect, useState, Suspense } from "react";
import { Loading } from "@/components/content-area/Loading";

export default function Home() {
	const [activeFont, setActiveFont] = useState("mono");
	const [mounted, setMounted] = useState(false);
	const { searchedWord, loading, error, data, fetchWord } = useDictionary();

	useEffect(() => {
		const storedFont = localStorage.getItem("font") || "mono";
		setActiveFont(storedFont);
	}, []);

	useEffect(() => {
		setMounted(true);
	}, []);

	const handleFontChange = (newFont: string) => {
		localStorage.setItem("font", newFont);
		setActiveFont(newFont);
	};

	if (!mounted) {
		return null; // or a loading placeholder
	}

	return (
		<main className={`app-wrapper font-${activeFont} transition-all`}>
			<Header setActiveFont={handleFontChange} activeFont={activeFont} />
			<SearchInput onSearch={fetchWord} />

			{loading ? (
				<Loading />
			) : error ? (
				<Error />
			) : !searchedWord ? (
				<EmptyContent />
			) : data ? (
				<Suspense fallback={<Loading />}>
					<ContentArea data={data} />
				</Suspense>
			) : null}
		</main>
	);
}
