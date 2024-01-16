import React from "react";
import { useParams } from "react-router-dom";
import { useGetListByNameQuery } from "../../redux/api/api";
import { Loader } from "../../media/animations/Loader";
import { Recipes } from "../../components/Recipes";
import "./categoriePage.scss";
import { ErrorPage } from "../../components/ErrorPage";

export const CategoriePage = () => {
	const categorie = useParams().categorieName;
	const { isLoading, data, isError } = useGetListByNameQuery(categorie);
	return (
		<div className="categorie-page main-margin">
			<h2 className="categorie-page_title">{categorie?.toUpperCase()}</h2>
			{isLoading ? (
				<Loader />
			) : data ? (
				<Recipes recipes={data.results} />
			) : isError ? (
				<ErrorPage />
			) : null}
		</div>
	);
};
