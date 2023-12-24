import React from "react";

export const BurgerMenu = ({
	active,
	onClick,
}: {
	active: boolean;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div
			className={`menu_burger ${active ? "active-burger" : ""}`}
			onClick={() => onClick((prev) => !prev)}
		>
			<span className="menu_burger_line line-1"></span>
			<span className="menu_burger_line line-2"></span>
			<span className="menu_burger_line line-3"></span>
		</div>
	);
};
