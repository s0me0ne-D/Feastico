import React from "react";
import { Logo } from "../../../media/logo/Logo";
import { NavBar } from "./header_elements/NavBar";
import { Search } from "./header_elements/Search";
import AccountLogo from "../../../media/icons/AccountLogo.svg";
import "./header.scss";

export const Header = () => {
	return (
		<div className="header">
			<Logo className="header-logo" />
			<NavBar />
			<div className="header_right-elements">
				<Search />
				<img src={AccountLogo} alt="account" className="header_account-logo" />
			</div>
		</div>
	);
};
