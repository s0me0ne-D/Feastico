import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

export const DeleteAccountAnim = () => {
	return (
		<div>
			<DotLottiePlayer
				src="https://lottie.host/e3d759b6-b87e-42d1-b850-d8f3834166ed/Y22McFgxPd.json"
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
