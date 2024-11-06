import React from "react";
import { MdSimCardDownload } from "react-icons/md";
import profilePic from "/images/profile.png";

import { socials } from "../data";
import { Tooltip } from "react-tooltip";

function BioPanel() {
	return (
		<div className="bio-panel">
			<div className="flex flex-col items-center md:flex-row md:items-start md:justify-between mb-4">
				<div className="text-center md:text-left flex flex-col">
					<h1 className="mb-2">Johan Nyman</h1>
					<h2 className="h2-small mb-2">Frontend Utvecklare</h2>
					<h3 className="mb-4">📍 Växjö, Sweden 🇸🇪</h3>
					<p className=" mb-4">Jag förvandlar tankar till webblösningar!</p>
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
						<>
							<a
								key={idx}
								href={item.url}
								className="icon-link"
								id={item.desc}
								aria-label={item.desc}
							>
								<item.icon className="text-2xl" />
							</a>
							<Tooltip anchorSelect={"#" + item.desc} place="bottom">
								{item.desc}
							</Tooltip>
						</>
					))}
				</div>
			</div>
		</div>
	);
}

export default BioPanel;
