import { IUser } from "../interface/user_interfsce";
import { getLocalStorage } from "./getLocalStorage";

export const authentication = (user: IUser) => {
	const users: IUser[] | null | "" = getLocalStorage();
	const userData =
		users &&
		users.find(
			(currentUser) => currentUser.email === user.email && currentUser.password === user.password
		);
	return userData;
};
