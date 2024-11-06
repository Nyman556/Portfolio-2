import React from "react";
import { MdSimCardDownload } from "react-icons/md";
import profilePic from "/images/profile.png";
import { socials } from "../Content/genData";
import { Tooltip } from "react-tooltip";

function BioPanel() {
	return (
		<div className="bio-panel">
			<div className="flex flex-col items-center md:flex-row md:items-start md:justify-between mb-4">
				<div className="text-center md:text-left flex flex-col">
					<h1 className="ml-2 mb-2">Johan Nyman</h1>
					<h2 className="h2-small ml-2 mb-2">Frontend Utvecklare</h2>
					<h3 className="mb-4">📍 Växjö, Sverige 🇸🇪</h3>
				</div>
				<img src={profilePic} alt="Me!" className="h-40" />
			</div>
			<div className="flex items-center justify-between">
				<a href="/file resume.pdf" download className="btn">
					<MdSimCardDownload className="text-2xl mr-2" />
					<span>Ladda ner CV</span>
				</a>
				<div className="flex gap-4">
					{socials.map((item, idx) => (
						<div key={idx}>
							<a
								href={item.url}
								className="icon-link"
								id={item.desc}
								aria-label={item.desc}
							>
								<item.icon className="text-2xl" />
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default BioPanel;
