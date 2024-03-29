import React from "react";
import { desserts } from "../../../store/desserts";
import "./title.scss";
import { RatingComponent } from "../../../components/RatingComponent";
import ArrowRightIcon from "../../../media/icons/ArrowRightIcon";
import { NavLink } from "react-router-dom";
export const Title = () => {
	const recipe = desserts.results[3];
	return (
		<div className="home_title">
			<img className="home_title_poster" alt="dessert" src={recipe.thumbnail_url} />
			<div className="home_title_description">
				<span className="home_title_description_headline">{recipe.name}</span>
				<span className="home_title_description_text">{recipe.description}</span>
				<RatingComponent value={recipe.user_ratings.score} />
				<NavLink to={`/recipe/${recipe.id}`}>
					<ArrowRightIcon />
				</NavLink>
			</div>
		</div>
	);
};
