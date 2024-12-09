"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function FontFilter({ setActiveFont, activeFont }) {
	const [filterActive, setFilterActive] = useState(false);

	const handleToggle = () => {
		setFilterActive(prev => !prev);
	};

	const setFont = (font: string) => {
		localStorage.setItem("font", font);
		setActiveFont(font);
	};

	const fonts = [
		{ name: "Sans Serif", font: "sans_serif" },
		{ name: "Serif", font: "serif" },
		{ name: "Mono", font: "mono" },
	];

	const displayFontName = () => {
		return activeFont?.replace("_", " ");
	};

	// useEffect(() => {
	// 	setActiveFont(localStorage.getItem("font"));
	// }, [activeFont]);

	return (
		<div className="w-auto relative mr-4 sm:mr-8">
			<div className="flex gap-3 h-8 items-center pr-4 sm:pr-7 border-r border-r-neutral-faded-grey">
				<p
					className="font-bold text-body-lg  capitalize"
					onClick={handleToggle}
				>
					{displayFontName()}
				</p>
				<Image
					src="/assets/icons/arrow-down.svg"
					height={6}
					width={12}
					alt="arrow-down"
				/>
			</div>

			{/* Fonts Dropdown */}

			{filterActive && (
				<div className="w-[183px] h-[152px] rounded-2xl bg-neutral-white dark:bg-black-300 absolute right-[-10px] sm:right-7 mt-3 shadow-custom-light dark:shadow-custom-dark p-6">
					{fonts.map((font, index) => {
						return (
							<p
								className={`text-body-lg font-bold leading-6 mb-4 cursor-pointer font-${
									font.font
								} text-black-200 dark:text-neutral-white  ${
									activeFont === font.font &&
									`text-primary-purple dark:text-primary-purple`
								}`}
								key={index}
								onClick={() => setFont(font.font)}
							>
								{font.name}
							</p>
						);
					})}
				</div>
			)}
		</div>
	);
}
