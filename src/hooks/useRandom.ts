import { useState } from "react";
import { IRecipes } from "../interface/recipes";

export const useRandom = ({ recipes }: { recipes: IRecipes }) => {
	const randomRecipes = [];
	const [count, setCount] = useState(0);
	const [index, setIndex] = useState<number[]>([]);
	const getRandomIndex = () => {
		return Math.floor(Math.random() * 40);
	};
	while (count < 3) {
		let randomIndex = getRandomIndex();
		if (!index.find((index) => index !== randomIndex)) {
			setIndex((prev) => [...prev, randomIndex]);
		} else return;
	}
};
