import { IUser } from "../interface/user_interfsce";
import { getLocalStorage } from "./getLocalStorage";

export const editUserDataStorage = (newUser: IUser) => {
	const users = getLocalStorage();
	const newUsers = users?.map((user) => {
		if (user.userId === newUser.userId) {
			return newUser;
		} else return user;
	});

	newUsers && localStorage.setItem("users", JSON.stringify(newUsers));
};
