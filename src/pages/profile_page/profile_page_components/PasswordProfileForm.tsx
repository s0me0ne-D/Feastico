import React, { useState } from "react";
import { PasswordIcon } from "../../../media/icons/PasswordIcon";

export const PasswordProfileForm = ({ value }: { value: string }) => {
	const [activeField, setActiveFielf] = useState(false);

	return (
		<label>
			PASSWORD
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
