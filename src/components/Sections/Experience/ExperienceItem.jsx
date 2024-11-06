import React from "react";
import Tag from "../../General/Tag";

function ExperienceItem({ expItem }) {
	return (
		<div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-600">
			<div className="flex items-start mb-2">
				<div className="bg-white rounded-full p-2 mr-4 w-24 h-24 flex-shrink-0 flex items-center justify-center overflow-hidden">
					<img
						alt={expItem.company}
						loading="lazy"
						width="80"
						height="80"
						className="object-contain w-12 h-12 sm:w-20 sm:h-20"
						src={expItem.imgSrc}
					/>
				</div>
				<div className="flex-grow">
					<h3 className="text-2xl font-semibold text-gray-100">
						{expItem.title}
					</h3>
					<p className="text-lg text-gray-300">
						{expItem.company}, {expItem.location}
					</p>
					<p className="text-gray-400">
						{expItem.startDate + " - " + expItem.endDate}
					</p>
				</div>
			</div>
			<ul className="space-y-2 text-gray-300 mb-4">
				{expItem.tasks.map((task, index) => (
					<li key={index} className="flex items-start">
						<span className="mr-2 text-gray-500">•</span>
						<span>{task}</span>
					</li>
				))}
			</ul>
			<div className="flex flex-wrap">
				{expItem.tags.map((tag, idx) => (
					<Tag key={idx} skill={tag} fixedBg={true} />
				))}
			</div>
		</div>
	);
}

export default ExperienceItem;
