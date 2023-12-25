import { useEffect, useState } from "react";

export const useRandom = (recipes: any) => {
	const [randomRecipes, setRandomRecipes] = useState<any[]>([]);
	useEffect(() => {
		const getRandomRecipes = () => {
			const randomIndexes: number[] = [];
			while (randomIndexes.length < 5) {
				const randomIndex = Math.floor(Math.random() * recipes.results.length);
				if (!randomIndexes.includes(randomIndex)) {
					randomIndexes.push(randomIndex);
				}
			}
			const selectedRecipes = randomIndexes.map((index) => recipes.results[index]);
			setRandomRecipes(selectedRecipes);
		};
		getRandomRecipes();
	}, [recipes]);
	return randomRecipes;
};
