import React from "react";
import { skillsData } from "../../data";
import Tag from "../Tag";

function Skills() {
	return (
		<section>
			<h2 className="mb-6">Färdigheter</h2>
			{skillsData.map(({ category, skills }) => (
				<div className="mb-4" key={category}>
					<h4 className="mb-2">{category}</h4>
					<div className="flex flex-wrap">
						{skills.map((skill, idx) => (
							<Tag key={idx} skill={skill} />
						))}
					</div>
				</div>
			))}
		</section>
	);
}

export default Skills;
