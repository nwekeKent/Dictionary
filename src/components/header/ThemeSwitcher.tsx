"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export const ThemeSwitcher = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// useEffect only runs on the client, so now we can safely show the UI
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	console.log("theme", theme);

	return (
		<React.Fragment>
			{theme === "dark" ? (
				<Image
					src="/assets/icons/toggle-dark.svg"
					alt="toggle-dark"
					onClick={() => setTheme("light")}
					width={81}
					height={22}
				/>
			) : (
				<Image
					src="/assets/icons/toggle-light.svg"
					alt="toggle-light"
					onClick={() => setTheme("dark")}
					width={81}
					height={22}
					// className="h-auto w-auto"
				/>
			)}
		</React.Fragment>
	);
};
