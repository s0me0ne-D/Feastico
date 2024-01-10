import React from "react";
import { NavLink } from "react-router-dom";
import { SignOutIcon } from "../media/icons/SignOutIcon";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/userSlice";
import "./signOutButton.scss";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import { editUserDataStorage } from "../utils/editUserDataStorage";

export const SignOutButton = () => {
	const dispatch = useDispatch();
	const userData = useSelector((state: RootStore) => state.userReducer);
	return (
		<NavLink
			className={"sign-out-button"}
			to={"/"}
			onClick={() => {
				editUserDataStorage({ ...userData, isAuthorized: false });
				dispatch(signOut({ isAuthorized: false }));
			}}
		>
			<SignOutIcon /> Sing out
		</NavLink>
	);
};
