export const categoriesHandler = (categorieHeadline: string) => {
	const desserts = ["Cookies", "Muffins", "Pies", "Under 30 minutes desserts"];
	const ingredients = ["Beef", "Chicken", "Pasta", "Potato"];
	const diets = ["Healthy", "Hight protein", "Low carb", "Vegeterian"];
	const meals = ["Breakfast", "Desserts", "Dinner", "Lunch", "Snecks"];
	const popular = [
		"Christmas",
		"Easy dinner",
		"5 ingredients meals",
		"Salads",
		"Under 30 minutes",
		"Work lunches",
	];
	switch (categorieHeadline) {
		case "Desserts":
			return desserts;
		case "Ingredients":
			return ingredients;
		case "Diets":
			return diets;
		case "Meals":
			return meals;
		case "Popular":
			return popular;
		default:
			break;
	}
};
