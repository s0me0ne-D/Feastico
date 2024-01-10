export interface IUser {
	isAuthorized: boolean;
	userId: number;
	name: string;
	email: string;
	password: string;
	favourites: Array<any>;
}
