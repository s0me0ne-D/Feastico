import { getLocalStorage } from "./getLocalStorage";

export const isUserRegistered = (email: string) => {
	const users = getLocalStorage();
	const isRegistered = users && users.find((user) => user.email === email);
	return isRegistered;
};
