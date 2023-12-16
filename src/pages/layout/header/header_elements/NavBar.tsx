import React from "react";
import { ArrowDown } from "../../../../media/icons/ArrowDown";

export const NavBar = () => {
	const sections = ["Popular", "Ingredients", "Diets", "Meals", "Desserts"];
	return (
		<nav className="header_nav-bar">
			{sections.map((section) => (
				<button className="header_nav-bar_section section" key={section}>
					<span className="section_title">{section}</span>
					<ArrowDown />
				</button>
			))}
		</nav>
	);
};
