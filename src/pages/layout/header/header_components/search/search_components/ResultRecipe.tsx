import React from "react";
import { NavLink } from "react-router-dom";
import { RatingComponent } from "../../../../../../components/RatingComponent";

export const ResultRecipe = ({
	recipe,
	onClick,
}: {
	recipe: any;
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<NavLink
			to={`/recipe/${recipe.id}`}
			className="search_results_recipe"
			onClick={() => onClick(false)}
		>
			<img src={recipe.thumbnail_url} alt={recipe.name} />
			<div className="search_results_recipe_description">
				<span className="search_results_recipe_name">{recipe.name}</span>
				{recipe.user_ratings.score && <RatingComponent value={recipe.user_ratings.score} />}
			</div>
		</NavLink>
	);
};
