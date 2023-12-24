import React from "react";
import { NavLink } from "react-router-dom";

export const Testebite = () => {
	const testebites = ["About us", "Careers", "Contact us", "Feedback"];
	return (
		<div className="footer_information_testebite links">
			<span>Testebite</span>
			{testebites.map((el) => (
				<NavLink to={"/"} key={el}>
					{el}
				</NavLink>
			))}
		</div>
	);
};
