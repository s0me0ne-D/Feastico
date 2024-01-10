import React, { useEffect, useState } from "react";
import { PasswordIcon } from "../../../../../media/icons/PasswordIcon";
import { IUser } from "../../../../../interface/user_interfsce";

export const ConfirmPassword = ({ userData }: { userData: IUser }) => {
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errorPassword, setErrorPassword] = useState(false);
	useEffect(() => {
		userData.password === "" && setConfirmPassword("");
	}, [userData]);
	return (
		<div
			className="user_data"
			style={{ borderBottom: `1px solid ${errorPassword ? "red" : "#e8e8e8"}` }}
		>
			<PasswordIcon />
			&nbsp;
			<input
				type="password"
				placeholder="Confirm password"
				required={true}
				value={confirmPassword}
				onChange={(event) => {
					setConfirmPassword(event.target.value);
					setErrorPassword(false);
				}}
				onKeyDown={(event) => {
					if (event.key === "Enter" && userData.password !== confirmPassword) {
						setErrorPassword(true);
						event.preventDefault();
						event.stopPropagation();
					}
				}}
			/>
			{errorPassword && (
				<span className="error_message">Confirm Password doesn't match, Try again !</span>
			)}
		</div>
	);
};
