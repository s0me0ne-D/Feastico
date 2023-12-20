import React, { useEffect, useState } from "react";
import { categoriesHandler } from "./categoriesHandler";
import { NavLink } from "react-router-dom";

export type CategorieHeadline = "Popular" | "Ingredients" | "Diets" | "Meals" | "Desserts";

export const Categories = ({
	categorieHeadline,
	setShowCategories,
}: {
	categorieHeadline: CategorieHeadline;
	setShowCategories: React.Dispatch<React.SetStateAction<string>>;
}) => {
	const [categories, setCategories] = useState<string[] | undefined>([]);
	useEffect(() => {
		setCategories(categoriesHandler(categorieHeadline));
	}, [categorieHeadline]);
	return (
		<ul
			className="section_categories"
			onMouseLeave={() => {
				setShowCategories("");
			}}
		>
			{categories?.map((categorie) => (
				<li key={categorie}>
					<NavLink to={"/"}>{categorie}</NavLink>
				</li>
			))}
		</ul>
	);
};
