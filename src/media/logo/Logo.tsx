import React from "react";
import "./logo.scss";

export const Logo = ({ className }: { className: string }) => {
	return (
		<div id="logo" className={className}>
			Feastico
		</div>
	);
};
