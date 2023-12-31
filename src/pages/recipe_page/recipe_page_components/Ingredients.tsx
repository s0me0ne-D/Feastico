import React from "react";
import "./ingredients.scss";
type Sections = ISection[];

interface ISection {
	components: IComponent[];
	name: string;
	position: number;
}
interface IComponent {
	raw_text: string;
	extra_comment: string;
	ingredient: IIngredient;
	id: number;
	position: number;
	measurements: IMeasurement[];
}
interface IIngredient {
	id: number;
	display_singular: string;
	updated_at: number;
	name: string;
	created_at: number;
	display_plural: string;
}
interface IMeasurement {
	unit: IUnit;
	quantity: string;
	id: number;
}
interface IUnit {
	abbreviation: string;
	system: string;
	name: string;
	display_plural: string;
	display_singular: string;
}
export const Ingredients = ({ sections }: { sections: Sections }) => {
	return (
		<div className="recipe_ingredients">
			<span className="recipe_ingredients_title">Ingredients</span>
			{sections.map((section) => (
				<div className="recipe_ingredients_section" key={section.position}>
					{section.name && (
						<span className="recipe_ingredients_section_title">For the {section.name}</span>
					)}
					<ul>
						{section.components.map(
							(component) =>
								component.raw_text !== "n/a" && (
									<li className="recipe_ingredients_section_component" key={component.id}>
										<input type="checkbox" />
										{component.raw_text}
									</li>
								)
						)}
					</ul>
				</div>
			))}
		</div>
	);
};
