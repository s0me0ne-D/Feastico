import { Title } from "./home_page_components/Title";
import "./homePage.scss";
import { desserts } from "../../store/meals_recipes/desserts";
import { useRandom } from "../../hooks/useRandom";
import { Recipes } from "../../components/Recipes";
import { christmas } from "../../store/popular_recipes/christmas";
import { PopularCategories } from "./home_page_components/PopularCategories";
import { underThirtyMinutes } from "../../store/popular_recipes/underThirtyMinutes";

export const HomePage = () => {
	const randomDesserts = useRandom(desserts, 5);
	const randomChristmas = useRandom(christmas, 5);

	return (
		<div className="home_page main-margin">
			<Title />
			<Recipes recipes={randomDesserts} title="Sweet Tooth" />
			<Recipes recipes={randomChristmas} title="Christmas Ideas" />
			<PopularCategories />
			<Recipes recipes={underThirtyMinutes.results} title="Quick Cooking" />
		</div>
	);
};
