import React from "react";
import { MdSimCardDownload } from "react-icons/md";
import profilePic from "/images/profile.png";

import { contactLinks } from "../data";

function BioPanel() {
	return (
		<div className="bio-panel">
			<img src={profilePic} alt="Me!" className=" rounded-full w-36" />
			<h1 className="mb-2">Johan Nyman</h1>
			<h2 className="h2-small mb-4">Frontend Utvecklare</h2>
			<h3 className="mb-4">📍 Växjö, Sweden 🇸🇪</h3>
			<p className="p-sm mb-4">Jag förvandlar tankar till webblösningar!</p>
			<div className="flex space-x-3 items-center">
				<button
					href="/file resume.pdf"
					download=""
					className="btn mr-20 flex gap-2 items-center"
				>
					<MdSimCardDownload className="text-xl" />
					<p>CV</p>
				</button>
				{contactLinks.map((item, idx) => {
					return (
						<a key={idx} href={item.url} className="icon-link">
							<item.icon />
						</a>
					);
				})}
			</div>
		</div>
	);
}

export default BioPanel;
