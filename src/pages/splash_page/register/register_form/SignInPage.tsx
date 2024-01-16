import React, { useState } from "react";
import { IUser } from "../../../../interface/user_interfsce";
import { Password } from "./form_components/Password";
import { Email } from "./form_components/Email";
import { authentication } from "../../../../utils/authentication";
import { useDispatch } from "react-redux";
import { signIn } from "../../../../redux/userSlice";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../redux/store";

export const SignInPage = ({
	changePage,
}: {
	changePage: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const initialUser = useSelector((state: RootStore) => state.userReducer);
	const [userData, setUserData] = useState<IUser>({ ...initialUser, isAuthorized: true });
	const [errorMessage, setErrorMessage] = useState(false);
	const dispatch = useDispatch();
	const submit = (event: React.FormEvent<HTMLFormElement>) => {
		const authenticatedUser = authentication(userData);
		if (!authenticatedUser) {
			setErrorMessage(true);
			event.preventDefault();
			event.stopPropagation();
		} else {
			dispatch(signIn({ ...authenticatedUser, isAuthorized: true }));
		}
	};
	return (
		<>
			<form className="register_form" onSubmit={(event) => submit(event)}>
				<div className="register_title">LOGIN</div>
				<Email changeUserEmail={setUserData} userData={userData} />
				<Password userData={userData} changeUserPassword={setUserData} />
				<button className="submit_button color-button" type="submit">
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
