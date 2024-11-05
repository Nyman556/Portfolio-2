import React, { useState } from "react";
import { CgChevronDown, CgChevronUp } from "react-icons/cg";

function EducationItem({ edu }) {
	const [open, setOpen] = useState(false);
	return (
		<li className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
			<div className="flex items-start mb-2">
				<div className="bg-white rounded-full p-2 mr-4 w-16 h-16 sm:w-24 sm:h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
					<img
						alt={edu.logoAlt}
						loading="lazy"
						width="80"
						height="80"
						className="object-contain w-12 h-12 sm:w-20 sm:h-20"
						src={edu.imgSrc}
					/>
				</div>
				<div className="flex-grow">
					<h3 className="text-xl sm:text-2xl font-semibold text-gray-100">
						{edu.program}
					</h3>
					<p className="text-base sm:text-lg text-gray-300">
						{edu.institution}, {edu.location}
					</p>
					<p className="text-sm sm:text-base text-gray-400">
						{edu.startDate + " - " + edu.endDate}
					</p>
					<p className="text-sm sm:text-base text-gray-400">
						{edu.graduation ? "Examensdatum: " + edu.graduation : null}
					</p>
					<details className="mt-2">
						<summary
							className="cursor-pointer text-gray-300 hover:text-white transition-colors duration-300 flex items-center select-none"
							onClick={() => {
								setOpen(!open);
							}}
						>
							{open ? (
								<CgChevronUp className="text-2xl" />
							) : (
								<CgChevronDown className="text-2xl" />
							)}
							<span>Kurser</span>
						</summary>
						<ul className="mt-4 ml-4 space-y-2">
							{edu.courses.map((course, index) => (
								<li key={index} className="text-gray-300">
									• {course.name}, {course.credits} points
								</li>
							))}
						</ul>
					</details>
				</div>
			</div>
		</li>
	);
}

export default EducationItem;
