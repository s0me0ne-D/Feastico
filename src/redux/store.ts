import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";

export const store = configureStore({
	reducer: { userReducer },
});
export type RootStore = ReturnType<typeof store.getState>;
