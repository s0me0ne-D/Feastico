import React, { useState } from "react";
import { UserIcon } from "../../../media/icons/UserIcon";
import { ICurrentUserData } from "./ProfilePageForm";

export const NameProfileForm = ({
	value,
	setData,
}: {
	value: string;
	setData: React.Dispatch<React.SetStateAction<ICurrentUserData>>;
}) => {
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
					onChange={(event) =>
						setData((prev) => {
							return { ...prev, name: event.target.value };
						})
					}
				/>
			</div>
		</label>
	);
};
