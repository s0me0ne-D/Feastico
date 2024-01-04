import React from "react";
import "./instructions.scss";
interface IInstruction {
	id: number;
	position: number;
	display_text: string;
	start_time: number;
	appliance?: string;
	end_time: number;
	temperature?: number;
}

export const Instructions = ({ instructions }: { instructions: IInstruction[] }) => {
	return (
		<div className="recipe_instructions">
			<h2>Instructions</h2>
			<ul>
				{instructions.map((instruction) => (
					<li className="recipe_instructions_block" key={instruction.id}>
						<span className="recipe_instructions_block_position">{instruction.position}</span>
						<span className="recipe_instructions_block_display-text">
							{instruction.display_text}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};
