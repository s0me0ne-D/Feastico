import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export const AttentionAnim = () => {
	return (
		<div>
			<DotLottiePlayer
				src="https://lottie.host/5099c109-6dbf-479a-83cf-9b34b6a55b33/F7Sp4qZCOX.json"
				background="transparent"
				speed={1}
				style={{ width: "150px", height: "150px" }}
				direction={1}
				loop={false}
				autoplay
			></DotLottiePlayer>
		</div>
	);
};
