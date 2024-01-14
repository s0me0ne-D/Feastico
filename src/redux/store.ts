import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { recipesApi } from "./api/api";

export const store = configureStore({
	reducer: { userReducer, [recipesApi.reducerPath]: recipesApi.reducer },
	middleware: (gDM) => gDM().concat(recipesApi.middleware),
});
export type RootStore = ReturnType<typeof store.getState>;
