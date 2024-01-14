import React from "react";
import "./recipes.scss";
import { Recipe } from "./Recipe";

export const Recipes = ({ recipes, title }: { recipes: any; title?: string }) => {
	return (
		<div className="home_page_categorie categorie">
			{title && <span className="categorie_title">{title}</span>}
			<div className="categorie_recipes">
				{recipes.map((recipe: any) => (
					<Recipe recipe={recipe} key={recipe.id} />
				))}
			</div>
		</div>
	);
};
