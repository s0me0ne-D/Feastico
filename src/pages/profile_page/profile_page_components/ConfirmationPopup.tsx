import React from "react";
import "./confirmationPopup.scss";
import { DeleteAccountAnim } from "../../../media/animations/DeleteAccountAnim";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { useDispatch } from "react-redux";
import { deleteUserData } from "../../../redux/userSlice";
import { NavLink } from "react-router-dom";

export const ConfirmationPopup = ({
	setToShow,
	top,
}: {
	setToShow: React.Dispatch<React.SetStateAction<boolean>>;
	top: number;
}) => {
	const popupRef = useOutsideClick(() => {
		setToShow(false);
	});
	const dispatch = useDispatch();

	return (
		<div ref={popupRef} className="confirmation-popup popup" style={{ top: `${top}px` }}>
			<DeleteAccountAnim />
			<span className="confirmation-popup_title">Are you sure?</span>
			<div className="confirmation-popup_text">
				<span>Do you realy want to delete this account?</span>
				<span>This process cannot be undone.</span>
			</div>
			<div className="confirmation-popup_btn-block">
				<button
					className="confirmation-popup_btn transparent-button"
					onClick={() => setToShow(false)}
				>
					Cancel
				</button>
				<NavLink
					to={"/"}
					className="confirmation-popup_btn color-button"
					onClick={() => dispatch(deleteUserData())}
				>
					Delete
				</NavLink>
			</div>
		</div>
	);
};
