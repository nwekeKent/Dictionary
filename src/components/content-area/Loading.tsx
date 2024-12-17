import Image from "next/image";

export const Loading = () => {
	return (
		<div className="mt-20 text-center">
			<Image
				src="/assets/images/search-purple.png"
				alt="loading-book"
				width={50}
				height={50}
				className="mx-auto"
			/>
			<h3 className="font-bold mt-10 text-heading-sm text-black-200 dark:text-neutral-white leading-none">
				Looking up word...
			</h3>
			<p className="text-neutral-grey text-[15px] md:text-body-lg leading-normal mt-6 font-normal">
				Please wait while we fetch the definition
			</p>
		</div>
	);
};
