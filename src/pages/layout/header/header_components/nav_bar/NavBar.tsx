import React, { useState } from "react";
import { ArrowDown } from "../../../../../media/icons/ArrowDown";
import { CategorieHeadline, Categories } from "./Categories";

type Section = CategorieHeadline[];

export const NavBar = () => {
	const sections: Section = ["Popular", "Ingredients", "Diets", "Meals", "Desserts"];
	const [showCategories, setShowCategories] = useState("");
	return (
		<nav className="header_nav-bar">
			{sections.map((section) => (
				<button
					className="header_nav-bar_section section"
					key={section}
					onMouseEnter={() => {
						setShowCategories(section);
					}}
				>
					<span
						className="section_title"
						onMouseEnter={() => {
							setShowCategories(section);
						}}
					>
						{section}
					</span>
					<ArrowDown />
					{showCategories === section && (
						<Categories categorieHeadline={section} setShowCategories={setShowCategories} />
					)}
				</button>
			))}
		</nav>
	);
};
