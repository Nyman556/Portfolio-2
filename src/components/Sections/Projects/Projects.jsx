import React from "react";
import { ProjectsData } from "../../Content/prjData";
import ProjectItem from "./ProjectItem";

function Projects() {
	return (
		<section className="mb-12">
			<h2 className="text-3xl font-bold mb-6 text-gray-100">Projekt</h2>
			<ul className="space-y-12">
				{ProjectsData.map((project, idx) => {
					return <ProjectItem key={idx} project={project} />;
				})}
			</ul>
		</section>
	);
}

export default Projects;
