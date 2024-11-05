import React from "react";
import ExperienceItem from "../Items/ExperienceItem";
import { ExperienceData } from "../../data";

function Experience() {
	return (
		<section className="mb-12">
			<h2 className="mb-6">Erfarenhet</h2>
			<div className="space-y-6">
				{ExperienceData.map((expItem, idx) => (
					<ExperienceItem key={idx} expItem={expItem} />
				))}
			</div>
		</section>
	);
}

export default Experience;
