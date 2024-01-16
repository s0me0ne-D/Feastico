import { Title } from "./home_page_components/Title";
import "./homePage.scss";
import { desserts } from "../../store/desserts";
import { useRandom } from "../../hooks/useRandom";
import { Recipes } from "../../components/Recipes";
import { christmas } from "../../store/christmas";
import { PopularCategories } from "./home_page_components/PopularCategories";
import { underThirtyMinutes } from "../../store/underThirtyMinutes";

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
