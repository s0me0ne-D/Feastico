import React, { useState } from "react";
import { MoreInfo } from "./more_info/MoreInfo";
import { RatingComponent } from "./RatingComponent";

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
				{recipe.user_ratings?.score && <RatingComponent value={recipe.user_ratings.score} />}
				<span>{recipe.name}</span>
			</div>
		</div>
	);
};
