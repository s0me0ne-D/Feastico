import React, { useRef, useState } from "react";
import { PlayIcon } from "../../../media/icons/PlayIcon";
import "./recipeVideo.scss";
interface IRendition {
	aspect: string;
	width: number;
	name: string;
	container: string;
	poster_url: string;
	file_size?: number;
	content_type: string;
	minimum_bit_rate?: number;
	maximum_bit_rate?: number;
	height: number;
	url: string;
	duration: number;
	bit_rate?: number;
}

export const RecipeVideo = ({ rendition, imgUrl }: { rendition: IRendition; imgUrl: string }) => {
	const [showPoster, setShowPoster] = useState(true);
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const playVideo = () => {
		if (videoRef.current) {
			videoRef.current.play();
		}
	};
	return (
		<div className="recipe_video">
			{showPoster && (
				<div
					// style={{ width: `${rendition.width}px` }}
					className="recipe_video_poster"
					onClick={() => {
						setShowPoster(false);
						playVideo();
					}}
				>
					<img src={imgUrl} alt="video_poster" />
					<PlayIcon />
				</div>
			)}
			<video ref={videoRef} controls width={"100%"} onPlay={() => setShowPoster(false)}>
				<source src={rendition.url} type="video/mp4"></source>
			</video>
		</div>
	);
};
