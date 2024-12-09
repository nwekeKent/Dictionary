import Image from "next/image";
import React from "react";
import FontFilter from "./FontFilter";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const Header = ({ setActiveFont, activeFont }) => {
	return (
		<header className="flex justify-between items-center">
			<Image src="/assets/icons/book.png" alt="book" width={32} height={37} />

			<div className="flex">
				<FontFilter setActiveFont={setActiveFont} activeFont={activeFont} />
				<ThemeSwitcher />
			</div>
		</header>
	);
};
