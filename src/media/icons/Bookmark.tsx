import React, { useState } from "react";

export const Bookmark = ({ isFavorite, onClick }: { isFavorite: boolean; onClick: () => void }) => {
	const [mouseOn, setMouseOn] = useState(false);
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			height="25"
			viewBox="0 -960 960 960"
			width="25"
			onMouseEnter={() => setMouseOn(true)}
			onMouseLeave={() => setMouseOn(false)}
			onClick={onClick}
		>
			<path
				className={isFavorite ? "is-favorite" : ""}
				d={`M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86
					 ${!isFavorite || mouseOn ? "200 86v-518H280v518Zm0-518h400-400Z" : ""}`}
			/>
		</svg>
	);
};
