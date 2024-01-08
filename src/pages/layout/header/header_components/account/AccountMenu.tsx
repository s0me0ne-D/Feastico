import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../../redux/store";
import { NavLink } from "react-router-dom";
import "./accountMenu.scss";
import { ProfileIcon } from "../../../../../media/icons/ProfileIcon";
import { FavoritesIcon } from "../../../../../media/icons/FavoritesIcon";
import { SignOutButton } from "../../../../../components/SignOutButton";

export const AccountMenu = () => {
	const { name } = useSelector((user: RootStore) => user.userReducer);
	return (
		<div className="account_menu">
			<div className="account_menu_wrapper">
				<span>Hy, {name}</span>
				<div className="account_menu_links">
					<NavLink to={"/profile"}>
						<ProfileIcon />
						Your profile
					</NavLink>
					<NavLink to={"/"}>
						<FavoritesIcon />
						Favorites recipes
					</NavLink>
				</div>
				<SignOutButton />
			</div>
		</div>
	);
};
