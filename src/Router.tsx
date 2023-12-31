import { createHashRouter } from "react-router-dom";
import { Layout } from "./pages/layout/Layout";
import { HomePage } from "./pages/home_page/HomePage";
import { RecipePage } from "./pages/recipe_page/RecipePage";
import { ProfilePage } from "./pages/profile_page/ProfilePage";

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
				path: "/recipe",
				element: <RecipePage />,
			},
			{
				path: "/profile",
				element: <ProfilePage />,
			},
		],
	},
]);
