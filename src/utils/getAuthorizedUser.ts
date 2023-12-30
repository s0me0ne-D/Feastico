import { IUser } from "../interface/user_interfsce";
import { getLocalStorage } from "./getLocalStorage";

export const notAuthorizedUser: IUser = {
	isAuthorized: false,
	name: "",
	email: "",
	favourites: [],
	password: "",
};

export const getAutorizedUser = () => {
	// const user: IUser = {
	// 	isAuthorized: false,
	// 	name: "",
	// 	email: "",
	// 	favourites: [],
	// 	password: "",
	// };
	const users: IUser[] | null = getLocalStorage();
	const authorizedUser = users?.find((user) => user.isAuthorized === true);
	if (authorizedUser !== undefined) {
		return authorizedUser;
	} else {
		return notAuthorizedUser;
	}
};
