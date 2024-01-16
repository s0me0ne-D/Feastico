import React, { useEffect, useState } from "react";
import { ResultRecipe } from "./ResultRecipe";
import "./searchResults.scss";
import { useGetListByNameQuery } from "../../../../../../redux/api/api";
import { Loader } from "../../../../../../media/animations/Loader";
import { useNavigate } from "react-router-dom";

export const SearchResults = ({
	onClick,
	debounceSearch,
}: {
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
	debounceSearch: string;
}) => {
	const [filteredSearch, setFilteredSearch] = useState(debounceSearch);
	const navigate = useNavigate();
	useEffect(() => {
		setFilteredSearch(debounceSearch);
	}, [debounceSearch]);

	const { data, isLoading, isFetching } = useGetListByNameQuery(filteredSearch);
	return (
		<div className="search_results">
			{data?.results.length > 0 ? (
				<div>
					{data.results.map(
						(recipe: any, index: number) =>
							index < 5 && <ResultRecipe recipe={recipe} onClick={onClick} key={index} />
					)}
					<div className="search_results_btn-wrapper">
						<button
							onClick={() => {
								navigate(`/categorie/${debounceSearch}`);
								onClick(false);
							}}
						>
							More results...
						</button>
					</div>
				</div>
			) : isLoading ? (
				<Loader />
			) : isFetching ? (
				<Loader />
			) : data?.results.length === 0 ? (
				<div className="no-results">No results found</div>
			) : null}
		</div>
	);
};
