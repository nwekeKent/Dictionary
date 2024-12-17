import React from "react";

export const EmptyContent = () => {
	return (
		<div className="mt-20 text-center">
			<p className="text-[64px]">📖</p>
			<h3 className="font-bold mt-10 text-heading-sm text-black-200 dark:text-neutral-white leading-none">
				Welcome to the Dictionary
			</h3>
			<p className="text-neutral-grey text-[15px] md:text-body-lg leading-normal mt-6 font-normal">
				Enter a word in the search box to find its definition, pronunciation,
				and more.
			</p>
		</div>
	);
};
