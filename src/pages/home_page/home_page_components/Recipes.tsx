import React from "react";
import { RatingComponent } from "../../../components/RatingComponent";
import "./recipes.scss";
import { MoreInfo } from "../../../components/more_info/MoreInfo";

export const Recipes = ({ recipes, title }: { recipes: any; title: string }) => {
	return (
		<div className="home_page_categorie categorie">
			<span className="categorie_title">{title}</span>
			<div className="categorie_recipes">
				{recipes.map((recipe: any) => (
					<div className="categorie_recipes_recipe" key={recipe.canonical_id}>
						<MoreInfo recipe={recipe} />
						<img src={recipe.thumbnail_url} alt={recipe.name} />
						<div className="categorie_recipes_recipe_description">
							<RatingComponent value={recipe.user_ratings.score} />
							<span className="categorie_recipes_recipe_description_name">{recipe.name}</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
