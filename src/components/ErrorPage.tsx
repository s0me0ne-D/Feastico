import React from "react";
import ErrorIcon from "../media/icons/ErrorIcon.svg";
import { NavLink } from "react-router-dom";
import "./errorPage.scss";

export const ErrorPage = () => {
	return (
		<div className="error-page">
			<img src={ErrorIcon} alt="error" />
			<span>Oops, something went wrong.</span>
			<NavLink to={"/"}>Go Home</NavLink>
		</div>
	);
};
