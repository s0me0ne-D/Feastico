import { IUser } from "../interface/user_interfsce";
import { getLocalStorage } from "./getLocalStorage";

export const setLocalStorage = (user: IUser) => {
	const usersData = getLocalStorage();
	if (usersData) {
		usersData.push(user);
		localStorage.setItem("users", JSON.stringify(usersData));
	} else {
		const newUsersData = [];
		newUsersData.push(user);
		localStorage.setItem("users", JSON.stringify(newUsersData));
	}
};
