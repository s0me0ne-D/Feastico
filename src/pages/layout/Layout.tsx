import React from "react";
import { Header } from "./header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import "./layout.scss";

export const Layout = () => {
	return (
		<div className="layout">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};
