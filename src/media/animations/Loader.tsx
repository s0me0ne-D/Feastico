import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export const Loader = () => {
	return (
		<div
			className="loader"
			style={{ width: "100%", height: "100%", display: "grid", placeContent: "center" }}
		>
			<DotLottiePlayer
				src="https://lottie.host/908bade5-8783-49e9-8b36-3e8346091535/VknGLtXmI3.json"
				background="transparent"
				speed={1}
				style={{ width: "150px", height: "150px" }}
				direction={1}
				loop
				autoplay
			></DotLottiePlayer>
		</div>
	);
};
