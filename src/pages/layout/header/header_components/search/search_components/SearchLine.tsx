import React, { useState } from "react";
import { CloseIcon } from "../../../../../../media/icons/CloseIcon";
import { useOutsideClick } from "../../../../../../hooks/useOutsideClick";
import { SearchResults } from "./SearchResults";
import { useDebounce } from "../../../../../../hooks/useDebounce";

export const SearchLine = ({
	onClick,
}: {
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const searchRef = useOutsideClick(() => onClick(false));
	const [searchValue, setSearchValue] = useState("");

	const debounceSearch = useDebounce(searchValue, 700);
	console.log(searchValue);
	return (
		<div className="search_line" ref={searchRef}>
			<div className="search_line_wrapper">
				<input
					type="text"
					placeholder="Search ..."
					value={searchValue}
					onChange={(event) => setSearchValue(event.target.value)}
				/>
				<CloseIcon onClick={onClick} />
			</div>
			{debounceSearch.length > 3 && (
				<SearchResults debounceSearch={debounceSearch} onClick={onClick} />
			)}
		</div>
	);
};
