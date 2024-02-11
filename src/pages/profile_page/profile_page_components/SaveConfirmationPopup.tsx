import React from "react";
import { CheckedAnim } from "../../../media/animations/CheckedAnim";
import { CloseIcon } from "../../../media/icons/CloseIcon";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

export const SaveConfirmationPopup = ({
	setShowSaveConfirmationPopup,
}: {
	setShowSaveConfirmationPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const saveRef = useOutsideClick(() => setShowSaveConfirmationPopup(false));
	return (
		<div ref={saveRef} className="popup confirmation-popup">
			<div className="recipe_ingredients_popup_close">
				<CloseIcon setShowSaveConfirmationPopup={setShowSaveConfirmationPopup} />
			</div>
			<CheckedAnim />
			<span className="confirmation-popup_text">
				Your changes have been saved successfully saved!
			</span>
			<div className="confirmation-popup_btn-block"></div>
		</div>
	);
};
