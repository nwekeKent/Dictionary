import React from "react";

export const Error = () => {
	return (
		<div className="mt-20 text-center">
			<p className="text-[64px]">😕</p>
			<h3 className="font-bold mt-10  text-heading-sm text-black-200 dark:text-neutral-white leading-none">
				No Definitions Found
			</h3>
			<p className="text-neutral-grey text-[15px] md:text-body-lg leading-normal mt-6 font-normal">
				{`	Sorry pal, we couldn't find definitions for the word you were looking
				for. You can try the search again at later time or head to the web
				instead.`}
			</p>
		</div>
	);
};
