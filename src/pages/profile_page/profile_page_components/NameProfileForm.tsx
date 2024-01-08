import React, { useState } from "react";
import { UserIcon } from "../../../media/icons/UserIcon";

export const NameProfileForm = ({ value }: { value: string }) => {
	const [activeField, setActiveFielf] = useState(false);

	return (
		<label>
			NAME
			<div className={`profile_form_field ${activeField && "active-field"}`}>
				<UserIcon />
				<input
					type="text"
					value={value}
					onFocus={() => setActiveFielf(true)}
					onBlur={() => setActiveFielf(false)}
				/>
			</div>
		</label>
	);
};
