import { Title } from "./home_page_components/Title";
import "./homePage.scss";
import { desserts } from "../../store/meals_recipes/desserts";
import { useRandom } from "../../hooks/useRandom";
import { Recipes } from "./home_page_components/Recipes";
import { christmas } from "../../store/popular_recipes/christmas";
import { PopularCategories } from "./home_page_components/PopularCategories";

export const HomePage = () => {
	const randomDesserts = useRandom(desserts);
	const randomChristmas = useRandom(christmas);
	return (
		<div className="home_page">
			<Title />
			<Recipes recipes={randomDesserts} title="Sweet Tooth" />
			<Recipes recipes={randomChristmas} title="Christmas Ideas" />
			<PopularCategories />
		</div>
	);
};
