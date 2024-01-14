import React from "react";
import { NavLink } from "react-router-dom";
import "./moreInfo.scss";
import { Favourite } from "../Favourite";

export const MoreInfo = ({ recipe }: { recipe: any }) => {
	return (
		<NavLink to={`/recipe/${recipe.id}`} className="more-info">
			<span className="more-info_title">Go to recipe</span>
			<Favourite recipe={recipe} className="info" />
		</NavLink>
	);
};
