import React, { useState } from "react";
import AccountLogo from "../../../../../media/icons/AccountLogo.svg";
import { AccountMenu } from "./AccountMenu";

export const Account = () => {
	const [showMenu, setShowMenu] = useState(false);
	console.log(showMenu);
	return (
		<div
			className="header_account"
			onMouseEnter={() => {
				setShowMenu(true);
				console.log("on");
			}}
			onMouseLeave={() => setShowMenu(false)}
			onClick={() => {
				setShowMenu((prev) => !prev);
				console.log("click");
			}}
		>
			<img src={AccountLogo} alt="account" className="header_account-logo" />
			{showMenu && <AccountMenu />}
		</div>
	);
};
