import React from "react";
import "./favoritesPage.scss";
import { BookmarksCollect } from "../../media/icons/BookmarksCollect";
import { Recipes } from "../../components/Recipes";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";

export const FavoritesPage = () => {
	const { favourites } = useSelector((state: RootStore) => state.userReducer);
	return (
		<div className="favorites main-margin">
			<div className="favorites_title">
				<BookmarksCollect />
				<span>Favorites</span>
			</div>
			<Recipes recipes={favourites} />
		</div>
	);
};
