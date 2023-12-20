import React from "react";
import { Rating } from "@mui/material";

export const RatingComponent = ({ value }: { value: number }) => {
	const score = value * 5;
	return (
		<div>
			<Rating
				sx={{
					"& .MuiRating-iconFilled": {
						color: "#ff4c10",
					},
				}}
				name="read-only"
				value={score}
				readOnly
			/>
		</div>
	);
};
