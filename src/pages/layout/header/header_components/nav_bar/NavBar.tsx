import React, { useState } from "react";
import { ArrowDown } from "../../../../../media/icons/ArrowDown";
import { CategorieHeadline, Categories } from "./Categories";
import { useOutsideClick } from "../../../../../hooks/useOutsideClick";

type Section = CategorieHeadline[];

export const NavBar = ({ onActive }: { onActive: boolean }) => {
	const sections: Section = ["Popular", "Ingredients", "Diets", "Meals", "Desserts"];
	const [showCategories, setShowCategories] = useState("");
	const navBarRef = useOutsideClick(() => setShowCategories(""));
	return (
		<>
			<nav ref={navBarRef} className={`header_nav-bar ${onActive ? "active" : ""}`}>
				{sections.map((section) => (
					<div
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
					</div>
				))}
			</nav>
		</>
	);
};
