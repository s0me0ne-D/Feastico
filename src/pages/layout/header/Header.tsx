import React, { useState } from "react";
import { Logo } from "../../../media/logo/Logo";
import { NavBar } from "./header_components/nav_bar/NavBar";
import { Search } from "./header_components/search/Search";
import "./header.scss";
import { BurgerMenu } from "./header_components/BurgerMenu";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { Account } from "./header_components/account/Account";
import { NavLink } from "react-router-dom";

export const Header = () => {
	const [active, setActive] = useState(false);

	const menuRef = useOutsideClick(() => setActive(false));

	return (
		<div className="header">
			<NavLink to={"/"}>
				<Logo className="header-logo" />
			</NavLink>
			<div className="menu" ref={menuRef}>
				<BurgerMenu active={active} onClick={setActive} />
				<NavBar onActive={active} />
			</div>
			<div className="header_right-elements">
				<Search />
				<Account />
			</div>
		</div>
	);
};
