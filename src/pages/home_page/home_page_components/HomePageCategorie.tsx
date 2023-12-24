import React from "react";
import { IRecipeResults } from "../../../interface/recipes";
import { RatingComponent } from "../../../components/RatingComponent";

export const HomePageCategorie = ({
	recipes,
	title,
}: {
	recipes: IRecipeResults[];
	title: string;
}) => {
	return (
		<div className="home_page_categorie categorie">
			<span>{title}</span>
			{recipes.map((recipe) => (
				<div className="categorie_recipe">
					<img src={recipe.thumbnail_url} alt={recipe.name} />
					<RatingComponent value={recipe.user_ratings.score} />
					<span>{recipe.name}</span>
				</div>
			))}
		</div>
	);
};
