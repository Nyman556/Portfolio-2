import React from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Tag from "../Tag";

function ProjectItem({ project }) {
	console.log(project);
	return (
		<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
			<div className="flex flex-col md:flex-row">
				<div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
					<img
						width="300"
						height="200"
						decoding="async"
						data-nimg="1"
						className="rounded-lg object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
						src={project.image}
					/>
				</div>
				<div className="md:w-2/3">
					<h3 className="text-2xl font-semibold mb-3 text-gray-100">
						{project.title}
					</h3>
					<ul className="space-y-2 text-gray-300 mb-4">
						{project.features.map((feature, idx) => {
							return (
								<li key={idx} className="flex items-start">
									<span className="mr-2 mt-1.5 text-gray-500">•</span>
									<span>{feature}</span>
								</li>
							);
						})}
					</ul>
					<div className="flex flex-wrap">
						{project.techStack.map((tech, idx) => {
							return <Tag key={idx} skill={tech} />;
						})}
					</div>
					<div className="flex space-x-4 mt-4">
						<a
							href={project.githubLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-2 items-center text-gray-300 hover:text-white transition-colors duration-300 text-md"
						>
							<BsGithub />
							<span>Github </span>
						</a>
						<a
							href={project.liveDemoLink}
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-2 items-center text-gray-300 hover:text-white transition-colors duration-300 text-md"
						>
							<BsArrowUpRight />
							<span>Live Demo</span>
						</a>
					</div>
				</div>
			</div>
		</li>
	);
}

export default ProjectItem;
