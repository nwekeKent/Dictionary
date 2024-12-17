import React, { useRef } from "react";
import Image from "next/image";

interface ContentHeaderProps {
	data: {
		word: string;
		phonetics: Array<{
			text?: string;
			audio?: string;
		}>;
	};
}

export const ContentHeader = ({ data }: ContentHeaderProps) => {
	const audioRef = useRef<HTMLAudioElement>(null);

	const filterAudio = () => {
		// First try to find an object with both valid text and audio
		const complete = data.phonetics.find(
			item =>
				typeof item.text === "string" &&
				item.text.trim() !== "" &&
				typeof item.audio === "string" &&
				item.audio.trim() !== ""
		);

		if (complete) return complete;

		// If no complete object found, construct one from available data
		const text = data.phonetics.find(
			item => typeof item.text === "string" && item.text.trim() !== ""
		)?.text;

		const audio = data.phonetics.find(
			item => typeof item.audio === "string" && item.audio.trim() !== ""
		)?.audio;

		if (text || audio) {
			return { text, audio };
		}

		return null;
	};

	const playAudio = () => {
		if (audioRef.current) {
			audioRef.current.play();
		}
	};

	const phonetics = filterAudio();
	return (
		<div className="flex justify-between items-center ">
			<div>
				<h1 className="text-black-200 dark:text-neutral-white font-bold md:text-heading-2xl text-heading-xl leading-none">
					{data.word}
				</h1>

				{phonetics && (
					<p className="text-primary-purple text-body-lg md:text-heading-lg font-normal leading-none mt-2">
						{phonetics.text}
					</p>
				)}
			</div>

			{phonetics && (
				<>
					<audio ref={audioRef} src={phonetics.audio} />
					<Image
						src={"/assets/icons/play.svg"}
						alt="play-button"
						height={75}
						width={75}
						onClick={playAudio}
					/>
				</>
			)}
		</div>
	);
};
