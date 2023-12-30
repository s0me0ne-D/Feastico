import React, { useState } from "react";
import { SignInPage } from "./register_form/SignInPage";
import "./registerPage.scss";
import { SignUpPage } from "./register_form/SignUpPage";

export const RegisterPage = () => {
	const [registered, setRegistered] = useState<boolean>(true);
	return (
		<div className="register">
			<div className="register_container">
				{registered ? (
					<SignInPage changePage={setRegistered} />
				) : (
					<SignUpPage changePage={setRegistered} />
				)}
			</div>
		</div>
	);
};
