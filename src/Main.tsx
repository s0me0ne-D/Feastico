import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootStore } from "./redux/store";
import { SplashPage } from "./pages/splash_page/SplashPage";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { editUserDataStorage } from "./utils/editUserDataStorage";

export const Main = () => {
	const userData = useSelector((state: RootStore) => state.userReducer);
	useEffect(() => {
		if (userData.isAuthorized) {
			editUserDataStorage(userData);
		}
	}, [userData]);
	console.log(userData);
	return userData.isAuthorized ? <RouterProvider router={router} /> : <SplashPage />;
};
