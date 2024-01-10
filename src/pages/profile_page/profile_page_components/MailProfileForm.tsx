import React, { useState } from "react";
import { MailIconForm } from "../../../media/icons/MailIconForm";
import { ICurrentUserData } from "./ProfilePageForm";

export const MailProfileForm = ({
	value,
	setData,
}: {
	value: string;
	setData: React.Dispatch<React.SetStateAction<ICurrentUserData>>;
}) => {
	const [activeField, setActiveFielf] = useState(false);

	return (
		<label>
			EMAIL
			<div className={`profile_form_field ${activeField && "active-field"}`}>
				<MailIconForm />
				<input
					type="email"
					value={value}
					onFocus={() => setActiveFielf(true)}
					onBlur={() => setActiveFielf(false)}
					onChange={(event) =>
						setData((prev) => {
							return { ...prev, email: event.target.value };
						})
					}
				/>
			</div>
		</label>
	);
};
