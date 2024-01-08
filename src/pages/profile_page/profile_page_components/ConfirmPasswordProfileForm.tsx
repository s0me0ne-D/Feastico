import React, { useState } from "react";
import { PasswordIcon } from "../../../media/icons/PasswordIcon";

export const ConfirmPasswordProfileForm = ({
	currentPassword,
	value,
}: {
	currentPassword: string;
	value: string;
}) => {
	const [activeField, setActiveFielf] = useState(false);
	return (
		<label>
			CONFIRM PASSWORD
			<div className={`profile_form_field ${activeField && "active-field"}`}>
				<PasswordIcon />
				<input
					type="password"
					value={value}
					onFocus={() => setActiveFielf(true)}
					onBlur={() => setActiveFielf(false)}
				/>
			</div>
		</label>
	);
};
