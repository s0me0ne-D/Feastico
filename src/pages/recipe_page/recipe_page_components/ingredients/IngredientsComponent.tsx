import React, { useEffect, useState } from "react";

export const IngredientsComponent = ({
	rawText,
	setShoppingList,
}: {
	rawText: string;
	setShoppingList: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
	const [checked, setChecked] = useState<boolean>(false);
	useEffect(() => {
		if (checked) {
			setShoppingList((prev) => prev.filter((item) => item !== rawText));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [checked]);

	const checkedHandler = () => {
		setChecked((prev) => {
			if (prev) {
				setShoppingList((prev) => [...prev, rawText]);
			}
			return !prev;
		});
	};

	return (
		<li
			className="recipe_ingredients_section_component"
			onClick={() => setChecked((prev) => !prev)}
		>
			<input type="checkbox" checked={checked} onChange={() => checkedHandler()} />
			<span className={checked ? "checked-component" : ""}>{rawText}</span>
		</li>
	);
};
