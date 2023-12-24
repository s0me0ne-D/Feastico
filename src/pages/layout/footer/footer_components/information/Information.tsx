import React from "react";
import { Slogan } from "./Slogan";
import { Testebite } from "./Testebite";
import { Legal } from "./Legal";

export const Information = () => {
	return (
		<div className="footer_information">
			<Slogan />
			<div className="footer_information_links">
				<Testebite />
				<Legal />
			</div>
		</div>
	);
};
