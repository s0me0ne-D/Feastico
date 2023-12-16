import React from "react";
import { RegisterPage } from "./register/RegisterPage";
import { SplashTitle } from "./SplashTitle";
import "./splashPage.scss";

export const SplashPage = () => {
	return (
		<div className="splash">
			<SplashTitle />
			<RegisterPage />
		</div>
	);
};
