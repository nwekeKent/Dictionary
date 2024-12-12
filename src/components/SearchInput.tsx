import React from "react";
import Image from "next/image";

export default function SearchInput() {
	return (
		<div className="relative w-full h-16 md:mt-12 mt-6">
			<input
				type="text"
				placeholder="search"
				className="w-full py-2 h-16 pr-10 pl-6  placeholder:text-neutral-grey bg-neutral-lighter-grey dark:bg-black-300 rounded-2xl focus:outline-none focus:border caret-primary-purple focus:border-primary-purple"
			/>
			<div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
				<Image
					src={"/assets/icons/search.svg"}
					alt={"search-icon"}
					width={18}
					height={18}
				/>
			</div>
		</div>
	);
}
