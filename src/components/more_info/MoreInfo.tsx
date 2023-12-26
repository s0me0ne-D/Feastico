import React from "react";
import { NavLink } from "react-router-dom";
import { InfoIcon } from "../../media/icons/InfoIcon";
import "./moreInfo.scss";

export const MoreInfo = ({ recipe }: { recipe: any }) => {
	return (
		<NavLink to={"/"} className="more-info">
			<span className="more-info_title">Go to recipe</span>
			<InfoIcon />
		</NavLink>
	);
};
