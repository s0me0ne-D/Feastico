import React from "react";
import { ProfilePageForm } from "./profile_page_components/ProfilePageForm";
import { SignOutButton } from "../../components/SignOutButton";
import "./profilePage.scss";
import { ProfileLogo } from "../../media/icons/ProfileLogo";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

export const ProfilePage = () => {
	const { name } = useSelector((user: RootStore) => user.userReducer);
	return (
		<div className="profile main-margin">
			<div className="profile_title">
				<h2>Profile</h2>
				<button>SAVE</button>
			</div>
			<div className="profile_logo">
				<ProfileLogo />
				<span>{name}</span>
			</div>
			<ProfilePageForm />
			<div className="profile_conteiner">
				<SignOutButton />
				<button className="profile_conteiner_delete-button">Delete Account</button>
			</div>
		</div>
	);
};
