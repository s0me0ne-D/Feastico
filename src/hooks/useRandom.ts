import { useEffect, useState } from "react";

export const useRandom = (recipes: any, value: number) => {
	const [randomRecipes, setRandomRecipes] = useState<any[]>([]);
	useEffect(() => {
		const getRandomRecipes = () => {
			const randomIndexes: number[] = [];
			while (randomIndexes.length < value) {
				const randomIndex = Math.floor(Math.random() * recipes.results.length);
				if (!randomIndexes.includes(randomIndex)) {
					randomIndexes.push(randomIndex);
				}
			}
			const selectedRecipes = randomIndexes.map((index) => recipes.results[index]);
			setRandomRecipes(selectedRecipes);
		};
		getRandomRecipes();
	}, [recipes, value]);
	return randomRecipes;
};
