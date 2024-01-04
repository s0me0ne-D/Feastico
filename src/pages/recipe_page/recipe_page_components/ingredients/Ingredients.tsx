import React, { useEffect, useState } from "react";
import "./ingredients.scss";
import { IngredientsComponent } from "./IngredientsComponent";
import { setListToToDoList } from "../../../../utils/setListToToDoList";
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
export const Ingredients = ({ sections, dishName }: { sections: Sections; dishName: string }) => {
	const [shoppingList, setShoppingList] = useState<string[]>([]);
	useEffect(() => {
		sections.forEach((section) => {
			section.components.forEach((component) => {
				if (!shoppingList.includes(component.raw_text)) {
					setShoppingList((prev) => [...prev, component.raw_text]);
				}
			});
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [sections]);

	return (
		<div className="recipe_ingredients">
			<h2>Ingredients</h2>
			{sections.map((section) => (
				<div className="recipe_ingredients_section" key={section.position}>
					{section.name && (
						<span className="recipe_ingredients_section_title">For the {section.name}</span>
					)}
					<ul>
						{section.components.map(
							(component) =>
								component.raw_text !== "n/a" && (
									<IngredientsComponent
										rawText={component.raw_text}
										key={component.id}
										setShoppingList={setShoppingList}
									/>
								)
						)}
					</ul>
				</div>
			))}
			<button
				onClick={() => {
					setListToToDoList({ shoppingList, dishName });
				}}
			>
				Add to Shopping List
			</button>
		</div>
	);
};
