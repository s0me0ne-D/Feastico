import React from "react";
import { CheckedAnim } from "../../../../media/animations/CheckedAnim";
import { AttentionAnim } from "../../../../media/animations/AttentionAnim";
import { CloseIcon } from "../../../../media/icons/CloseIcon";
import { IAttachedShoppingList } from "./Ingredients";
import "./shoppingListPopup.scss";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";

export const ShoppingListPopup = ({
	isError,
	setShowPopup,
	scrolledPixels,
}: {
	isError: boolean;
	setShowPopup: React.Dispatch<React.SetStateAction<IAttachedShoppingList>>;
	scrolledPixels: number;
}) => {
	const popupRef = useOutsideClick(() => setShowPopup({ attached: false, error: false }));
	return (
		<div
			ref={popupRef}
			className="recipe_ingredients_popup popup"
			style={{ top: `${scrolledPixels}px` }}
		>
			{isError ? (
				<>
					<div className="recipe_ingredients_popup_close">
						<CloseIcon setShowPopup={setShowPopup} />
					</div>
					<div className="recipe_ingredients_popup_message">
						<AttentionAnim />
						<span>The list already exists</span>
						<span>
							Follow the link to view <a href="#">ToDoList</a>
						</span>
					</div>
				</>
			) : (
				<>
					<div className="recipe_ingredients_popup_close">
						<CloseIcon setShowPopup={setShowPopup} />
					</div>
					<div className="recipe_ingredients_popup_message">
						<CheckedAnim />
						<span>Shopping list added.</span>
						<span>
							Follow the link to view <a href="#">ToDoList</a>
						</span>
					</div>
				</>
			)}
		</div>
	);
};
