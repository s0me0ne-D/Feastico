import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interface/user_interfsce";
import { getAutorizedUser } from "../utils/getAuthorizedUser";
import { setAuthorizedUser } from "../utils/setAuthorizedUser";

const initialState: IUser = getAutorizedUser();
export const user = createSlice({
	name: "user",
	initialState,
	reducers: {
		signIn: (state, action: PayloadAction<IUser>) => {
			setAuthorizedUser(action.payload);
		},
		signOut: (state, action: PayloadAction<{ isAuthorized: boolean }>) => {
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
	},
});
export const userReducer = user.reducer;
export const { signIn, signOut, changeFavorites } = user.actions;
