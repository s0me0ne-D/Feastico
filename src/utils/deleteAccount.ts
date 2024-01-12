import { IUser } from "../interface/user_interfsce";

export const deleteAccount = (currentUser: IUser) => {
	const storageData = localStorage.getItem("users");
	const users: IUser[] = storageData ? JSON.parse(storageData) : undefined;
	const newUsers = users.filter((user) => user.userId !== currentUser.userId);
	localStorage.setItem("users", JSON.stringify(newUsers));
};
