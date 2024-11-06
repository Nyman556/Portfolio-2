import React from "react";
import { skillsData } from "../Content/genData";
function Tag({ skill, fixedBg }) {
	let bgColor = "bg-green-500";
	let textColor = "text-green-500";

	if (!fixedBg) {
		const skillCategory = skillsData.find((category) =>
			category.skills.includes(skill)
		);
		bgColor = skillCategory ? skillCategory.bgColor : "bg-gray-300";
		textColor = "text-white";
	}

	return <span className={`${bgColor} ${textColor} tag`}>{skill}</span>;
}

export default Tag;
