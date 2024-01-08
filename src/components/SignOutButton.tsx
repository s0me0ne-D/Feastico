import React from "react";
import { NavLink } from "react-router-dom";
import { SignOutIcon } from "../media/icons/SignOutIcon";
import { useDispatch } from "react-redux";
import { signOut } from "../redux/userSlice";
import "./signOutButton.scss";

export const SignOutButton = () => {
	const dispatch = useDispatch();
	return (
		<NavLink
			className={"sign-out-button"}
			to={"/"}
			onClick={() => dispatch(signOut({ isAuthorized: false }))}
		>
			<SignOutIcon /> Sing out
		</NavLink>
	);
};
