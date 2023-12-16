import React from "react";
import { SearchIcon } from "../../../../media/icons/SearchIcon";

export const Search = () => {
	return (
		<div className="header_search">
			<SearchIcon />
			<input type="text" />
		</div>
	);
};
