import React from "react";

interface INutrition {
	protein: number;
	fat: number;
	calories: number;
	sugar: number;
	carbohydrates: number;
	fiber: number;
	updated_at: string;
}
export const Nutritions = ({ nutrition }: { nutrition: INutrition }) => {
	return (
		<div className="recipe_nutrition">
			<span className="recipe_nutrition_title">Nutrition</span>
			<ul>
				<li>
					<span>Calories</span>
					<span>{nutrition.calories}</span>
				</li>
				<li>
					<span>Protein</span>
					<span>{nutrition.protein} g</span>
				</li>
				<li>
					<span>Fat</span>
					<span>{nutrition.fat} g</span>
				</li>
				<li>
					<span>Sugar</span>
					<span>{nutrition.sugar} g</span>
				</li>
				<li>
					<span>Carbohydrates</span>
					<span>{nutrition.carbohydrates} g</span>
				</li>
			</ul>
		</div>
	);
};
