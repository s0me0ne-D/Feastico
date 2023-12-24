import React, { useState } from "react";
import { Logo } from "../../../media/logo/Logo";
import { NavBar } from "./header_components/nav_bar/NavBar";
import { Search } from "./header_components/search/Search";
import AccountLogo from "../../../media/icons/AccountLogo.svg";
import "./header.scss";
import { BurgerMenu } from "./header_components/BurgerMenu";
import { useOutsideClick } from "../../../hooks/useOutsideClick";

export const Header = () => {
	const [active, setActive] = useState(false);
	const menuRef = useOutsideClick(() => setActive(false));
	return (
		<div className="header">
			<Logo className="header-logo" />
			<div className="menu" ref={menuRef}>
				<BurgerMenu active={active} onClick={setActive} />
				<NavBar onActive={active} />
			</div>
			<div className="header_right-elements">
				<Search />
				<img src={AccountLogo} alt="account" className="header_account-logo" />
			</div>
		</div>
	);
};
