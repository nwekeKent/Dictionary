import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import FontFilter from "./FontFilter";
import { ThemeSwitcher } from "./ThemeSwitcher";

interface HeaderProps {
	setActiveFont: (newFont: string) => void;
	activeFont: string;
}

export const Header = ({ setActiveFont, activeFont }: HeaderProps) => {
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
