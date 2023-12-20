import React from "react";
import { desserts } from "../../../store/meals_recipes/desserts";
import "./title.scss";
import { RatingComponent } from "../../../components/RatingComponent";
import ArrowRightIcon from "../../../media/icons/ArrowRightIcon";
export const Title = () => {
	const recipe = desserts.results[3];
	console.log(recipe);
	return (
		<div className="home_title">
			<div className="home_title_poster">
				<img alt="dessert" src={recipe.thumbnail_url} />
			</div>
			<div className="home_title_description">
				<span className="home_title_description_headline">{recipe.name}</span>
				<span className="home_title_description_text">{recipe.description}</span>
				<RatingComponent value={recipe.user_ratings.score} />
				<ArrowRightIcon />
			</div>
		</div>
	);
};
