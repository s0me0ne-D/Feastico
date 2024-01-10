import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interface/user_interfsce";
import { getAutorizedUser } from "../utils/getAuthorizedUser";
import { ICurrentUserData } from "../pages/profile_page/profile_page_components/ProfilePageForm";

const initialState: IUser = getAutorizedUser();
export const user = createSlice({
	name: "user",
	initialState,
	reducers: {
		signIn: (state, action: PayloadAction<IUser>) => {
			state.email = action.payload.email;
			state.favourites = action.payload.favourites;
			state.isAuthorized = action.payload.isAuthorized;
			state.name = action.payload.name;
			state.password = action.payload.password;
			state.userId = action.payload.userId;
		},
		signOut: (state, action: PayloadAction<{ isAuthorized: boolean }>) => {
			state.email = "";
			state.favourites = [];
			state.name = "";
			state.password = "";
			state.userId = 0;
			state.isAuthorized = action.payload.isAuthorized;
		},
		changeFavorites: (state, action: PayloadAction<any>) => {
			const index = state.favourites.findIndex((recipe) => recipe.id === action.payload.id);
			if (index === -1) {
				state.favourites.push(action.payload);
			} else {
				state.favourites.splice(index, 1);
			}
		},
		editUserData: (state, action: PayloadAction<ICurrentUserData>) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.password = action.payload.password;
		},
	},
});

export const userReducer = user.reducer;
export const { signIn, signOut, changeFavorites, editUserData } = user.actions;
