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
	},
});
export const userReducer = user.reducer;
export const { signIn, signOut } = user.actions;
