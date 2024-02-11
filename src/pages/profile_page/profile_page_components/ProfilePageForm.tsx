import React, { useState } from "react";
import "./profilePageForm.scss";
import { NameProfileForm } from "./NameProfileForm";
import { MailProfileForm } from "./MailProfileForm";
import { PasswordProfileForm } from "./PasswordProfileForm";
import { ConfirmPasswordProfileForm } from "./ConfirmPasswordProfileForm";
import { IUser } from "../../../interface/user_interfsce";
import { useSelector } from "react-redux";
import { RootStore } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { editUserData } from "../../../redux/userSlice";

export type ICurrentUserData = Omit<IUser, "favourites" | "isAuthorized" | "userId">;

export const ProfilePageForm = ({
	errorPassword,
	setErrorPassword,
	setShowSaveConfirmationPopup,
}: {
	errorPassword: boolean;
	setErrorPassword: React.Dispatch<React.SetStateAction<boolean>>;
	setShowSaveConfirmationPopup: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { email, name, password } = useSelector((user: RootStore) => user.userReducer);
	const [currentUserData, setCurrentUserData] = useState<ICurrentUserData>({
		email,
		name,
		password,
	});
	const dispatch = useDispatch();
	return (
		<form
			className="profile_form"
			onSubmit={(event) => {
				if (!errorPassword) {
					dispatch(editUserData(currentUserData));
					setShowSaveConfirmationPopup(true);
				} else {
					event.preventDefault();
					event.stopPropagation();
				}
			}}
		>
			<NameProfileForm value={currentUserData.name} setData={setCurrentUserData} />
			<MailProfileForm value={currentUserData.email} setData={setCurrentUserData} />
			<PasswordProfileForm value={currentUserData.password} setData={setCurrentUserData} />
			<ConfirmPasswordProfileForm
				currentPassword={currentUserData.password}
				setErrorPassword={setErrorPassword}
				errorPassword={errorPassword}
			/>
			<div className="profile_form_submit-block">
				<button type="submit">SAVE</button>
			</div>
		</form>
	);
};
