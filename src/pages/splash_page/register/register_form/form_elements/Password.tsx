import React from "react";
import { PasswordIcon } from "../../../../../media/icons/PasswordIcon";
import { IUser } from "../../../../../interface/user_interfsce";

export const Password = ({
	changeUserPassword,
	userData,
}: {
	changeUserPassword: React.Dispatch<React.SetStateAction<IUser>>;
	userData: IUser;
}) => {
	return (
		<div className="password user_data">
			<PasswordIcon />
			&nbsp;
			<input
				type="password"
				placeholder="Password"
				required={true}
				onChange={(event) => {
					event.target.value !== "" &&
						changeUserPassword({ ...userData, password: event.target.value });
				}}
			/>
		</div>
	);
};
