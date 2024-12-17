import React from "react";
import { ContentHeader } from "./ContentHeader";
import Image from "next/image";

interface ContentAreaProps {
	data: {
		word: string;
		phonetics: Array<{
			text?: string;
			audio?: string;
			sourceUrl?: string;
			license?: {
				name: string;
				url: string;
			};
		}>;
		meanings: Array<{
			partOfSpeech: string;
			definitions: Array<{
				definition: string;
				example?: string;
				synonyms: string[];
				antonyms: string[];
			}>;
			synonyms: string[];
			antonyms: string[];
		}>;
		sourceUrls: string[];
	}[];
}

export const ContentArea = ({ data }: ContentAreaProps) => {
	return (
		<div className="md:mt-12 mt-6">
			<ContentHeader
				data={{
					word: data[0].word,
					phonetics: data[0].phonetics,
				}}
			/>

			{data[0].meanings.map((meaning, index) => {
				return (
					<div className="md:mt-10 mt-8" key={index}>
						<div className="flex gap-5 items-center md:mb-10 mb-8">
							<h3 className="font-bold md:text-heading-lg text-body-lg text-black-200 dark:text-neutral-white leading-none">
								{meaning.partOfSpeech}
							</h3>
							<div className="w-full h-[1px] bg-neutral-faded-grey dark:bg-black-100"></div>
						</div>

						<p className="text-neutral-grey text-[16px] md:text-heading-sm leading-none mb-6 font-normal">
							Meaning
						</p>
						<ul className="list-disc marker:text-primary-purple md:ml-10 ml-4">
							{meaning.definitions.map((definition, index) => {
								return (
									<React.Fragment key={index}>
										<li className="text-black-200 dark:text-neutral-white md:text-body-lg text-body-sm leading-6 mb-[13]">
											{definition.definition}

											{definition.example && (
												<span className="block text-neutral-grey md:text-body-lg text-body-sm mt-[13px]">
													{`"${definition.example}"`}
												</span>
											)}
										</li>
									</React.Fragment>
								);
							})}
						</ul>

						{meaning.synonyms.length > 0 && (
							<div className="flex gap-6 md:mt-10 mt-6">
								<p className="text-neutral-grey text-[16px] md:text-heading-sm leading-none font-normal">
									Synonyms
								</p>

								<div className="flex gap-2">
									{meaning.synonyms.slice(0, 3).map((synonym, index) => {
										return (
											<p
												key={index}
												className="text-primary-purple text-[16px] md:text-heading-sm leading-none font-bold"
											>
												{synonym}
												{index < Math.min(meaning.synonyms.length - 1, 2) &&
													","}
											</p>
										);
									})}
								</div>
							</div>
						)}

						{meaning.antonyms.length > 0 && (
							<div className="flex gap-6 md:mt-10 mt-6">
								<p className="text-neutral-grey text-[16px] md:text-heading-sm leading-none font-normal">
									Antonyms
								</p>

								<div className="flex gap-2 flex-wrap">
									{meaning.antonyms.slice(0, 3).map((antonym, index) => {
										return (
											<p
												key={index}
												className="text-primary-purple text-[16px] md:text-heading-sm leading-none font-bold"
											>
												{antonym}
												{index < Math.min(meaning.antonyms.length - 1, 2) &&
													","}
											</p>
										);
									})}
								</div>
							</div>
						)}
					</div>
				);
			})}

			<div className="w-full h-[1px] bg-neutral-faded-grey dark:bg-black-100 md:mt-10 mt-8"></div>

			<div className="mt-6 flex md:flex-row md:gap-5 gap-3 items-center">
				<p className="text-neutral-grey text-body-sm leading-none font-normal decoration-solid">
					Source
				</p>

				<div className="flex gap-2 items-center">
					<a
						href={data[0].sourceUrls[0]}
						className="text-black-200 dark:text-neutral-white leading-none  text-body-sm"
					>
						{data[0].sourceUrls[0]}{" "}
					</a>

					<span>
						<Image
							src={"/assets/icons/link.svg"}
							width={12}
							height={12}
							alt="link"
						/>
					</span>
				</div>
			</div>
		</div>
	);
};
