import React, { useEffect, useState } from "react";
import { Title } from "./home_page_components/Title";
import "./homePage.scss";
import { desserts } from "../../store/meals_recipes/desserts";
import { useRandom } from "../../hooks/useRandom";
import { Recipes } from "./home_page_components/Recipes";

export const HomePage = () => {
	const randomDesserts = useRandom(desserts);

	return (
		<div className="home_page">
			<Title />
			<Recipes recipes={randomDesserts} title="Desserts" />
		</div>
	);
};
