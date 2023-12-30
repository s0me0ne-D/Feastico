import React, { useState } from "react";
import { MoreInfo } from "../../../components/more_info/MoreInfo";
import { RatingComponent } from "../../../components/RatingComponent";

export const Recipe = ({ recipe }: { recipe: any }) => {
	const [showMoreInfo, setShowMoreInfo] = useState(false);
	return (
		<div
			className="categorie_recipes_recipe"
			key={recipe.canonical_id}
			onMouseEnter={() => setShowMoreInfo(true)}
			onMouseLeave={() => setShowMoreInfo(false)}
		>
			{showMoreInfo && <MoreInfo recipe={recipe} />}
			<img src={recipe.thumbnail_url} alt={recipe.name} />
			<div className="categorie_recipes_recipe_description">
				<RatingComponent value={recipe.user_ratings.score} />
				<span className="categorie_recipes_recipe_description_name">{recipe.name}</span>
			</div>
		</div>
	);
};
