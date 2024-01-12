import React, { useState, useEffect } from "react";
import { ProfilePageForm } from "./profile_page_components/ProfilePageForm";
import { SignOutButton } from "../../components/SignOutButton";
import "./profilePage.scss";
import { ProfileLogo } from "../../media/icons/ProfileLogo";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { ConfirmationPopup } from "./profile_page_components/ConfirmationPopup";

export const ProfilePage = () => {
	const { name } = useSelector((user: RootStore) => user.userReducer);
	const [errorPassword, setErrorPassword] = useState<boolean>(false);
	const [showConfirmationPopup, setShowConfirmationPopup] = useState<boolean>(false);
	const [scrolledPixels, setScrollPixels] = useState(0);
	useEffect(() => {
		setScrollPixels(Math.round(window.scrollY));
	}, [showConfirmationPopup]);

	return (
		<div className="profile main-margin">
			<div className="profile_title">
				<h2>Profile</h2>
			</div>
			<div className="profile_logo">
				<ProfileLogo />
				<span>{name}</span>
			</div>
			<ProfilePageForm errorPassword={errorPassword} setErrorPassword={setErrorPassword} />
			<div className="profile_conteiner">
				<SignOutButton />
				<button
					className="profile_conteiner_delete-button"
					onClick={() => setShowConfirmationPopup(true)}
				>
					Delete Account
				</button>
			</div>
			{showConfirmationPopup && (
				<ConfirmationPopup top={scrolledPixels} setToShow={setShowConfirmationPopup} />
			)}
		</div>
	);
};
