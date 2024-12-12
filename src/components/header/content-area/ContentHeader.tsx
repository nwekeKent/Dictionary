import React from "react";
import Image from "next/image";

export const ContentHeader = ({ headerData }) => {
	return (
		<div className="flex justify-between items-center ">
			<div>
				<h1 className="text-black-200 dark:text-neutral-white font-bold md:text-heading-2xl text-heading-xl leading-none">
					{headerData.word}
				</h1>

				<p className="text-primary-purple text-heading-lg font-normal leading-none mt-2">
					{" "}
					{`/ˈkiːbɔːd/`}
				</p>
			</div>

			<Image
				src={"/assets/icons/play.svg"}
				alt="play-button"
				height={75}
				width={75}
			/>
		</div>
	);
};
