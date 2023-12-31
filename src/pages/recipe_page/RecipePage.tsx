import React, { useEffect, useState } from "react";
import { cookies } from "../../store/desserts/cookies";
import { Bookmark } from "../../media/icons/Bookmark";
import { RecipeRating } from "./recipe_page_components/RecipeRating";
import "./recipePage.scss";
import { RecipeVideo } from "./recipe_page_components/RecipeVideo";
import { Ingredients } from "./recipe_page_components/Ingredients";
import { Nutritions } from "./recipe_page_components/Nutritions";

export const RecipePage = () => {
	const [recipe, setRecipe] = useState<any | null>(null);
	const currentRecipe = cookies.results[4];
	useEffect(() => {
		setRecipe(currentRecipe);
	}, [currentRecipe]);

	return recipe ? (
		<div className="recipe main-margin">
			<div className="recipe_add">
				<Bookmark />
			</div>
			<div className="recipe_name">{recipe.name}</div>
			<RecipeRating userRating={recipe.user_ratings} />
			<div className="recipe_description">{recipe.description}</div>
			<RecipeVideo rendition={recipe.renditions[0]} imgUrl={recipe.thumbnail_url} />
			<div className="recipe_serving">
				{recipe.prep_time_minutes ? (
					<div className="recipe_serving_block">
						<span className="recipe_serving_block_title">PREP TIME</span>
						<span className="recipe_serving_block_context">{recipe.prep_time_minutes} MIN</span>
					</div>
				) : null}
				<div className="recipe_serving_block">
					<span className="recipe_serving_block_title">SERVINGS</span>
					<span className="recipe_serving_block_context">{recipe.num_servings} PEOPLE</span>
				</div>
			</div>
			<Ingredients sections={recipe.sections} />
			<Nutritions nutrition={recipe.nutrition} />
		</div>
	) : null;
};
