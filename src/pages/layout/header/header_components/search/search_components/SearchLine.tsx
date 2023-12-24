import React from "react";
import { CloseIcon } from "../../../../../../media/icons/CloseIcon";
import { useOutsideClick } from "../../../../../../hooks/useOutsideClick";

export const SearchLine = ({
	onClick,
}: {
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const searchRef = useOutsideClick(() => onClick(false));
	return (
		<div className="search_line" ref={searchRef}>
			<div className="search_line_wrapper">
				<input type="text" placeholder="Search ..." />
				<CloseIcon onClick={onClick} />
			</div>
		</div>
	);
};
