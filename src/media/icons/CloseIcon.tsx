import React from "react";
import { IAttachedShoppingList } from "../../pages/recipe_page/recipe_page_components/ingredients/Ingredients";

export const CloseIcon = ({
	onClick,
	setShowPopup,
}: {
	onClick?: React.Dispatch<React.SetStateAction<boolean>>;
	setShowPopup?: React.Dispatch<React.SetStateAction<IAttachedShoppingList>>;
}) => {
	return (
		<svg
			onClick={(event) => {
				onClick && onClick(false);
				setShowPopup && setShowPopup({ attached: false, error: false });
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
