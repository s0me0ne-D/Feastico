import React, { useState } from "react";
import AccountLogo from "../../../../../media/icons/AccountLogo.svg";
import { AccountMenu } from "./AccountMenu";

export const Account = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div
			className="header_account"
			onMouseEnter={() => {
				setShowMenu(true);
			}}
			onMouseLeave={() => setShowMenu(false)}
			onClick={() => {
				setShowMenu((prev) => !prev);
			}}
		>
			<img src={AccountLogo} alt="account" className="header_account-logo" />
			{showMenu && <AccountMenu />}
		</div>
	);
};
