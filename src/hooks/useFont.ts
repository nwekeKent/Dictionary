import { useState, useEffect } from "react";

export const useFont = () => {
	const [activeFont, setActiveFont] = useState("mono");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const storedFont = localStorage.getItem("font") || "mono";
		setActiveFont(storedFont);
		setMounted(true);
	}, []);

	const handleFontChange = (newFont: string) => {
		localStorage.setItem("font", newFont);
		setActiveFont(newFont);
	};

	return {
		activeFont,
		handleFontChange,
		mounted,
	};
};
