import React, { useState } from "react";
import { IUser } from "../../../../interface/user_interfsce";
import { Password } from "./form_components/Password";
import { Email } from "./form_components/Email";
import { authentication } from "../../../../utils/authentication";
import { useDispatch } from "react-redux";
import { signIn } from "../../../../redux/userSlice";

export const SignInPage = ({
	changePage,
}: {
	changePage: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [userData, setUserData] = useState<IUser>({
		isAuthorized: true,
		email: "",
		password: "",
		name: "",
		favourites: [],
	});
	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState(false);
	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		console.log("submit");
		const authenticatedUser = authentication(userData);
		if (authenticatedUser) {
			dispatch(signIn({ ...authenticatedUser, isAuthorized: userData.isAuthorized }));
		} else {
			setErrorMessage(true);
			event.preventDefault();
			event.stopPropagation();
		}
	};
	return (
		<>
			<form className="register_form" onSubmit={(event) => submit(event)}>
				<div className="register_title">LOGIN</div>
				<Email changeUserEmail={setUserData} userData={userData} />
				<Password userData={userData} changeUserPassword={setUserData} />
				<button className="submit_button" type="submit">
					Login
				</button>
				{errorMessage && (
					<span className="error_message_login">
						The email address or password is incorrect. Please retry...
					</span>
				)}
			</form>
			<div className="register_footer">
				Don't have an account? &nbsp;
				<button className="register_footer_button" onClick={() => changePage(false)}>
					Sign up
				</button>
			</div>
		</>
	);
};
