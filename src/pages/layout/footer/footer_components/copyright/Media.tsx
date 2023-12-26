import React from "react";
import { MailIconMedia } from "../../../../../media/icons/MailIconMedia";
import { GitHubIcon } from "../../../../../media/icons/GitHubIcon";
import { DiscordIcon } from "../../../../../media/icons/DiscordIcon";
import { TelegramIcons } from "../../../../../media/icons/TelegramIcons";
import { LinkedInIcon } from "../../../../../media/icons/LinkedInIcon";

export const Media = () => {
	return (
		<div className="footer_media">
			<MailIconMedia />
			<GitHubIcon />
			<DiscordIcon />
			<TelegramIcons />
			<LinkedInIcon />
		</div>
	);
};
