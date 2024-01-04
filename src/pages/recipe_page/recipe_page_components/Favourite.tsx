import React, { useEffect, useState } from "react";
import { Bookmark } from "../../../media/icons/Bookmark";
import { useDispatch } from "react-redux";
import { changeFavorites } from "../../../redux/userSlice";
import { useSelector } from "react-redux";
import { RootStore } from "../../../redux/store";

export const Favourite = ({ recipe }: { recipe: any }) => {
	const dispatch = useDispatch();
	const [isFavorite, setIsFavorite] = useState(false);
	const { favourites } = useSelector((user: RootStore) => user.userReducer);
	const changeFavoritesHandler = () => {
		dispatch(changeFavorites(recipe));
	};
	useEffect(() => {
		const index = favourites.findIndex((userRecipe) => userRecipe.id === recipe.id);
		if (index !== -1) {
			setIsFavorite(true);
		} else {
			setIsFavorite(false);
		}
	}, [favourites, recipe.id]);
	return (
		<div className="recipe_add">
			<Bookmark isFavorite={isFavorite} onClick={changeFavoritesHandler} />
		</div>
	);
};
