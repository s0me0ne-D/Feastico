import { createHashRouter } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";
import { HomePage } from "./pages/home_page/HomePage";
import { RecipePage } from "./pages/recipe_page/RecipePage";
import { ProfilePage } from "./pages/profile_page/ProfilePage";
import { FavoritesPage } from "./pages/favorites_page/FavoritesPage";

export const router = createHashRouter([
	{
		path: "/",
		element: <Layout />,
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
		],
	},
]);
