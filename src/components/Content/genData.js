import { FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export const socials = [
	{ icon: FiGithub, desc: "Github", path: "https://github.com/Nyman556" },
	{
		icon: FiLinkedin,
		desc: "LinkedIn",
		path: "https://www.linkedin.com/in/johan-nyman-b574831bb/",
	},
	{ icon: FiSend, desc: "Mail", path: "mailto:johan.nyman.dev@gmail.com" },
];

export const skillsData = [
	{
		category: "Språk",
		skills: ["javascript", "typescript", "c#", "PHP"],
		bgColor: "bg-blue-500",
	},
	{
		category: "Ramverk",
		skills: [
			"react",
			"nextJS",
			"vite",
			"angular",
			"expressJS",
			"ASP.Net",
			"tailwindCSS",
		],
		bgColor: "bg-green-500",
	},
	{
		category: "backend",
		skills: ["Node.js", ".NET", "REST APIer"],
		bgColor: "bg-purple-500",
	},
	{
		category: "Databaser",
		skills: ["postgres", "SQL", "mongoDB"],
		bgColor: "bg-red-500",
	},
	{
		category: "Metoder",
		skills: ["agilt", "Git"],
		bgColor: "bg-yellow-500",
	},
];
