import { createHashRouter } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";
import { HomePage } from "./pages/home_page/HomePage";
import { RecipePage } from "./pages/recipe_page/RecipePage";
import { ProfilePage } from "./pages/profile_page/ProfilePage";
import { FavoritesPage } from "./pages/favorites_page/FavoritesPage";
import { CategoriePage } from "./pages/categorie_page/CategoriePage";
import { ErrorPage } from "./components/ErrorPage";

export const router = createHashRouter([
	{
		path: "/",
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "/recipe/:recipeId",
				element: <RecipePage />,
			},
			{
				path: "/profile",
				element: <ProfilePage />,
			},
			{
				path: "/favorites",
				element: <FavoritesPage />,
			},
			{
				path: "/categorie/:categorieName",
				element: <CategoriePage />,
			},
		],
	},
]);
