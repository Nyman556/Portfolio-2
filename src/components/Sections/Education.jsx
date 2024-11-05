import React from "react";
import { EducationData } from "../../data";
import EducationItem from "../Items/EducationItem";

function Education() {
	return (
		<section className="mb-12">
			<h2 className="text-3xl font-bold mb-6 text-gray-100">Utbildning</h2>
			<ul className="space-y-6">
				{EducationData.map((edu, idx) => (
					<EducationItem key={idx} edu={edu} />
				))}
			</ul>
		</section>
	);
}

export default Education;
