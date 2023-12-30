import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../../redux/store";
import { NavLink } from "react-router-dom";
import "./accountMenu.scss";
import { ProfileIcon } from "../../../../../media/icons/ProfileIcon";
import { FavoritesIcon } from "../../../../../media/icons/FavoritesIcon";
import { SignOutIcon } from "../../../../../media/icons/SignOutIcon";
import { useDispatch } from "react-redux";
import { signOut } from "../../../../../redux/userSlice";

export const AccountMenu = () => {
	const { name } = useSelector((user: RootStore) => user.userReducer);
	const dispatch = useDispatch();
	return (
		<div className="account_menu">
			<span>Hy, {name}</span>
			<div className="account_menu_links">
				<NavLink to={"/"}>
					<ProfileIcon />
					Your profile
				</NavLink>
				<NavLink to={"/"}>
					<FavoritesIcon />
					Favorites recipes
				</NavLink>
			</div>
			<button onClick={() => dispatch(signOut({ isAuthorized: false }))}>
				<SignOutIcon /> Sing out
			</button>
		</div>
	);
};
