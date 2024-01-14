import React from "react";
import "./popularCategories.scss";
import { easyDinner } from "../../../store/popular_recipes/easyDinner";
import { salads } from "../../../store/popular_recipes/salads";
import { breakfast } from "../../../store/meals_recipes/breakfast";
import { healthy } from "../../../store/diet_recipes/healthy";
import { pasta } from "../../../store/ingredients_recipes/pasta";
import { NavLink } from "react-router-dom";

export const PopularCategories = () => {
	const popularCategories = [
		{ data: easyDinner, title: "Easy Dinner" },
		{ data: salads, title: "Salads" },
		{ data: breakfast, title: "Breakfast" },
		{ data: healthy, title: "Healthy" },
		{ data: pasta, title: "Pasta" },
	];
	return (
		<div className="home_page_popular">
			<span className="home_page_popular_title">Popular Categories</span>
			<div className="home_page_popular_categories">
				{popularCategories.map((categorie) => (
					<NavLink
						to={`/categorie/${categorie.title}`}
						key={categorie.title}
						className="home_page_popular_categories_categorie"
					>
						<img src={categorie.data.results[3].thumbnail_url} alt={categorie.title} />
						<span className="home_page_popular_categories_categorie_title">{categorie.title}</span>
					</NavLink>
				))}
			</div>
		</div>
	);
};
