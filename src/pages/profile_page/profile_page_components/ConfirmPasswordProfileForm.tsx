import React, { useEffect, useState } from "react";
import { PasswordIcon } from "../../../media/icons/PasswordIcon";

export const ConfirmPasswordProfileForm = ({
	currentPassword,
	setErrorPassword,
	errorPassword,
}: {
	currentPassword: string;
	setErrorPassword: React.Dispatch<React.SetStateAction<boolean>>;
	errorPassword: boolean;
}) => {
	const [activeField, setActiveFielf] = useState(false);
	const [confirmPassword, setConfirmPassword] = useState<string>(currentPassword);
	useEffect(() => {
		confirmPassword !== currentPassword ? setErrorPassword(true) : setErrorPassword(false);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [confirmPassword, currentPassword]);
	return (
		<div className="confirm-password-block">
			<label>
				CONFIRM PASSWORD
				<div
					className={`profile_form_field ${activeField && "active-field"} ${
						errorPassword && "error-password"
					}`}
				>
					<PasswordIcon />
					<input
						type="password"
						value={confirmPassword}
						onFocus={() => setActiveFielf(true)}
						onBlur={() => {
							setActiveFielf(false);
						}}
						onChange={(event) => {
							setConfirmPassword(event.target.value);
						}}
					/>
				</div>
			</label>
			{errorPassword ? (
				<span className={`profile_form_field_error-message ${activeField && "active-field"}`}>
					Confirm Password doesn't match, Try again !
				</span>
			) : null}
		</div>
	);
};
