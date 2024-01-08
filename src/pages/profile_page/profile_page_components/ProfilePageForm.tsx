import React, { useState } from "react";
import "./profilePageForm.scss";
import { NameProfileForm } from "./NameProfileForm";
import { MailProfileForm } from "./MailProfileForm";
import { PasswordProfileForm } from "./PasswordProfileForm";
import { ConfirmPasswordProfileForm } from "./ConfirmPasswordProfileForm";
import { IUser } from "../../../interface/user_interfsce";
import { useSelector } from "react-redux";
import { RootStore } from "../../../redux/store";

export const ProfilePageForm = () => {
	const { email, name, password } = useSelector((user: RootStore) => user.userReducer);
	const [currentUserData, setCurrentUserData] = useState<
		Omit<IUser, "favourites" | "isAuthorized">
	>({ email, name, password });
	const [confirmPassword, setConfirmPassword] = useState<string>(password);
	return (
		<form className="profile_form">
			<NameProfileForm value={currentUserData.name} />
			<MailProfileForm value={currentUserData.email} />
			<PasswordProfileForm value={currentUserData.password} />
			<ConfirmPasswordProfileForm
				currentPassword={currentUserData.password}
				value={confirmPassword}
			/>
			<div className="profile_form_btn-block">
				<button type="submit">Change</button>
			</div>
		</form>
	);
};
