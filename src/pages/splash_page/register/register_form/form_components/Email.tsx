import React from "react";
import { MailIconMedia } from "../../../../../media/icons/MailIconMedia";
import { IUser } from "../../../../../interface/user_interfsce";
import { isUserRegistered } from "../../../../../utils/isUserRegistered";
import { MailIconForm } from "../../../../../media/icons/MailIconForm";

export const Email = ({
	changeUserEmail,
	userData,
	isRegistered,
	setIsRegistered,
}: {
	changeUserEmail: React.Dispatch<React.SetStateAction<IUser>>;
	userData: IUser | undefined;
	isRegistered?: boolean;
	setIsRegistered?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	return (
		<div
			className="email user_data"
			style={{ borderBottom: `1px solid ${isRegistered ? "red" : "#e8e8e8"}` }}
		>
			<MailIconForm /> &nbsp;
			<input
				type="email"
				placeholder="Email"
				onChange={(event) => {
					if (setIsRegistered) {
						console.log(isUserRegistered(event.target.value));
						isUserRegistered(event.target.value) ? setIsRegistered(true) : setIsRegistered(false);
					}
					if (userData && event.target.value !== "") {
						changeUserEmail({ ...userData, email: event.target.value });
					}
				}}
				required={true}
			/>
			{isRegistered && <span className="error_message">Email is already registered</span>}
		</div>
	);
};
