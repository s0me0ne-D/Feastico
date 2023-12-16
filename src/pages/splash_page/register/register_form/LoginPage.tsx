import React, { useState } from "react";
import { IUser } from "../../../../interface/user_interfsce";
import { Password } from "./form_elements/Password";
import { Email } from "./form_elements/Email";
import { authentication } from "../../../../utils/authentication";
import { useDispatch } from "react-redux";
import { signUp } from "../../../../redux/userSlice";

export const LoginPage = ({
	changePage,
}: {
	changePage: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [userData, setUserData] = useState<IUser>({
		email: "",
		password: "",
		name: "",
		favourites: [],
	});
	const dispatch = useDispatch();
	const [errorMessage, setErrorMessage] = useState(false);
	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		const authenticatedUser = authentication(userData);
		authenticatedUser ? dispatch(signUp(authenticatedUser)) : setErrorMessage(true);
		event.preventDefault();
		event.stopPropagation();
	};
	console.log(userData);
	return (
		<>
			<form className="register_form" onSubmit={submit}>
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
