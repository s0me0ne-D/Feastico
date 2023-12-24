import React from "react";
import "./footer.scss";
import { Information } from "./footer_components/information/Information";
import { Copyright } from "./footer_components/copyright/Copyright";

export const Footer = () => {
	return (
		<div className="footer">
			<Information />
			<Copyright />
		</div>
	);
};
