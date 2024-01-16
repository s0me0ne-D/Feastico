import React, { useEffect, useState } from "react";
import { Email } from "./form_components/Email";
import { Password } from "./form_components/Password";
import { Name } from "./form_components/Name";
import { ConfirmPassword } from "./form_components/ConfirmPassword";
import { IUser } from "../../../../interface/user_interfsce";
import { setLocalStorage } from "../../../../utils/setLocalStorage";
import { notAuthorizedUser } from "../../../../utils/getAuthorizedUser";

export const SignUpPage = ({
	changePage,
}: {
	changePage: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [userData, setUserData] = useState<IUser>(notAuthorizedUser);
	const [isRegistered, setIsRegistered] = useState(false);
	const [errorPassword, setErrorPassword] = useState(false);

	const getRandomId = () => Math.floor(Math.random() * 10000);
	useEffect(() => {
		setUserData({ ...userData, userId: getRandomId() });
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<form
				className="register_form"
				onSubmit={(event) => {
					if (!isRegistered && !errorPassword) {
						setLocalStorage(userData);
						setUserData(notAuthorizedUser);
					} else {
						event.stopPropagation();
						event.preventDefault();
					}
				}}
			>
				<div className="register_title">SIGN UP</div>
				<Name changeName={setUserData} userData={userData} />
				<Email
					changeUserEmail={setUserData}
					userData={userData}
					isRegistered={isRegistered}
					setIsRegistered={setIsRegistered}
				/>
				<Password changeUserPassword={setUserData} userData={userData} />
				<ConfirmPassword
					userData={userData}
					errorPassword={errorPassword}
					setErrorPassword={setErrorPassword}
				/>
				<button className="submit_button color-button" type="submit">
					Sign up
				</button>
			</form>
			<div className="register_footer">
				Alredy have an account? &nbsp;
				<button className="register_footer_button" onClick={() => changePage(true)}>
					Sign in
				</button>
			</div>
		</>
	);
};
