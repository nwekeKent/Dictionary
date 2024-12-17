import React, { useState } from "react";
import Image from "next/image";

interface SearchInputProps {
	onSearch: (word: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
	const [searchTerm, setSearchTerm] = React.useState("");
	const [error, setError] = useState(false);

	const handleSearch = () => {
		if (!searchTerm.trim()) {
			setError(true);
			return;
		}
		setError(false);
		onSearch(searchTerm.trim());
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === "Enter") {
			handleSearch();
		}
	};

	return (
		<div className="relative w-full h-16 md:mt-12 mt-6">
			<input
				type="text"
				value={searchTerm}
				onChange={e => {
					setError(false);
					setSearchTerm(e.target.value);
				}}
				onKeyDown={handleKeyPress}
				placeholder="search"
				className={`w-full py-2 h-16 pr-10 pl-6 text-[16px] md:text-heading-sm placeholder:text-neutral-grey bg-neutral-lighter-grey dark:bg-black-300 rounded-2xl focus:outline-none focus:border caret-primary-purple focus:border-primary-purple font-bold ${
					error ? "border border-primary-red" : ""
				}`}
			/>
			<div
				className="absolute inset-y-0 right-0 flex items-center pr-6 cursor-pointer"
				onClick={handleSearch}
			>
				<Image
					src={"/assets/icons/search.svg"}
					alt={"search-icon"}
					width={18}
					height={18}
				/>
			</div>
			{error && (
				<p className="text-red-500 text-body-lg mt-2">
					Whoops, can’t be empty…
				</p>
			)}
		</div>
	);
}
