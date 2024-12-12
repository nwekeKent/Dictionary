import React from "react";
import { ContentHeader } from "./ContentHeader";

const mockData = [
	{
		word: "keyboard",
		phonetic: "/ˈkiːbɔːd/",
		phonetics: [
			{
				text: "/ˈkiːbɔːd/",
				audio: "",
			},
			{
				text: "/ˈkiːbɔːd/",
				audio: "",
			},
			{
				text: "/ˈkibɔɹd/",
				audio:
					"https://api.dictionaryapi.dev/media/pronunciations/en/keyboard-us.mp3",
				sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=1755168",
				license: {
					name: "BY-SA 3.0",
					url: "https://creativecommons.org/licenses/by-sa/3.0",
				},
			},
		],
		meanings: [
			{
				partOfSpeech: "noun",
				definitions: [
					{
						definition:
							"(etc.) A set of keys used to operate a typewriter, computer etc.",
						synonyms: [],
						antonyms: [],
					},
					{
						definition:
							"A component of many instruments including the piano, organ, and harpsichord consisting of usually black and white keys that cause different tones to be produced when struck.",
						synonyms: [],
						antonyms: [],
					},
					{
						definition:
							"A device with keys of a musical keyboard, used to control electronic sound-producing devices which may be built into or separate from the keyboard device.",
						synonyms: [],
						antonyms: [],
					},
				],
				synonyms: ["electronic keyboard"],
				antonyms: [],
			},
			{
				partOfSpeech: "verb",
				definitions: [
					{
						definition: "To type on a computer keyboard.",
						synonyms: [],
						antonyms: [],
						example: "Keyboarding is the part of this job I hate the most.",
					},
				],
				synonyms: [],
				antonyms: [],
			},
		],
		license: {
			name: "CC BY-SA 3.0",
			url: "https://creativecommons.org/licenses/by-sa/3.0",
		},
		sourceUrls: ["https://en.wiktionary.org/wiki/keyboard"],
	},
];

export const ContentArea = () => {
	return (
		<div className="md:mt-12 mt-6">
			<ContentHeader
				headerData={{
					word: mockData[0].word,
					phonetics: mockData[0].phonetics,
				}}
			/>

			{mockData[0].meanings.map((meaning, index) => {
				return (
					<div className="md:mt-10 mt-8" key={index}>
						<div className="flex gap-5 items-center md:mb-10 mb-8">
							<h3 className="font-bold text-heading-lg text-black-200 dark:text-neutral-white leading-none">
								{meaning.partOfSpeech}
							</h3>
							<div className="w-full h-[1px] bg-neutral-faded-grey"></div>
						</div>

						<p className="text-neutral-grey text-[16px] mdtext-heading-sm leading-none mb-6">
							Meaning
						</p>
						<ul className="list-disc marker:text-primary-purple md:ml-10 ml-4">
							{meaning.definitions.map((definition, index) => {
								return (
									<li
										key={index}
										className="text-black-200 dark:text-neutral-white md:text-body-lg text-body-sm leading-6 mb-[13]"
									>
										{definition.definition}

										{definition.example && (
											<span className="block text-neutral-grey md:text-body-lg text-body-sm mt-[13px]">
												{`"${definition.example}"`}
											</span>
										)}
									</li>
								);
							})}
						</ul>
					</div>
				);
			})}
		</div>
	);
};
