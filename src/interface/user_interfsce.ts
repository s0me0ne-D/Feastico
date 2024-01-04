export interface IUser {
	isAuthorized: boolean;
	name: string;
	email: string;
	password: string;
	favourites: Array<any>;
}
