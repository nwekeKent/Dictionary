"use client";

import SearchInput from "@/components/SearchInput";
import { EmptyContent } from "@/components/content-area/EmptyContent";
import { Error } from "@/components/content-area/Error";
import { ContentArea } from "@/components/content-area/ContentArea";
import { useDictionary } from "@/hooks/useDictionary";
import { Header } from "@/components/header/Header";
import { Suspense } from "react";
import { Loading } from "@/components/content-area/Loading";
import { useFont } from "@/hooks/useFont";

export default function Home() {
	const { activeFont, handleFontChange, mounted } = useFont();
	const { searchedWord, loading, error, data, fetchWord } = useDictionary();

	if (!mounted) {
		return null;
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
