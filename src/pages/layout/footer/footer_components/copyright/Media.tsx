import React from "react";
import { MailIcon } from "../../../../../media/icons/MailIcon";
import { GitHubIcon } from "../../../../../media/icons/GitHubIcon";
import { DiscordIcon } from "../../../../../media/icons/DiscordIcon";
import { TelegramIcons } from "../../../../../media/icons/TelegramIcons";
import { LinkedInIcon } from "../../../../../media/icons/LinkedInIcon";

export const Media = () => {
	return (
		<div className="footer_media">
			<MailIcon />
			<GitHubIcon />
			<DiscordIcon />
			<TelegramIcons />
			<LinkedInIcon />
		</div>
	);
};
