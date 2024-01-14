import React, { useEffect, useState } from "react";
import { cookies } from "../../store/desserts/cookies";
import { RecipeRating } from "./recipe_page_components/RecipeRating";
import "./recipePage.scss";
import { RecipeVideo } from "./recipe_page_components/RecipeVideo";
import { Ingredients } from "./recipe_page_components/ingredients/Ingredients";
import { Nutritions } from "./recipe_page_components/Nutritions";
import { Instructions } from "./recipe_page_components/Instructions";
import { Favourite } from "../../components/Favourite";
import { useParams } from "react-router-dom";
import { useGetRecipeByIdQuery } from "../../redux/api/api";

export const RecipePage = () => {
	const recipeId = useParams().recipeId;
	const { isLoading, data, isError } = useGetRecipeByIdQuery(recipeId);
	useEffect(() => {
		console.log(data);
	}, [data]);
	return isLoading ? (
		<>Loading...</>
	) : data ? (
		<div className="recipe main-margin">
			<Favourite recipe={data} />
			<h2>{data.name}</h2>
			<RecipeRating userRating={data.user_ratings} />
			<div className="recipe_description">{data.description}</div>
			<RecipeVideo rendition={data.renditions[0]} imgUrl={data.thumbnail_url} />
			<div className="recipe_serving">
				{data.prep_time_minutes ? (
					<div className="recipe_serving_block">
						<span className="recipe_serving_block_title">PREP TIME</span>
						<span className="recipe_serving_block_context">{data.prep_time_minutes} MIN</span>
					</div>
				) : null}
				<div className="recipe_serving_block">
					<span className="recipe_serving_block_title">SERVINGS</span>
					<span className="recipe_serving_block_context">{data.num_servings} PEOPLE</span>
				</div>
			</div>
			<div className="recipe_main">
				<Ingredients sections={data.sections} dishName={data.name} />
				<Instructions instructions={data.instructions} />
				<Nutritions nutrition={data.nutrition} />
			</div>
		</div>
	) : null;
};
