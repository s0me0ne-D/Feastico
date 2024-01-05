import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export const CheckedAnim = () => {
	return (
		<div>
			<DotLottiePlayer
				src="https://lottie.host/d6ba3d2f-348e-481a-b0f8-46a890021620/zLDVkm8Y7R.json"
				background="transparent"
				speed={1}
				style={{ width: "120px", height: "120px" }}
				direction={1}
				loop={false}
				autoplay
			></DotLottiePlayer>
		</div>
	);
};
