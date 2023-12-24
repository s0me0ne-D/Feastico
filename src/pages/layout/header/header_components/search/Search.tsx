import React, { useState } from "react";
import { SearchIcon } from "../../../../../media/icons/SearchIcon";
import "./search.scss";
import { SearchLine } from "./search_components/SearchLine";

export const Search = () => {
	const [toSearch, setToSearch] = useState(false);
	return (
		<div className="header_search search">
			<SearchIcon onClick={setToSearch} />
			{toSearch ? <SearchLine onClick={setToSearch} /> : null}
		</div>
	);
};
