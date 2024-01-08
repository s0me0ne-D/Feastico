import React, { useState } from "react";
import { MailIconForm } from "../../../media/icons/MailIconForm";

export const MailProfileForm = ({ value }: { value: string }) => {
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
				/>
			</div>
		</label>
	);
};
