import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interface/user_interfsce";

interface IInitialState {
	isAuthorized: boolean;
	userData: IUser;
}

const initialState: IInitialState = {
	isAuthorized: false,
	userData: {
		name: "",
		email: "",
		favourites: [],
		password: "",
	},
};

export const user = createSlice({
	name: "user",
	initialState,
	reducers: {
		signUp: (state, action: PayloadAction<IUser>) => {
			state.isAuthorized = true;
			state.userData = action.payload;
		},
	},
});
export const userReducer = user.reducer;
export const { signUp } = user.actions;
