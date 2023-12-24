import React from "react";

export const CloseIcon = ({
	onClick,
}: {
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<svg
			onClick={(event) => {
				onClick(false);
				event.preventDefault();
				event.stopPropagation();
			}}
			xmlns="http://www.w3.org/2000/svg"
			height="24"
			viewBox="0 -960 960 960"
			width="24"
		>
			<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
		</svg>
	);
};
