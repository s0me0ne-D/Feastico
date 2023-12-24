import React from "react";
import { NavLink } from "react-router-dom";

export const Legal = () => {
	const legal = ["Terms", "Conditions", "Cookies", "Copyright"];
	return (
		<div className="fooer_information_legal links">
			<span>Legal</span>
			{legal.map((el) => (
				<NavLink to={"/"} key={el}>
					{el}
				</NavLink>
			))}
		</div>
	);
};
