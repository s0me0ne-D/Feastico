import { IUser } from "../interface/user_interfsce";
import { getLocalStorage } from "./getLocalStorage";

export const setAuthorizedUser = (user: IUser) => {
	const users = getLocalStorage();
	const newUsers = users?.map((userData) => {
		if (userData.email === user.email && userData.password === user.password) {
			return user;
		} else {
			return userData;
		}
	});
	if (newUsers !== undefined) {
		localStorage.setItem("users", JSON.stringify(newUsers));
	}
};
