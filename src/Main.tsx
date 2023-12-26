import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "./redux/store";
import { SplashPage } from "./pages/splash_page/SplashPage";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

export const Main = () => {
	const { isAuthorized } = useSelector((state: RootStore) => state.userReducer);
	return (
		// isAuthorized ?
		<RouterProvider router={router} />
		// : <SplashPage />
	);
};
