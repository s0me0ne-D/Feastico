import React from "react";
import { UserIcon } from "../../../../../media/icons/UserIcon";
import { IUser } from "../../../../../interface/user_interfsce";

export const Name = ({
	changeName,
	userData,
}: {
	changeName: React.Dispatch<React.SetStateAction<IUser>>;
	userData: IUser;
}) => {
	return (
		<div className="user_data">
			<UserIcon />
			&nbsp;
			<input
				type="text"
				placeholder="Name"
				onChange={(event) => {
					changeName({ ...userData, name: event.target.value });
				}}
				required={true}
			/>
		</div>
	);
};
