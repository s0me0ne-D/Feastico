import React, { useState } from "react";
import { LoginPage } from "./register_form/LoginPage";
import "./registerPage.scss";
import { SignUpPage } from "./register_form/SignUpPage";

export const RegisterPage = () => {
	const [registered, setRegistered] = useState<boolean>(true);
	return (
		<div className="register">
			<div className="register_container">
				{registered ? (
					<LoginPage changePage={setRegistered} />
				) : (
					<SignUpPage changePage={setRegistered} />
				)}
			</div>
		</div>
	);
};
