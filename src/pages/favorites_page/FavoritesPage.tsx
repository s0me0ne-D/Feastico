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
			{favourites.length > 0 ? (
				<Recipes recipes={favourites} />
			) : (
				<span className="have-not-message">You haven`t added any favorites yet.</span>
			)}
		</div>
	);
};
