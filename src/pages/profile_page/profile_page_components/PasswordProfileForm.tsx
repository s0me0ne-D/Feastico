import React, { useState } from "react";
import { PasswordIcon } from "../../../media/icons/PasswordIcon";
import { ICurrentUserData } from "./ProfilePageForm";

export const PasswordProfileForm = ({
	value,
	setData,
}: {
	value: string;
	setData: React.Dispatch<React.SetStateAction<ICurrentUserData>>;
}) => {
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
					onChange={(event) =>
						setData((prev) => {
							return { ...prev, password: event.target.value };
						})
					}
				/>
			</div>
		</label>
	);
};
