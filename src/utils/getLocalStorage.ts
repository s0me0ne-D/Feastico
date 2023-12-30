import { IUser } from "../interface/user_interfsce";

export const getLocalStorage = () => {
	const user = localStorage.getItem("users");

	return user ? (JSON.parse(user) as IUser[]) : null;
};
