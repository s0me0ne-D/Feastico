import React, { useEffect, useState } from "react";
import "./ingredients.scss";
import { IngredientsComponent } from "./IngredientsComponent";
import { setListToToDoList } from "../../../../utils/setListToToDoList";
import { Popup } from "../Popup";
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
export interface IAttachedShoppingList {
	attached: boolean;
	error: boolean;
}
export const Ingredients = ({ sections, dishName }: { sections: Sections; dishName: string }) => {
	const [shoppingList, setShoppingList] = useState<string[]>([]);
	const [attachedShoppingList, setAttachedShoppingList] = useState<IAttachedShoppingList>({
		attached: false,
		error: false,
	});
	const [scrolledPixels, setScrollPixels] = useState(0);
	useEffect(() => {
		setScrollPixels(Math.round(window.scrollY));
	}, [attachedShoppingList]);
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
					setListToToDoList({ shoppingList, dishName, setAttachedShoppingList });
				}}
			>
				Add to Shopping List
			</button>
			{attachedShoppingList.attached || attachedShoppingList.error ? (
				<Popup
					isError={attachedShoppingList.error}
					setShowPopup={setAttachedShoppingList}
					scrolledPixels={scrolledPixels}
				/>
			) : null}
		</div>
	);
};
