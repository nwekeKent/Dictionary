import { useState, useEffect } from "react";

type DictionaryData = Array<{
	word: string;
	phonetics: Array<{
		text?: string;
		audio?: string;
		sourceUrl?: string;
		license?: {
			name: string;
			url: string;
		};
	}>;
	meanings: Array<{
		partOfSpeech: string;
		definitions: Array<{
			definition: string;
			example?: string;
			synonyms: string[];
			antonyms: string[];
		}>;
		synonyms: string[];
		antonyms: string[];
	}>;
	sourceUrls: string[];
}>;

export const useDictionary = () => {
	const [searchedWord, setSearchedWord] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [data, setData] = useState<DictionaryData | null>(null);

	const fetchWord = async (word: string) => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(
				`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
			);
			if (!response.ok) throw new Error("Word not found");

			const data = await response.json();
			setData(data);
			localStorage.setItem("searchedWord", word);
			setSearchedWord(word);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Something went wrong");
			setData(null);
		} finally {
			setLoading(false);
		}
	};

	// Check localStorage on initial load
	useEffect(() => {
		const savedWord = localStorage.getItem("searchedWord");
		if (savedWord) {
			fetchWord(savedWord);
		}
	}, []);

	return {
		searchedWord,
		loading,
		error,
		data,
		fetchWord,
	};
};
