import React from "react";
import { LikeIcon } from "../../../media/icons/LikeIcon";
import { DeslikeIcon } from "../../../media/icons/DeslikeIcon";
import { RatingComponent } from "../../../components/RatingComponent";
import "./recipeRating.scss";
export interface IUserRatings {
	count_positive: number;
	score: number;
	count_negative: number;
}

export const RecipeRating = ({ userRating }: { userRating: IUserRatings }) => {
	const score = (userRating.score * 10).toFixed(2);
	return (
		<div className="recipe_rating">
			<div className="recipe_rating_users shadow-color">
				<LikeIcon />
				<span className="recipe_rating_users_count">{userRating.count_positive}</span>
			</div>
			<div className="recipe_rating_users shadow-color">
				<DeslikeIcon />
				<span className="recipe_rating_users_count">{userRating.count_negative}</span>
			</div>
			<div className="recipe_rating_users">
				<RatingComponent value={userRating.score} />{" "}
				<span className="recipe_rating_users_count">{score}</span>
			</div>
		</div>
	);
};
